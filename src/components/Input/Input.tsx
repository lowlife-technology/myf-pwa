import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Text } from '../Text/Text';

interface InputProps {
  onInputButton?: () => void;
  inputButton?: boolean;
  label?: string;
}

export const Input = ({ onInputButton, inputButton, label }: InputProps) => {
  return (
    <div className='w-full gap-2 flex flex-col'>
      <Text>{label}</Text>
      <div className='flex h-11 p-1 items-center rounded-full w-full shadow-inner justify-between '>
        <input type='text ' className='bg-transparent placeholder-slate-400 focus:outline-none' />
        {inputButton ? (
          <div
            onClick={onInputButton}
            className='bg-brand-grey1 items-center flex justify-center rounded-full w-8 h-8 shadow-button mr-1 cursor-pointer'
          >
            <ArrowRightIcon className='w-5 h-5 text-grey-3' />
          </div>
        ) : null}
      </div>
    </div>
  );
};
