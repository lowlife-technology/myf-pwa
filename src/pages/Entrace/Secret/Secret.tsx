import { Input } from '../../../components/Input/Input';
import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';

export const Secret = () => {
  return (
    <PageWrapper title='Login/Register'>
      <div className='flex flex-col items-center pt-10 gap-10 w-full'>
        <Input type='email' label='Your email or phone number' inputButton />
        <Input type='password' label='Secret' inputButton />
        <a className='underline text-grey-3 opacity-60' href='./'>
          Forgot Password
        </a>
      </div>
    </PageWrapper>
  );
};
