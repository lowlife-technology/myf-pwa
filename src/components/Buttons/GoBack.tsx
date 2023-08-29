import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface GoBackProps {
  onClickBack: () => void;
}
export const GoBack = ({ onClickBack }: GoBackProps) => {
  const [isBouncing, setIsBouncing] = useState(false);
  return (
    <button
      onClick={() => {
        onClickBack();
        setIsBouncing(!isBouncing);
      }}
      className={`bg-brand-grey1 items-center flex justify-center rounded-md w-10 h-10 shadow-button mr-1 cursor-pointer ${
        isBouncing ? 'animate-pushPull' : ''
      }`}
    >
      <ArrowLeftIcon className='w-5 h-5 text-grey-3' />
    </button>
  );
};
