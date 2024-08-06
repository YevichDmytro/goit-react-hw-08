import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={style.navBar}>
      <NavLink to='/register'>Register</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </div>
  );
};

export default AuthNav;
