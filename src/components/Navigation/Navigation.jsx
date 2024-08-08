import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink to='/' className={style.navBtn}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/contacts' className={style.navBtn}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
