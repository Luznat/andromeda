import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme/colors';
import type { ChatMessage } from '../../types/chatMessage';
import type { MessageThreadPreview } from '../../types/messageThread';
import { CHAT_NEBULA_URI, styles } from './styles';

function firstName(fullName: string): string {
  const part = fullName.trim().split(/\s+/)[0];
  return part ?? fullName;
}

function seedMessages(participantName: string): ChatMessage[] {
  return [
    {
      id: 'm1',
      author: 'professional',
      body: `Bem-vinda de volta ao Andrômeda, ${firstName(participantName)}. Sinto que as estrelas estão particularmente falantes hoje sobre sua jornada profissional. Como você se sente com a transição que conversamos na última Lua Nova?`,
      createdAtLabel: '14:22',
      showMeta: true,
    },
    {
      id: 'm2',
      author: 'client',
      body:
        'Oi! Confesso que ainda sinto um pouco de frio na barriga. Parece que o caminho está claro, mas o medo do desconhecido ainda me trava em alguns momentos.',
      createdAtLabel: '14:25',
      readReceipt: true,
    },
    {
      id: 'm3a',
      author: 'professional',
      body:
        'O frio na barriga é o sinal de que sua alma está expandindo para caber no novo destino. Não tema o vácuo; ele é o espaço onde a criação acontece.',
      createdAtLabel: '14:26',
      showMeta: false,
    },
    {
      id: 'm3b',
      author: 'professional',
      body: 'Preparei um pequeno ritual para você realizar esta noite. Gostaria de vê-lo agora?',
      createdAtLabel: '14:26',
      italic: true,
      showMeta: true,
    },
    {
      id: 'm4',
      author: 'client',
      body: 'Com certeza! Estou precisando de algo para me aterrar.',
      createdAtLabel: '14:28',
    },
  ];
}

type ChatScreenProps = {
  thread: MessageThreadPreview;
  onBack: () => void;
};

