import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import { KeyboardEventHandler } from 'react';
import { PatternFormat } from 'react-number-format';

interface InputDateProps {
  placeholder?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  form: UseFormReturn<FieldValues>;
}

export const InputDate = ({ placeholder, onKeyDown, form }: InputDateProps) => {
  return (
    <div className='flex h-11 items-center rounded-full shadow-inner justify-between bg-transparent focus:outline-none opacity-60 text-grey-3 text-sm w-full placeholder-grey-2'>
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
            className={`bg-transparent text-left pl-4 placeholder-slate-400 focus:outline-none`}
          />
        )}
      />
    </div>
  );
};
