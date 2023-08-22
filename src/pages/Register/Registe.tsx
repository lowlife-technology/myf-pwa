import { PageWrapper } from '../../components/PageWrapper/PageWrapper';
import PhoneEmail from './PhoneEmail/PhoneEmail';
import Secret from './Secret/Secret';
import { useState } from 'react';

export default function Register() {
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  const handlePhoneEmailSubmit = () => {
    setIsEmailConfirmed(true);
  };

  const handleSecretSubmit = () => {
    console.log('oi');
  };

  const handleEmailPhoneConfirm = () => {};
  const handleClickBack = () => {
    console.log('oi');
  };

  return (
    <PageWrapper
      onClickBack={isEmailConfirmed ? handleClickBack : undefined}
      title={`Register: ${isEmailConfirmed ? 'secret' : 'entrace'}`}
    >
      <div className='w-screen '>
        {!isEmailConfirmed ? (
          <PhoneEmail onSubmit={handlePhoneEmailSubmit} onClick={handleEmailPhoneConfirm} />
        ) : (
          <Secret onSubmit={handleSecretSubmit} onClick={() => {}} />
        )}
      </div>
    </PageWrapper>
  );
}
