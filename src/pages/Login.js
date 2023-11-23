import { LoginForm } from 'components/LoginForm/LoginForm';
import React from 'react';
import { BeatLoaderStyled, Error } from 'components/Message';
import { useAuth } from 'hooks/useAuth';
import { LayoutSection } from 'components/Layout/Layout.styled';
import { FcHighPriority } from 'react-icons/fc';

const Login = () => {
  const { errorLogin, isLoadingLogin } = useAuth();
  return (
    <React.Fragment>
      <LayoutSection>
        <LoginForm />
        {isLoadingLogin && (
          <BeatLoaderStyled color="#36d7b7"></BeatLoaderStyled>
        )}
        {errorLogin && (
          <Error>
            Error... Invalid login or password! <FcHighPriority />
          </Error>
        )}
      </LayoutSection>
    </React.Fragment>
  );
};

export default Login;
