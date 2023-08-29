import { set, useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/InputSmooth';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const LoginSchemaValidation = z.object({
  email: z
    .string()
    .nonempty(`Wubba lubba email, required!`)
    .email(`This email format is squanchin' wrong!`),
  phone: z.string().regex(/^\d{11}$/, 'This cell number is way off in another dimension!')
});

export default function Login() {
  const [name, setName] = useState('email');
  const [isUser, setIsUser] = useState(true);

  const form = useForm({
    resolver: zodResolver(LoginSchemaValidation)
  });

  const onSubmit = () => {
    console.log('oi');
  };
  const haddleGoNext = () => {
    setTimeout(() => {
      if (form.formState.errors[name]) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    }, 10);
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');

    if (numericValue.length > 0 && !isNaN(parseInt(numericValue))) {
      setName('phone');
    } else {
      setName('email');
    }
  };

  return (
    <PageWrapper
      title={`${isUser ? 'Login' : 'Secret'}`}
      onClickBack={!isUser ? () => setIsUser(!isUser) : undefined}
    >
      <div className='flex flex-col pt-10 gap-10 w-full'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className={`${!isUser && 'hidden'} flex flex-col items-center pt-10 gap-10 w-full`}>
            <Input
              name={name}
              form={form}
              onChange={(e) => handleChangeInput(e)}
              label='Email or phone'
              inputButton
              inputButtonType='submit'
              onInputButton={haddleGoNext}
            />
          </div>
          <div className={`${isUser && 'hidden'} flex flex-col items-center pt-10 gap-10 w-full`}>
            <Input
              form={form}
              name='password'
              inputType='password'
              inputButtonType='submit'
              onInputButton={() => {}}
              label='Secret'
              inputButton
            />
            <a className='underline text-grey-3 opacity-60' href='./'>
              Forgot Password
            </a>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}
