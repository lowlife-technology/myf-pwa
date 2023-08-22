import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';

interface SecretProps {
  onSubmit: () => void;
  onClick: () => void;
  hidden: boolean;
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
    .regex(/[!@#$%^&*]/, `Don't forget to toss in a special character`),
  repeatSecret: z.string()
});

export default function Secret({ onSubmit, onClick, hidden }: SecretProps) {
  const [disabled, setDisabled] = useState(true);
  const [showPasswors, setShowPassword] = useState(true);
  const form = useForm({
    resolver: zodResolver(createRegisterFormSchema)
  });

  const watchRepeatSecret = form.watch().repeatSecret;
  const watchSecret = form.watch().secret;
  useEffect(() => {
    if (form.getValues().secret === form.getValues().repeatSecret) {
      form.clearErrors('repeatSecret');
      setDisabled(false);
    } else {
      form.setError('repeatSecret', {
        type: 'manual',
        message: "These passwords aren't the same! They should match, you know?"
      });
      setDisabled(true);
    }
  }, [watchSecret, watchRepeatSecret, form]);

  return (
    <div className={`flex ${hidden && 'hidden'} w-full mt-10 justify-center`}>
      <div className='flex flex-col pt-10 gap-10 md:w-fit w-full'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-10'>
            <Input
              onInputButton={() => setShowPassword(!showPasswors)}
              inputButtonType='button'
              passwordMode={showPasswors}
              icon='password'
              form={form}
              name='secret'
              label='Create a secret'
              placeholder='supersecret'
              inputButton
            />
            <Input
              inputButtonType='submit'
              passwordMode={showPasswors}
              form={form}
              name='repeatSecret'
              placeholder='try to repeat'
              label='Repeat'
              inputButton
              disabled={disabled}
              onInputButton={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
