import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import {
  selectContactsError,
  selectContactsLoading,
} from '../../redux/contacts/selectors';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshCurrentUser } from '../../redux/auth/operations';
import style from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);
  // const isRefreshing = true;
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
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

// <div className={style.wrap}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <SearchBox />
//   {loading && !error && (
//     <b className={style.requestText}>Request in progress...</b>
//   )}
//   <ContactList />
// </div>
