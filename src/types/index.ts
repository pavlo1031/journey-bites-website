export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export type Tab = {
  value: string;
  label: string,
  content: React.ReactNode
}