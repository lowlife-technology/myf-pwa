import { PlusIcon } from '@heroicons/react/20/solid';
import { Input } from '../../../../components/Input/Input';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface InputConsumerProps {
  onClick?: () => void;
  placeholder?: string;
  pattern?: string;
  type?: string;
  text?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  maxLength?: number;
  elementPosition?: 'left' | 'right';
  size?: 'small' | 'medium';
  buttonIcon?: 'add' | 'text';
  onChange?: ChangeEventHandler;
  value?: string | number | undefined;
}

export const InputConsumer = ({
  placeholder,
  onClick,
  onChange,
  value,
  size,
  onKeyDown,
  maxLength,
  elementPosition,
  text,
  type,
  buttonIcon,
  pattern
}: InputConsumerProps) => {
  const AddAsset = () => {
    return buttonIcon ? (
      buttonIcon === 'add' ? (
        <button
          onClick={onClick}
          className='bg-slate-400 hover:bg-slate-600 text-white rounded-full shadow-md focus:outline-none'
        >
          <PlusIcon className='w-4 h-4' />
        </button>
      ) : (
        <p>{text}</p>
      )
    ) : null;
  };

  return (
    <Input
      placeholder={placeholder}
      size={size}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      elementPosition={elementPosition}
      onChange={onChange}
      children={buttonIcon && <AddAsset />}
      type={type}
      value={value}
      pattern={pattern}
    />
  );
};
