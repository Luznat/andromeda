import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import type { CosmicTabId } from '../../components/CosmicBottomNav';
import { CosmicBottomNav } from '../../components/CosmicBottomNav';
import { CosmicHeader } from '../../components/CosmicHeader';
import { CosmicScreenBackground } from '../../components/cosmic/CosmicScreenBackground';
import type { MessageThreadPreview } from '../../types/messageThread';
import { styles } from './styles';

const MOCK_THREADS: MessageThreadPreview[] = [
  {
    id: '1',
    participantName: 'Selene da Estrela',
    lastMessage: 'A leitura está completa. O alinhamento de Marte sugere...',
    timeLabel: '14:20',
    avatarUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPiyNiSs_LAkg8fRGc-diSr9Pk487BgpVD8ItnCdMoT2XV6Wp9BPgIq3xuniMAH33od-T6SLvLGpwJ49ks3I1Hic4iw0E34Yh8PjrQF_TZFTKCjeRbIh-xbIQdEkFPN4Bk0DKDcD2Z-LQ0XTy0H2Do4hlJ3rgSP-SiGZqc89sxnmC78ksVepSr-BZ7fIWAAepCYCkYT990ZYjdvUYBAjskJn8NLGmeekdlXAkKuYKQx4j7qkgGrgAlep2mH7LSimhlVoHXAAkBXeo',
    unreadCount: 2,
    isHighlighted: true,
    isOnline: true,
  },
  {
    id: '2',
    participantName: 'Mestre Orion',
    lastMessage: 'As cartas mostram um caminho de renovação para sua jornada.',
    timeLabel: 'Ontem',
    avatarUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCy1ncoMHhw3svM0sPmFsq1LkZeR4vaIgAcd5P2XfbED14gPcDV81LuKtcARbuMN9mAAwST0KyIheXYEwtEvgq75M2yEWNXmJsKReqdQSolYJ6OGnXqBJyameRDN7ZP0nKqF1sI_KyEbz9tBn7L5CrnbiW4oYPrfzXf6-6Yh4V78Yp2OiPO79orKgoOy1MSHAq47yktE6Dt2f5fBOZWuJiXFRP3Hr6nBMGTppSjZToSprhW2dt-tU6QOFx-flobSDXXVgFzjrWMMt0',
  },
  {
    id: '3',
    participantName: 'Guia Lyra',
    lastMessage: 'Lembre-se: o silêncio é a voz da intuição. Busque a paz...',
    timeLabel: 'Segunda',
    avatarUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuChMYE1gDWIMMNqBo3sJ99-6c_YK0CWG3nL8HyYCd_VdytLml1yTK9lu7FGVIRFsQh--80DjcB8OpKaUJ0L4xdB7lpYOBaQwM7dqrDm264U3BVpioEBNMPb6edqSWEwt89lE95STscAM7n5CNTeWx6rttFrYXn0BDdj8YaWI9jhniDmtc60fpOb74cpIbQzW_NP9nuc2SRqxmpycPEphlqsMbW6GnuUAlRlepBdVwGYB6C7TWL-aptFGgl1SZpTfuUd5de8WdkTYw8',
  },
  {
    id: '4',
    participantName: 'Oráculo Helios',
    lastMessage: 'Sua dúvida sobre a carreira será dissipada na próxima Lua Nova.',
    timeLabel: '02 Nov',
    avatarUri:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9c0-XSzNcbmq4_TCGe4ouYSr7LuMWkrgUriobXmrnVDuAMgDfvA2dEczkuQvw7wJ0IAozMiU1fUm-NTSDryhhUy5_bXaovRqVcA4LL0jQttMQ4cvCcCRwCD9hTinlCSUcCyLMbqQx5mnji5TV8FoGC1qQ71PpYjlxxB5cfmTY5kDBsoJoAoH7mKiJXP8TiLGG8UtGL1c-HpcdxYVvE2fxjcR8ezK1KZiYq_oFB6W9IHBzMf1mw-CzbIh1IsXMUftVtIHLFHUhmqA',
  },
];

type MessagesScreenProps = {
  activeTab?: CosmicTabId;
  onTabChange?: (id: CosmicTabId) => void;
  onOpenThread?: (thread: MessageThreadPreview) => void;
};

export function MessagesScreen({ activeTab = 'messages', onTabChange, onOpenThread }: MessagesScreenProps) {
  return (
    <View style={styles.root}>
      <CosmicScreenBackground variant="deepTop" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <CosmicHeader />
        <View style={styles.headingBlock}>
          <Text style={styles.screenTitle}>Mensagens</Text>
          <Text style={styles.subtitle}>Suas conexões astrais</Text>
        </View>

        <View style={styles.threadList}>
          {MOCK_THREADS.map((thread) => (
            <Pressable
              key={thread.id}
              style={({ pressed }) => [styles.threadOuter, pressed && styles.threadRowPressed]}
              accessibilityRole="button"
              accessibilityLabel={`Conversa com ${thread.participantName}`}
              onPress={() => onOpenThread?.(thread)}
            >
              <BlurView intensity={28} tint="dark" style={styles.threadBlur} />
              <View style={styles.threadTint} pointerEvents="none" />
              <View style={styles.threadRow}>
                <View style={styles.avatarCol}>
                  <View
                    style={[
                      styles.threadAvatarRing,
                      thread.isHighlighted ? styles.threadAvatarRingHighlight : styles.threadAvatarRingMuted,
                    ]}
                  >
                    <Image
                      source={{ uri: thread.avatarUri }}
                      style={styles.threadAvatarImage}
                      resizeMode="cover"
                      accessibilityIgnoresInvertColors
                    />
                  </View>
                  {thread.isOnline ? <View style={styles.onlineDot} /> : null}
                </View>
                <View style={styles.threadBody}>
                  <View style={styles.threadTop}>
                    <Text
                      style={[styles.threadName, thread.isHighlighted && styles.threadNameHighlight]}
                      numberOfLines={1}
                    >
                      {thread.participantName}
                    </Text>
                    <Text
                      style={[styles.threadTime, thread.isHighlighted && styles.threadTimeHighlight]}
                      numberOfLines={1}
                    >
                      {thread.timeLabel}
                    </Text>
                  </View>
                  <Text
                    style={[styles.threadPreview, !thread.isHighlighted && styles.threadPreviewMuted]}
                    numberOfLines={1}
                  >
                    {thread.lastMessage}
                  </Text>
                </View>
                <View style={styles.badgeCol}>
                  {thread.unreadCount != null && thread.unreadCount > 0 ? (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>{thread.unreadCount > 9 ? '9+' : thread.unreadCount}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <CosmicBottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </View>
  );
}
