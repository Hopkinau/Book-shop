import * as styles from './Header.css';

import useAuth from '../../hooks/useAuth';
import TuButton from '../common/TuButton';
import TuLink from '../common/TuLink';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GrLogin } from 'react-icons/gr';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const Header = () => {
  // ACCESS VARIABLES FROM HOOKS
  const { user, logout } = useAuth();

  return (
    <>
      <h1 className='text-center mt-4 mb-4'>Blue Mountain Book Shop</h1>
      <Nav className='justify-content-center' activeKey='/home'>
        <Nav.Item>
          <Nav.Link className={styles.link} href='/'>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={styles.link} href='/store/products'>
            Product
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Dropdown className={styles.dropdown}>
        <Dropdown.Toggle variant='Info' id='dropdown-basic'>
          Sign In/Log In
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='/login'>Log In</Dropdown.Item>
          <Dropdown.Item href='/signup'>Sign In</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Header;
