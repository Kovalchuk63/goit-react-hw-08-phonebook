import { LayoutSection } from 'components/Layout/Layout.styled';
import { Error } from 'components/Message';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { BeatLoaderStyled } from 'components/Message';
import { FcHighPriority } from 'react-icons/fc';

const Register = () => {
  const { errorRegister, isLoadingRegister } = useAuth();
  return (
    <React.Fragment>
      <LayoutSection>
        <RegisterForm />
        {isLoadingRegister && (
          <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
        )}
        {errorRegister && (
          <Error>
            Error... Invalid form, Try again!
            <FcHighPriority />
          </Error>
        )}
      </LayoutSection>
    </React.Fragment>
  );
};

export default Register;
