import styles from '../styles/Layout.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <h1>PAGE NOT FOUND</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
