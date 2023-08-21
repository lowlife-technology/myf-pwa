import { PlusIcon } from '@heroicons/react/20/solid';
import { Input } from '../../../components/Input/Input';
import { ChangeEventHandler } from 'react';

interface InputConsumerProps {
  onClick?: () => void;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value?: string | number | undefined;
}

export const InputConsumer = ({ placeholder, onClick, onChange, value }: InputConsumerProps) => {
  const AddAsset = () => {
    return (
      <button
        onClick={onClick}
        className='bg-slate-400 hover:bg-slate-600 text-white rounded-full shadow-md focus:outline-none'
      >
        <PlusIcon className='w-4 h-4' />
      </button>
    );
  };

  return (
    <Input placeholder={placeholder} onChange={onChange} children={<AddAsset />} value={value} />
  );
};