export function ChatScreen({ thread, onBack }: ChatScreenProps) {
  const listRef = useRef<FlatList<ChatMessage>>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(() => seedMessages(thread.participantName));
  const [draft, setDraft] = useState('');
  const [headerHeight, setHeaderHeight] = useState(56);

  const canSend = draft.trim().length > 0;
  const proMetaName = firstName(thread.participantName);

  const appendClientMessage = useCallback(() => {
    const text = draft.trim();
    if (!text) {
      return;
    }
    const now = new Date();
    const label = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        author: 'client',
        body: text,
        createdAtLabel: label,
      },
    ]);
    setDraft('');
    requestAnimationFrame(() => listRef.current?.scrollToEnd({ animated: true }));
  }, [draft]);

  const renderItem = useCallback(
    ({ item }: { item: ChatMessage }) => {
      const isClient = item.author === 'client';
      const showMeta = item.showMeta !== false;

      if (isClient) {
        return (
          <View style={[styles.bubbleRow, styles.bubbleRowClient]}>
            <View style={styles.bubbleClient}>
              <Text style={styles.bubbleClientText}>{item.body}</Text>
            </View>
            {showMeta ? (
              <View style={styles.metaClientRow}>
                <Text style={styles.metaClient}>
                  {item.createdAtLabel}
                  {item.readReceipt ? ' • Lido' : ''}
                </Text>
                {item.readReceipt ? (
                  <MaterialIcons name="done-all" size={12} color={colors.secondary} />
                ) : null}
              </View>
            ) : null}
          </View>
        );
      }

      return (
        <View style={[styles.bubbleRow, styles.bubbleRowPro]}>
          <View style={styles.bubblePro}>
            <Text style={[styles.bubbleProText, item.italic && styles.bubbleProTextItalic]}>{item.body}</Text>
          </View>
          {showMeta ? (
            <Text style={styles.metaPro}>
              {item.createdAtLabel} • {proMetaName}
            </Text>
          ) : null}
        </View>
      );
    },
    [proMetaName],
  );

  const listHeader = useCallback(
    () => (
      <View style={styles.datePillWrap}>
        <View style={styles.datePill}>
          <Text style={styles.datePillText}>Hoje</Text>
        </View>
      </View>
    ),
    [],
  );

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 8 : 0}
    >
      <View style={localStyles.flexFill}>
        <View style={localStyles.bgStack} pointerEvents="none">
          <Image source={{ uri: CHAT_NEBULA_URI }} style={styles.bgImage} resizeMode="cover" />
          <LinearGradient
            colors={['rgba(13, 18, 40, 0.82)', 'rgba(13, 18, 40, 0.12)', colors.background]}
            locations={[0, 0.45, 1]}
            style={styles.bgGradientTop}
          />
          <View style={styles.atmosphereTop} />
          <View style={styles.atmosphereBottom} />
        </View>

        <FlatList
          ref={listRef}
          key={thread.id}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={styles.list}
          ListHeaderComponent={listHeader}
          contentContainerStyle={[styles.listContent, { paddingTop: headerHeight }]}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
        />

        <View
          style={styles.headerOuter}
          accessibilityRole="header"
          onLayout={(e) => {
            const h = e.nativeEvent.layout.height;
            if (h > 0) {
              setHeaderHeight(h);
            }
          }}
        >
          <View style={styles.headerScrim} pointerEvents="none" />
          <BlurView intensity={72} tint="dark" style={styles.headerBlurLayer} />
          <View style={styles.headerRow}>
            <View style={styles.headerLeft}>
              <Pressable onPress={onBack} style={styles.headerBack} accessibilityLabel="Voltar para mensagens">
                <MaterialIcons name="arrow-back" size={24} color="rgba(196, 181, 253, 0.95)" />
              </Pressable>
              <View style={styles.headerIdentity}>
                <View style={styles.headerAvatarWrap}>
                  <View style={styles.headerAvatar}>
                    <Image source={{ uri: thread.avatarUri }} style={styles.headerAvatarImage} resizeMode="cover" />
                  </View>
                  {thread.isOnline ? <View style={styles.headerOnlineDot} /> : null}
                </View>
                <View style={styles.headerTextBlock}>
                  <Text style={styles.headerTitle} numberOfLines={1}>
                    {thread.participantName}
                  </Text>
                  <Text style={styles.headerSubtitle} numberOfLines={1}>
                    {thread.isOnline ? 'Canalizando sua energia...' : 'Aguardando conexão'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.headerActions}>
              <Pressable style={styles.headerIconHit} accessibilityLabel="Vídeo em breve">
                <MaterialIcons name="videocam" size={22} color="rgba(148, 163, 184, 0.95)" />
              </Pressable>
              <Pressable style={styles.headerIconHit} accessibilityLabel="Mais opções">
                <MaterialIcons name="more-vert" size={22} color="rgba(148, 163, 184, 0.95)" />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={[localStyles.footerWrap, { paddingBottom: 12 }]}>
          <BlurView intensity={60} tint="dark" style={styles.footerBlur}>
            <View style={styles.footerInner}>
              <Pressable style={styles.attachHit} accessibilityLabel="Anexar em breve">
                <MaterialIcons name="add-circle" size={26} color="rgba(148, 163, 184, 0.95)" />
              </Pressable>
              <TextInput
                style={styles.input}
                placeholder="Escreva sua mensagem para as estrelas..."
                placeholderTextColor="rgba(71, 85, 105, 0.95)"
                value={draft}
                onChangeText={setDraft}
                multiline
                maxLength={2000}
                accessibilityLabel="Campo de mensagem"
              />
              <Pressable
                onPress={appendClientMessage}
                disabled={!canSend}
                style={[styles.sendButton, !canSend && styles.sendButtonDisabled]}
                accessibilityRole="button"
                accessibilityLabel="Enviar mensagem"
              >
                <MaterialIcons name="flare" size={26} color={colors.onSecondary} />
              </Pressable>
            </View>
          </BlurView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const localStyles = StyleSheet.create({
  flexFill: {
    flex: 1,
  },
  bgStack: {
    ...StyleSheet.absoluteFillObject,
  },
  footerWrap: {
    paddingHorizontal: 24,
    paddingTop: 12,
  },
});
