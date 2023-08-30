import { Text } from '../Text/Text';
import { useState } from 'react';
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormReturn } from 'react-hook-form';

interface InputProps {
  onInputButton: () => void;
  inputButton?: boolean;
  label?: string;
  form: UseFormReturn<FieldValues>;
  name: string;
  onClick: (catId: number) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean | FieldError | Merge<FieldError, FieldErrorsImpl>;
  defaultValue?: string;
  passwordMode?: boolean;
  inputType?: string;
  inputButtonType?: 'button' | 'submit' | 'reset' | undefined;
  placeholder?: string;
}

export const ExpandableInput = ({
  inputButton,
  form,
  label,
  name,
  onClick,
  onChange,
  passwordMode = false,
  inputType,
  defaultValue,
  placeholder,
  inputButtonType
}: InputProps) => {
  const [selectedColor, setSelectedColor] = useState('bg-blue-1');
  const [expand, setExpand] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const categBtns = [
    {
      color: 'bg-red-1',
      category_id: 1
    },
    {
      color: 'bg-grey-1',
      category_id: 2
    },
    {
      color: 'bg-lilac-1',
      category_id: 3
    },
    {
      color: 'bg-blue-1',
      category_id: 4
    },
    {
      color: 'bg-grey-3',
      category_id: 5
    },
    {
      color: 'bg-jade-1',
      category_id: 6
    }
  ];

  const hadlerCategory = (item: string, category_id: number) => {
    setSelectedColor(item);
    setExpand(!expand);
    setCategoryId(category_id);
  };

  return (
    <div className='w-full gap-2  flex flex-col'>
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
          <div
            onClick={() => setExpand(!expand)}
            className={`${
              expand ? 'w-full gap-4 px-2 py-4' : 'w-6'
            } h-6 justify-between rounded-full  bg-transparent items-center shadow-inner mr-1 cursor-pointer flex`}
          >
            {categBtns.map(({ color, category_id }, index: number) => {
              return (
                <div className='w-6 h-6 drop-shadow-md' key={index}>
                  <button
                    type={inputButtonType}
                    onClick={() => {
                      hadlerCategory(color, category_id);
                      onClick(category_id);
                    }}
                    className={`w-6 h-6 ${expand ? 'shadow-button' : 'drop-shadow-xl'} ${
                      expand ? color : selectedColor
                    } ${expand ? null : selectedColor === color ? '' : 'hidden'} rounded-full`}
                  ></button>
                </div>
              );
            })}
          </div>
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
