import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { EntraceSlice } from '../slice/EntraceSlice';

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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

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

  const onLogin = () => {
    dispatch(EntraceSlice.actions.setAuth(true));
    navigate('/');
  };

  return (
    <PageWrapper
      title={`${isUser ? 'Login' : 'Secret'}`}
      onClickBack={!isUser ? () => setIsUser(!isUser) : undefined}
    >
      <div className='flex flex-col pt-10 gap-10 md:items-center md:justify-center w-full'>
        <div className=' md:w-fit md:items-center md:justify-center'>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div
              className={`${!isUser && 'hidden'} flex flex-col items-center pt-10 gap-10 w-full`}
            >
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
            <div
              className={`${isUser && 'hidden'} flex flex-col items-center pt-10 gap-10 w-full`}
            >
              <Input
                form={form}
                name='password'
                inputType='password'
                inputButtonType='submit'
                onInputButton={onLogin}
                label='Secret'
                inputButton
              />
              <a className='underline text-grey-3 opacity-60' href='./'>
                Forgot Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
