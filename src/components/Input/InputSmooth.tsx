import { ChangeEventHandler, KeyboardEventHandler, LegacyRef, ReactNode } from 'react';

export interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  children: ReactNode;
  size?: 'small' | 'medium';
  type?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  maxLength?: number;
  elementPosition?: 'right' | 'left';
  pattern?: string;
  placeholder?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
}

export const InputSmooth = ({
  onChange,
  value,
  children,
  pattern,
  maxLength,
  onKeyDown,
  elementPosition = 'right',
  type,
  size,
  ref,
  placeholder = 'Enter asset details'
}: InputProps) => {
  return (
    <div className=' flex items-center justify-center border bg-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 px-3 py-1'>
      <div className={`${elementPosition === 'right' && 'hidden'}`}>{children}</div>
      <input
        ref={ref}
        pattern={pattern}
        onKeyDown={onKeyDown}
        type={type}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={`bg-transparent text-center placeholder-slate-400 focus:outline-none ${
          size ? (size === 'small' ? 'w-8' : 'w-16') : ''
        } `}
        placeholder={placeholder}
      />
      <div className={`${elementPosition === 'left' && 'hidden'}`}>{children}</div>
    </div>
  );
};
