import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as styles from './Card.css';
function CardDemo() {
  return (
    <Card style={{ width: '18rem' }} className={styles.card}>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Book 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Book 2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Book 3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
      <Card.Img variant='top' src='holder.js/100px180' />
      <Card.Body>
        <Card.Title>Book 4</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardDemo;