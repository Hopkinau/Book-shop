import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import * as styles from './Card.css';

function GroupExample() {
  return (
    <>
      <div className={styles.topic}>
        <h1>Welcome to Book Shop</h1>
        <Link to={`/store/products`}>
          <button className={styles.btn}>Click Me</button>
        </Link>
      </div>
      <CardGroup className={styles.group}>
        <h5 className={styles.title}>Best Selling Books</h5>
        <Card>
          <Card.Body>
            <Link to={`/store/products`}>
              <Card.Title>
                1.Friends,Lovers and The Big Terrible Thing
              </Card.Title>
            </Link>
            <Card.Text>
              The beloved star of Friends takes us behind the scenes of the hit
              sitcom and his struggles with addiction in this candid, funny, and
              revelatory memoir that delivers a powerful message of hope and
              persistence.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Link to={`/store/products`}>
              <Card.Title>2. Bluey: Where's Bluey? At Christmas</Card.Title>
            </Link>
            <Card.Text>
              Based on the hit ABC KIDS TV show! Cheese and crackers, it's
              Christmas!
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Link to={`/store/products`}>
              <Card.Title>Card title</Card.Title>
            </Link>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default GroupExample;
