import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import style from './LoginForm.module.css';
import { logIn } from '../../redux/auth/operations';
import * as Yup from 'yup';


const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Required!'),
    password: Yup.string()
      .required('Required!')
      .min(8, 'Password must be at least 8 characters!')
      .max(50, 'Password must be at most 50 characters!'),
  });

  const handleSubmit = ({ email, password }, actions) => {
    const userCredits = {
      email: email.toLowerCase(),
      password: password,
    };

    dispatch(logIn(userCredits))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    console.log('login:', userCredits);
    actions.resetForm();
  };

  return (
    <div className={style.wrap}>
      <h2>Форма логіну</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form className={style.authForm}>
          <div>
            <label htmlFor={emailFieldId}>email</label>
            <Field
              type='email'
              name='email'
              id={emailFieldId}
              autoComplete='true'
            />
            <ErrorMessage
              name='email'
              component='span'
              className={style.errorText}
            />
          </div>

          <div>
            <label htmlFor={passwordFieldId}>password</label>
            <Field
              type='password'
              name='password'
              id={passwordFieldId}
              autoComplete='true'
            />
            <ErrorMessage
              name='password'
              component='span'
              className={style.errorText}
            />
          </div>

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
