import { Link } from 'react-router-dom';
import { HomeHeader } from './Header/HomeHeader';
import { Input } from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import { ExpandableInput } from '../../components/Input/ExpandableInput';

export default function Home() {
  const form = useForm();
  return (
    <div className='items-center flex justify-center flex-col gap-10 flex-1 h-screen w-full '>
      <HomeHeader />
      <div className='w-full gap-8 flex flex-col'>
        <Input label='Spend' placeholder='ex.: Gas station' name='spend' form={form} />
        <Input label='Amount' placeholder='$ 0,00' name='amount' form={form} />
        <Input label='Date' placeholder='10/20/2023' name='date' form={form} />
        <ExpandableInput
          label='Category'
          placeholder='Vehicle'
          name='category'
          form={form}
          onInputButton={() => {}}
          inputButton
        />
      </div>
      <Link className='text-xs text-blue-500 underline' to='/AutoPay'>
        AutoPay
      </Link>
    </div>
  );
}
