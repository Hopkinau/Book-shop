import * as styles from './Footer.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.paragraph}>Dont miss the latest Sales</p>
      <Form>
        <Row className='align-items-center'>
          <Col xs='auto'>
            <Form.Label htmlFor='inlineFormInput' visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              className='mb-2'
              id='inlineFormInput'
              placeholder='Jane Doe'
            />
          </Col>

          <Col xs='auto'>
            <Button type='submit' className='mb-2'>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Footer;
