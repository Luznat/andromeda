export type ChatMessageAuthor = 'client' | 'professional';

export type ChatMessage = {
  id: string;
  body: string;
  createdAtLabel: string;
  author: ChatMessageAuthor;
  /** Texto em itálico (ex.: destaque místico na bolha do profissional). */
  italic?: boolean;
  /** Só cliente: exibe “Lido” + ícone de confirmação dupla. */
  readReceipt?: boolean;
  /** Se `false`, não renderiza a linha de meta abaixo da bolha (agrupar várias bolhas). */
  showMeta?: boolean;
};
