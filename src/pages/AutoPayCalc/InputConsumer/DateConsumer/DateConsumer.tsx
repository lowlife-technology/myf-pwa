import { PlusIcon } from '@heroicons/react/20/solid';
import { MaskedInput } from '../../../../components/MaskedInput/MaskedInput';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { KeyboardEventHandler } from 'react';

interface InputConsumerProps {
  onClick?: () => void;
  placeholder?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  form: UseFormReturn<FieldValues>;
}

export const DataConsumer = ({ placeholder, onKeyDown, onClick, form }: InputConsumerProps) => {
  const AddAsset = () => {
    return (
      <button
        onClick={onClick}
        className='bg-slate-400  hover:bg-slate-600 text-white rounded-full shadow-md focus:outline-none'
      >
        <PlusIcon className='w-4 h-4' />
      </button>
    );
  };

  return (
    <MaskedInput
      onKeyDown={onKeyDown}
      form={form}
      placeholder={placeholder}
      children={<AddAsset />}
    />
  );
};
