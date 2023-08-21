import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';
import { Input } from '../../../components/Input/Input';

export default function PhoneEmail() {
  return (
    <PageWrapper title='Register'>
      <div className='flex flex-col pt-10 gap-10 w-full'>
        <Input label='Email' inputButton />
        <Input label='Phone' inputButton />
      </div>
    </PageWrapper>
  );
}
