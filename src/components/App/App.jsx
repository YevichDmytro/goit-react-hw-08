import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import Layout from '../Layout';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshCurrentUser } from '../../redux/auth/operations';
import style from './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactPage/ContactsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

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
          <Route
            path='/register'
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo='/contacts'
              />
            }
          />
          <Route
            path='/login'
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo='/contacts'
              />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo='/login' />
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
