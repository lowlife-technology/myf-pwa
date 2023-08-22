import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Text } from '../Text/Text';
import { useState } from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface InputProps {
  onInputButton: () => void;
  inputButton?: boolean;
  label?: string;
  form: UseFormReturn<FieldValues>;
  name: string;
  inputType?: string;
  inputButtonType?: 'button' | 'submit' | 'reset' | undefined;
  placeholder?: string;
}

export const Input = ({
  onInputButton,
  inputButton,
  form,
  label,
  name,
  inputType,
  placeholder,
  inputButtonType
}: InputProps) => {
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <div className='w-full gap-2 flex flex-col'>
      <Text>{label}</Text>
      <div className='flex h-11 p-1  items-center rounded-full w-full shadow-inner justify-between '>
        <input
          {...form.register(name)}
          type={inputType}
          autoComplete={inputType === 'password' ? 'on' : ''}
          placeholder={placeholder}
          style={{ paddingLeft: '12px' }}
          className='bg-transparent focus:outline-none opacity-60 text-grey-3 text-sm w-full placeholder-grey-2'
        />
        {inputButton ? (
          <button
            type={inputButtonType}
            onClick={() => {
              onInputButton();
              setIsBouncing(!isBouncing);
            }}
            className={`bg-brand-grey1 items-center  flex justify-center rounded-full w-8 h-8 shadow-button mr-1 cursor-pointer ${
              isBouncing ? 'animate-pushPull' : ''
            }`}
          >
            <ArrowRightIcon className='w-5 h-5 text-grey-3' />
          </button>
        ) : null}
      </div>
      {form.formState.errors[name] && (
        <Text size='small' color='red-1'>
          {`${form.formState.errors[name]?.message}` || 'Valor inválido'}
        </Text>
      )}
    </div>
  );
};
