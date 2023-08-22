import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface SecretProps {
  onSubmit: () => void;
  onClick: () => void;
}

const createRegisterFormSchema = z.object({
  secret: z
    .string()
    .nonempty('You really goofed up. No password, huh?')
    .min(8, '8 digits or bust!')
    .max(30, 'Did you try to cram more than 30 digits?')
    .regex(/[a-z]/, 'At least one tiny lowercase character in that password, okay?')
    .regex(/[A-Z]/, ' Throw in a big uppercase letter in that password, you know?')
    .regex(/\d/, 'You gotta include at least one digit in the password!')
    .regex(/[!@#$%^&*]/, `Don't forget to toss in a special character`)
});

export default function Secret({ onSubmit, onClick }: SecretProps) {
  const form = useForm({
    resolver: zodResolver(createRegisterFormSchema)
  });

  return (
    <div className='flex w-full mt-10 justify-center'>
      <div className='flex flex-col pt-10 gap-10 md:w-fit w-full'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-10'>
            <Input
              onInputButton={() => {}}
              inputButtonType='button'
              form={form}
              inputType='password'
              name='secret'
              label='Create a secret'
              placeholder='supersecret'
              inputButton
            />
            <Input
              inputButtonType='submit'
              inputType='password'
              form={form}
              name='repeatSecret'
              placeholder='try to repeat'
              label='Repeat'
              inputButton
              onInputButton={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
