import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsLoading,
} from '../../redux/contacts/selectors';
import { fetchAll } from '../../redux/contacts/operations';
// import ContactForm from '../ContactForm/ContactForm';
// import ContactList from '../ContactList/ContactList';
// import SearchBox from '../SearchBox/SearchBox';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  // useEffect(() => {
  //   dispatch(fetchAll());
  // }, [dispatch]);

  return (
    // <div className={style.wrap}>
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   <SearchBox />
    //   {loading && !error && (
    //     <b className={style.requestText}>Request in progress...</b>
    //   )}
    //   <ContactList />
    // </div>

    <div className={style.wrap}>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
