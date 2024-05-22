import type { ReactNode } from 'react';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface BaseLayoutProps {
  children: ReactNode
}

export type Tab = {
  value: string;
  label: string,
  content: React.ReactNode
}