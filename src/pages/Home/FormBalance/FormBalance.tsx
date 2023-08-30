import { Link } from 'react-router-dom';
import { Button } from '../../../components/Buttons/Button';
import { CircleBtn } from '../../../components/Buttons/CircleBtn';
import { ExpandableInput } from '../../../components/Input/ExpandableInput';
import { Input } from '../../../components/Input/Input';
import { FieldValues, UseFormReturn } from 'react-hook-form';

interface FormBalanceProps {
  form: UseFormReturn<FieldValues>;
  onClick: (catId: number) => void;
}

export const FormBalance = ({ form, onClick }: FormBalanceProps) => {
  return (
    <div className='flex md:w-1/5 w-full h-full md:h-4/5 gap-10 flex-col  md:shadow-button md:px-10'>
      <div className='w-full gap-10 md:gap-8 md:py-4 flex flex-col h-full '>
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
        />
        <Input
          onInputButton={() => {}}
          label='Date'
          placeholder='10/20/2023'
          name='date'
          form={form}
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
      <div className='w-full flex flex-col md:gap-5 justify-between h-full'>
        <div className='w-full items-center flex justify-between'>
          <CircleBtn pressed rigthText='Gain' />
          <CircleBtn leftText='Loss' />
        </div>
        <Button text='New loss' />
        <Link className='text-xs text-blue-500 underline' to='/AutoPay'>
          AutoPay
        </Link>
      </div>
    </div>
  );
};
