export type MessageThreadPreview = {
  id: string;
  participantName: string;
  lastMessage: string;
  timeLabel: string;
  avatarUri: string;
  unreadCount?: number;
  /** Destaque visual (ex.: conversa não lida): nome em primary, hora mais quente. */
  isHighlighted?: boolean;
  isOnline?: boolean;
};
