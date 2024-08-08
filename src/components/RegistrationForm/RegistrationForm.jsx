import { useId } from 'react';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import style from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const registrationValidationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required!')
      .min(3, 'Too short!')
      .max(50, 'Name must be at most 50 characters!')
      .test(
        'trim',
        'Name cannot be only spaces!',
        value => value.trim() !== ''
      ),
    email: Yup.string().email('Invalid email!').required('Required!'),
    password: Yup.string()
      .required('Required!')
      .min(8, 'Password must be at least 8 characters!')
      .max(50, 'Password must be at most 50 characters!'),
  });

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, actions) => {
    const userCredits = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password: password,
    };

    dispatch(register(userCredits));
    console.log(userCredits);

    actions.resetForm();
  };

  return (
    <div className={style.wrapForm}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={registrationValidationSchema}
      >
        <Form className={style.authForm}>
          <h2>Register new account</h2>

          <div className={style.wrapField}>
            <Field
              type='text'
              name='name'
              id={nameFieldId}
              autoComplete='true'
              placeholder='Your name'
            />
            <ErrorMessage
              name='name'
              component='span'
              className={style.errorText}
            />
          </div>

          <div className={style.wrapField}>
            <Field
              type='email'
              name='email'
              id={emailFieldId}
              autoComplete='true'
              placeholder='Email'
            />
            <ErrorMessage
              name='email'
              component='span'
              className={style.errorText}
            />
          </div>

          <div className={style.wrapField}>
            <Field
              type='password'
              name='password'
              id={passwordFieldId}
              autoComplete='true'
              placeholder='Password'
            />
            <ErrorMessage
              name='password'
              component='span'
              className={style.errorText}
            />
          </div>

          <button type='submit' className={style.submitBtn}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
