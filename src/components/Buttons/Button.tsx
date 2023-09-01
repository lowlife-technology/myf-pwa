import { Text } from '../Text/Text';

interface ButtonProps {
  onClick?: () => void;
  pressed?: boolean;
  label?: string;
  text?: string;
  disabled?: boolean;
  size?: 'small';
  color?: 'green' | 'red';
}

export const Button = ({
  onClick,
  pressed,
  color,
  label,
  text = 'text',
  size,
  disabled
}: ButtonProps) => {
  let btnCollor = `bg-brand-grey1`;
  let btnSize = 'w-full';

  switch (color) {
    case 'green':
      btnCollor = 'bg-green-100';
      break;
    case 'red':
      btnCollor = 'bg-red-100';
      break;

    default:
      break;
  }

  switch (size) {
    case 'small':
      btnSize = 'w-24';
      break;

    default:
      break;
  }

  return (
    <div className='flex flex-col w-full gap-3'>
      <Text className={`${label ? '' : 'hidden'}`}>{label}</Text>
      <button
        onClick={onClick}
        disabled={disabled}
        className={` ${btnCollor} transition-colors delay-100 ease-in-out items-center flex justify-center p-4 ${btnSize} ${
          size === 'small' ? 'rounded-lg' : 'rounded-full'
        } h-10 ${pressed ? 'shadow-inner' : 'shadow-button'}`}
      >
        <Text>{text}</Text>
      </button>
    </div>
  );
};
