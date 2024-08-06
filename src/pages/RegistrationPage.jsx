import { Field, Form, Formik } from 'formik';

const RegistrationPage = () => {
  return (
    <div>
      <h2>Форма реєстрації</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={() => {}}
      >
        <Form>
          <Field type='text' name='username' />
          <Field type='email' name='email' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
