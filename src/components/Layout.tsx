import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
const Layout = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
