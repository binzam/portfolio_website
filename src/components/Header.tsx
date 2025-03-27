import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <nav className={styles.navbar}>
          <ul className={styles.nav_links}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : `${styles.nav_link}`
                }
                to="/"
              >
               Hello
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : `${styles.nav_link}`
                }
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : `${styles.nav_link}`
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : `${styles.nav_link}`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
