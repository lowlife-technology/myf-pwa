import { Input } from '../../../components/Input/Input';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';

export const Login = () => {
  return (
    <PageWrapper title='Login/Register'>
      <div className='flex flex-col pt-10 gap-10 w-full'>
        <Input type='email' label='Your email or phone number' inputButton />
      </div>
    </PageWrapper>
  );
};
