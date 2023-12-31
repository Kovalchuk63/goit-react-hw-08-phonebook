import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledField, Button, ErrMsg } from './RegisterForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters long')
    .matches('[a-zA-Zа-яА-ЯіІїЇ]+', 'Enter valid symbols'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .matches(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])',
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
});

export const RegisterForm = () => {
  const dispath = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, helpers) => {
        dispath(register(values));
        helpers.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField id="name" name="name" />
        <ErrMsg component="div" name="name" />

        <label htmlFor="email">Email</label>
        <StyledField id="email" name="email" type="email" />
        <ErrMsg component="div" name="email" />

        <label htmlFor="password">Password</label>
        <StyledField id="password" name="password" type="password" />
        <ErrMsg component="div" name="password" />

        <Button type="submit">Submit</Button>
      </StyledForm>
    </Formik>
  );
};
