import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';

interface PhoneEmailProps {
  onClick: () => void;
  onSubmit: () => void;
}

const createRegisterFormSchema = z.object({
  email: z
    .string()
    .nonempty('Wubba lubba email, required!')
    .email(`This email format is squanchin' wrong!`),
  phone: z.string().regex(/^\d{11}$/, 'This cell number is way off in another dimension!')
});

export default function PhoneEmail({ onClick, onSubmit }: PhoneEmailProps) {
  const [error, setError] = useState('false');
  const form = useForm({
    resolver: zodResolver(createRegisterFormSchema)
  });

  // useEffect(() => {
  //   const validFields = () => {
  //     return form.formState.errors.phone && form.formState.errors.phone ? 'true' : 'false';
  //   };

  //   setError(validFields());
  // }, [form.formState.errors]);

  return (
    <div className='flex w-full mt-10 justify-center'>
      <div className='flex flex-col pt-10 gap-10 md:w-fit w-full'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-10'>
            <Input
              inputButtonType='button'
              form={form}
              name='email'
              label='Your email'
              placeholder='exemple@email.com'
              inputButton
              inputType='text'
            />
            <Input
              inputType='text'
              inputButtonType='submit'
              form={form}
              name='phone'
              placeholder='00900000000'
              label='Your phone number'
              inputButton
              onInputButton={onClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
