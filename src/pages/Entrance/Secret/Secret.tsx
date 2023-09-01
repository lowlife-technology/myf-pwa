import { useForm } from 'react-hook-form';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../../../components/Input/FormInput';

export default function Secret() {
  const navigate = useNavigate();
  const form = useForm();
  return (
    <PageWrapper title='Login/Register' onClickBack={() => navigate('/login')}>
      <form>
        <div className='flex flex-col items-center pt-10 gap-10 w-full'>
          <FormInput
            name='email'
            form={form}
            inputType='email'
            inputButtonType='submit'
            onInputButton={() => {}}
            label='Your email or phone number'
            inputButton
          />
          <FormInput
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
}
