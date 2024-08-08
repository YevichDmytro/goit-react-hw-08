import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.wrap}>
      <h1>PAGE NOT FOUND</h1>
      <p className={style.text}>
        Return to{' '}
        <Link to='/' className={style.linkBtn}>
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
