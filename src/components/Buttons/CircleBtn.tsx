import { Text } from '../Text/Text';

interface CircleBtnProps {
  onClick?: () => void;
  pressed?: boolean;
  leftText?: string;
  rigthText?: string;
}

export const CircleBtn = ({ onClick, pressed, leftText, rigthText }: CircleBtnProps) => {
  return (
    <div className='flex items-center gap-3'>
      <Text className={`${!leftText && 'hidden'}`}>{leftText}</Text>
      <button
        onClick={onClick}
        className={`bg-brand-grey1 items-center flex justify-center rounded-full w-8 h-8 ${
          pressed ? 'shadow-inner' : 'shadow-button'
        } mr-1`}
      ></button>
      <Text className={`${!rigthText && 'hidden'}`}>{rigthText}</Text>
    </div>
  );
};
