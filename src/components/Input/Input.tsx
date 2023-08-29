import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Text } from '../Text/Text';
import { useState } from 'react';
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormReturn } from 'react-hook-form';

interface Input {
  onInputButton: () => void;
  inputButton?: boolean;
  label?: string;
  form: UseFormReturn<FieldValues>;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean | FieldError | Merge<FieldError, FieldErrorsImpl>;
  icon?: 'password' | 'aleft' | 'arigth';
  defaultValue?: string;
  passwordMode?: boolean;
  inputType?: string;
  inputButtonType?: 'button' | 'submit' | 'reset' | undefined;
  placeholder?: string;
}

export const Input = ({
  onInputButton,
  inputButton,
  form,
  label,
  name,
  icon,
  onChange,
  disabled,
  passwordMode = false,
  inputType,
  defaultValue,
  placeholder,
  inputButtonType
}: InputProps) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const iconStyle = `w-5 h-5 ${disabled ? 'text-grey-2' : 'text-grey-3'} `;
  let iconType = <ArrowRightIcon className={iconStyle} />;
  const IconType = () => {
    switch (icon) {
      case 'aleft':
        iconType = <ArrowLeftIcon className={iconStyle} />;

        break;
      case 'arigth':
        iconType = <ArrowRightIcon className={iconStyle} />;
        break;
      case 'password':
        iconType = (
          <div>
            {passwordMode ? (
              <EyeIcon className={iconStyle} />
            ) : (
              <EyeSlashIcon className={iconStyle} />
            )}
          </div>
        );
        break;

      default:
        break;
    }
    return iconType;
  };

  return (
    <div className='w-full gap-2 flex flex-col'>
      <Text>{label}</Text>
      <div className='flex h-11 p-1  items-center rounded-full w-full shadow-inner justify-between '>
        <input
          {...form.register(name)}
          type={passwordMode ? 'password' : inputType}
          defaultValue={defaultValue}
          autoComplete={passwordMode ? 'on' : ''}
          placeholder={placeholder}
          onChange={onChange}
          style={{ paddingLeft: '12px' }}
          className='bg-transparent focus:outline-none opacity-60 text-grey-3 text-sm w-full placeholder-grey-2'
        />
        {inputButton ? (
          <button
            type={inputButtonType}
            disabled={
              typeof disabled === 'boolean'
                ? disabled
                : disabled !== undefined && disabled.type === 'manual'
            }
            onClick={() => {
              onInputButton();
              setIsBouncing(!isBouncing);
            }}
            className={`bg-brand-grey1 items-center  flex justify-center rounded-full w-8 h-8 shadow-button mr-1 cursor-pointer ${
              isBouncing ? 'animate-pushPull' : ''
            }`}
          >
            <IconType />
          </button>
        ) : null}
      </div>
      {form.formState.errors[name] && (
        <Text size='small' opacity='easy' color='red-1'>
          {`${form.formState.errors[name]?.message}` || 'Valor inválido'}
        </Text>
      )}
    </div>
  );
};
