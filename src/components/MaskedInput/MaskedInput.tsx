import { KeyboardEventHandler, ReactNode } from 'react';
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

interface MaskedInputProps {
  form: UseFormReturn<FieldValues>;
  small?: boolean;
  children?: ReactNode;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}

export const MaskedInput = ({
  form,
  small,
  onKeyDown,
  children,
  placeholder
}: MaskedInputProps) => {
  return (
    <div className=' flex items-center justify-center border bg-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 mt-2 px-3 py-1'>
      <Controller
        name='date'
        control={form.control}
        render={() => (
          <PatternFormat
            id='date'
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            format={'##/ ##/ ####'}
            onValueChange={(values) => {
              form.setValue('date', values.value);
            }}
            className={`bg-transparent text-center placeholder-slate-400 focus:outline-none ${
              small ? 'w-10' : ''
            } `}
          />
        )}
      />
      {children}
    </div>
  );
};
