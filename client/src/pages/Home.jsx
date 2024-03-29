import { Fragment } from 'react';
import * as styles from './Home.css';
import CardDemo from '../components/features/cart/Card';
import Carousel from '../components/features/cart/Carousel';
const Home = () => {
  return (
    <Fragment>
      <div>
        <img
          src='https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='book'
          className={styles.bgImage}
        />
        <CardDemo />
        <Carousel />
      </div>
      <></>
    </Fragment>
  );
};

export default Home;
