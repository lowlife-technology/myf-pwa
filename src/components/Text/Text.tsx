import { ReactNode } from 'react';

interface TextProps {
  size?: 'mini' | 'small' | 'large' | 'extraLarge';
  children: ReactNode;
}

export const Text = ({ size, children }: TextProps) => {
  let textSize = 'text-md';
  const textSizes = () => {
    switch (size) {
      case 'mini':
        textSize = 'text-xs';
        break;
      case 'small':
        textSize = 'text-sm';
        break;
      case 'large':
        textSize = 'text-xl';
        break;
      case 'extraLarge':
        textSize = 'text-2xl';
        break;

      default:
        break;
    }
  };
  textSizes();

  return <p className={`text-grey-3 ${textSize} opacity-60 font-normal`}>{children}</p>;
};
