import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import TuBox from '../components/common/TuBox';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <TuBox
          title='Official  Blue Mountain Book-Shop'
          content="Join us and get the best books you've ever read."
          link='Shop Now'
          linkTo='/store/products'
        />
      </Container>
    </Fragment>
  );
};

export default Home;
