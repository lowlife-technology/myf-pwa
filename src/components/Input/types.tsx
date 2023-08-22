import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onInputButton?: () => void;
  inputButton?: boolean;
  label?: string;
}
