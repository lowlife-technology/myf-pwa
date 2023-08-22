import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';

export const Secret = () => {
  const form = useForm();
  return (
    <PageWrapper title='Login/Register'>
      <form>
        <div className='flex flex-col items-center pt-10 gap-10 w-full'>
          <Input
            name='email'
            form={form}
            inputType='email'
            inputButtonType='submit'
            onInputButton={() => {}}
            label='Your email or phone number'
            inputButton
          />
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
    </PageWrapper>
  );
};
