import { Text } from '../Text/Text';

interface CircleBtnProps {
  onClick?: () => void;
  pressed?: boolean;
  leftText?: string;
  rigthText?: string;
  size?: 'small';
  color?: 'red' | 'grey' | 'lilac' | 'black' | 'blue' | 'jade' | string;
}

export const CircleBtn = ({
  onClick,
  pressed,
  leftText,
  rigthText,
  size,
  color
}: CircleBtnProps) => {
  let btnSize = 'w-8 h-8';
  let btnColor = 'bg-brand-grey1';

  switch (size) {
    case 'small':
      btnSize = 'w-5 h-5';
      break;

    default:
      break;
  }

  switch (color) {
    case 'red':
      btnColor = 'bg-red-1';
      break;
    case 'grey':
      btnColor = 'bg-grey-1';
      break;
    case 'lilac':
      btnColor = 'bg-lilac-1';
      break;
    case 'blue':
      btnColor = 'bg-blue-1';
      break;
    case 'black':
      btnColor = 'bg-grey-3';
      break;
    case 'jade':
      btnColor = 'bg-jade-1';
      break;

    default:
      break;
  }

  return (
    <div className='flex items-center gap-3'>
      <Text className={`${!leftText && 'hidden'}`}>{leftText}</Text>
      <button
        onClick={onClick}
        className={`${btnColor} items-center flex justify-center rounded-full ${btnSize} ${
          pressed ? 'shadow-inner' : 'shadow-button'
        } mr-1`}
      ></button>
      <Text className={`${!rigthText && 'hidden'}`}>{rigthText}</Text>
    </div>
  );
};
