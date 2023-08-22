import { PageWrapper } from '../../../components/PageWrapper/PageWrapper';
import { Input } from '../../../components/Input/Input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const createRegisterFormSchema = z.object({
  email: z
    .string()
    .nonempty('Wubba lubba email, required!')
    .email(`This email format is squanchin' wrong!`),
  phone: z.string().regex(/^\d{11}$/, 'This cell number is way off in another dimension!')
});

export default function PhoneEmail() {
  const form = useForm({
    resolver: zodResolver(createRegisterFormSchema)
  });
  console.log(form.formState.errors);

  const createUser = (data: any) => {
    console.log(data);
  };
  return (
    <PageWrapper title='Register'>
      <div className='flex w-full items-center justify-center'>
        <form onSubmit={form.handleSubmit(createUser)}>
          <div className='flex flex-col pt-10 gap-10 md:w-fit w-full'>
            <Input
              inputButtonType='button'
              form={form}
              name='email'
              label='Your email'
              placeholder='exemple@email.com'
              inputButton
            />
            <Input
              inputButtonType='submit'
              form={form}
              name='phone'
              placeholder='00900000000'
              label='Your phone number'
              inputButton
            />
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}
