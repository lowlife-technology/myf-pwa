import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';

export const Login = () => {
  const form = useForm();

  return (
    <PageWrapper title='Login/Register'>
      <div className='flex flex-col pt-10 gap-10 w-full'>
        <Input
          name='email'
          form={form}
          inputType='email'
          label='Your email or phone number'
          inputButton
          inputButtonType='submit'
          onInputButton={() => {}}
        />
      </div>
    </PageWrapper>
  );
};
