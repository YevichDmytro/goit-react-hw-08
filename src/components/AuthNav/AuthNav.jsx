import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.navBar}>
      <NavLink to='/register' className={style.navBtn}>
        Register
      </NavLink>
      <NavLink to='/login' className={style.navBtn}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
