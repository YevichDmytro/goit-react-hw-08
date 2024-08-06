import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink to='/'>Home</NavLink>
      {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
