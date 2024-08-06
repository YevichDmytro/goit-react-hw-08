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
    <div className={style.wrap}>
      <h2>Форма реєстрації</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={registrationValidationSchema}
      >
        <Form className={style.authForm}>
          <div>
            <label htmlFor={nameFieldId}>username</label>
            <Field
              type='text'
              name='name'
              id={nameFieldId}
              autoComplete='true'
            />
            <ErrorMessage
              name='name'
              component='span'
              className={style.errorText}
            />
          </div>

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

export default RegistrationForm;
