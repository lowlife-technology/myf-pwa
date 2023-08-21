import { ChangeEventHandler, LegacyRef, ReactNode } from 'react';

export interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  children: ReactNode;
  small?: boolean;
  placeholder?: string;
  ref?: LegacyRef<HTMLInputElement> | undefined;
}

export const Input = ({
  onChange,
  value,
  children,
  small,
  ref,
  placeholder = 'Enter asset details'
}: InputProps) => {
  return (
    <div className=' flex items-center justify-center border bg-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-2 px-3 py-1'>
      <input
        ref={ref}
        type='text'
        value={value}
        onChange={onChange}
        className={`bg-transparent placeholder-slate-400 focus:outline-none ${
          small ? 'w-10' : ''
        } `}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};
