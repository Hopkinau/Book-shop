import * as styles from './Header.css';

import useAuth from '../../hooks/useAuth';
import TuButton from '../common/TuButton';
import TuLink from '../common/TuLink';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  // ACCESS VARIABLES FROM HOOKS
  const { user, logout } = useAuth();

  return (
    <Navbar className={styles.navbar} variant='light' expand='lg' sticky='top'>
      <Container>
        <Navbar.Brand className={styles.brandLink} as={Link} to='/'>
          {/* <img
            className={styles.logo}
            src={logoImg}
            alt='timbertop united logo'
          /> */}
          <div className={styles.logoTextBox}>
            <span className={styles.brand}>Blue Mountain Book Shop</span>
            <span className={styles.brandSub}>The Official Online Store</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {/* STANDARD NAVLINKS */}
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/store/products'>
              Products
            </Nav.Link>
          </Nav>
          {/* AUTH NAVLINKS */}
          <Nav>
            {!user && (
              <Link to='signup'>
                <BsFillPersonLinesFill />
                Sign In
              </Link>
            )}
            {!user && (
              <Link to='login' className={styles.login}>
                <BsFillPersonLinesFill />
                Login In
              </Link>
            )}
            {user && <TuLink to='/dashboard'>Dashboard</TuLink>}
            {user && (
              <TuButton
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </TuButton>
            )}
            {}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
