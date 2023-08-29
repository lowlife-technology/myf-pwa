import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../../components/Input/Input';

interface PhoneEmailProps {
  onClick: () => void;
  onSubmit: () => void;
  hidden: boolean;
}

const createRegisterFormSchema = z.object({
  email: z
    .string()
    .nonempty('Wubba lubba email, required!')
    .email(`This email format is squanchin' wrong!`),
  phone: z.string().regex(/^\d{11}$/, 'This cell number is way off in another dimension!')
});

export default function PhoneEmail({ onClick, onSubmit, hidden }: PhoneEmailProps) {
  const form = useForm({
    resolver: zodResolver(createRegisterFormSchema)
  });

  const isEmailInvalid = form.formState.errors && form.formState.errors.email;

  return (
    <div className={`flex ${hidden && 'hidden'} w-full mt-10 justify-center`}>
      <div className='flex flex-col pt-10 gap-10 md:w-fit w-full'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-10'>
            <Input
              onInputButton={() => {}}
              inputButtonType='button'
              form={form}
              name='email'
              defaultValue={form.getValues().email}
              label='Your email'
              placeholder='exemple@email.com'
              inputButton
              inputType='text'
              disabled={isEmailInvalid}
            />
            <Input
              inputType='text'
              inputButtonType='submit'
              form={form}
              defaultValue={form.getValues().phone}
              name='phone'
              placeholder='00900000000'
              label='Your phone number'
              inputButton
              disabled={isEmailInvalid}
              onInputButton={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
