import { Link } from 'react-router-dom';
import { Button } from '../../../components/Buttons/Button';
import { CircleBtn } from '../../../components/Buttons/CircleBtn';
import { ExpandableInput } from '../../../components/Input/ExpandableInput';
import { Input } from '../../../components/Input/Input';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { useState } from 'react';
import { InputDate } from '../../../components/Input/InputDate';

interface FormBalanceProps {
  form: UseFormReturn<FieldValues>;
  onClick: (catId: number) => void;
}

export const FormBalance = ({ form, onClick }: FormBalanceProps) => {
  const [gain, setGain] = useState(false);
  const [loss, setLoss] = useState(false);
  return (
    <div className='flex xl:w-1/4 xl:max-w-[400px] w-full h-full xl:h-4/5 gap-10 flex-col  xl:shadow-button xl:px-10'>
      <div className='w-full gap-10 xl:gap-8 xl:py-4 flex flex-col h-full '>
        <Input
          onInputButton={() => {}}
          label='Spend'
          placeholder='ex.: Gas station'
          name='spend'
          form={form}
        />
        <Input
          onInputButton={() => {}}
          label='Amount'
          placeholder='$ 0,00'
          name='amount'
          form={form}
          inputType='number'
        />
        <InputDate
          onKeyDown={() => {}}
          form={form}
          placeholder={'00/00/0000'}
          onClick={() => {}}
        />
        <ExpandableInput
          onInputButton={() => {}}
          label='Category'
          placeholder='Vehicle'
          name='category'
          form={form}
          onClick={onClick}
          inputButton
        />
      </div>
      <div className='w-full flex flex-col xl:gap-5 justify-between h-full'>
        <div className='w-full items-center flex justify-between'>
          <CircleBtn
            pressed={gain}
            onClick={() => {
              setGain(true);
              setLoss(false);
            }}
            rigthText='Gain'
          />
          <CircleBtn
            pressed={loss}
            onClick={() => {
              setLoss(true);
              setGain(false);
            }}
            leftText='Loss'
          />
        </div>
        <Button color={`${gain ? 'green' : 'red'}`} text={`${gain ? 'New Gain' : 'New loss'}`} />
        <Link className='text-xs text-blue-500 underline' to='/AutoPay'>
          AutoPay
        </Link>
      </div>
    </div>
  );
};
