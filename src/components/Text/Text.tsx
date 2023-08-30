import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

interface TextProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>,
    'children' | 'className'
  > {
  size?: 'mini' | 'small' | 'large' | 'extraLarge';
  children?: ReactNode;
  opacity?: 'massive' | 'normal' | 'easy';
  color?: 'red-1' | 'grey-1' | 'grey-2';
  className?: string;
}

export const Text = ({ size, children, opacity, color, className, ...rest }: TextProps) => {
  let textSize = 'text-md';
  let textColor = 'text-grey3';
  let textOpacity = 'text-md';
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
  const textColors = () => {
    switch (color) {
      case 'red-1':
        textColor = 'text-red-1';
        break;
      case 'grey-1':
        textColor = 'text-grey-1';
        break;
      case 'grey-2':
        textColor = 'text-grey-2';
        break;
      default:
        'text-grey-3';
        break;
    }
  };
  const textOpacities = () => {
    switch (opacity) {
      case 'easy':
        textOpacity = 'opacity-80';
        break;
      case 'normal':
        textOpacity = 'opacity-60';
        break;
      case 'massive':
        textOpacity = 'opacity-20';
        break;
      default:
        '';
        break;
    }
  };

  textSizes();
  textOpacities();
  textColors();

  return (
    <p
      {...rest}
      className={`text-grey-3 ${textSize} ${textOpacity} ${textColor} opacity-60 font-normal ${className}`}
    >
      {children}
    </p>
  );
};
