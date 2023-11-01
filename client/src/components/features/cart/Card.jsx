import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import * as styles from './Card.css';

function GroupExample() {
  return (
    <CardGroup className={styles.group}>
      <h5>Best Selling Books</h5>
      <Card>
        <Card.Body>
          <Card.Title>1.Friends,Lovers and The Big Terrible Thing</Card.Title>
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
        <Card.Img variant='top' src='holder.js/100px160' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant='top' src='holder.js/100px160' />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
