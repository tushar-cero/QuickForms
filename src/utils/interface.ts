export enum TFormInput {
  SHORT = 'short',
  LONG = 'long',
  NUMBER = 'number',
  DATE = 'date',
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  UPLOAD = 'upload'
}

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
