import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';

import productService from '../../services/productService';
import ProductsList from '../../components/features/products/ProductsList';
import TuLoader from '../../components/common/TuLoader';
import axios from 'axios';

function ProductsPage() {
  // PRODUCTS STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // HOOK: ON-LOAD SIDE EFFECTS
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      fetchProducts();
      setLoading(false);

      // CLEAN UP FUNCTION
      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  async function fetchProducts() {
    try {
      const res = await axios.get('http://localhost:5500/api/products');
      const data = await res.data;
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
      setError(true);
      // toast.error('Internal Server Error');
    }
  }

  // CONDITIONAL LOAD: ERROR
  if (error) {
    return (
      <Container className='text-center mt-4'>
        <p>Error page</p>
      </Container>
    );
  }

  // CONDITIONAL LOAD: LOADING
  if (loading) {
    return (
      <Container className='text-center mt-4'>
        <TuLoader />
      </Container>
    );
  }

  return (
    <Container className='text-center mt-4'>
      <h1>Timbertop United Kits &amp; Apparel</h1>
      <p>
        Get the official 2023/24 Timbertop United Kits, inspired by the iconic
        TU anniversary crest - celebrating its 20th anniversary
      </p>

      {/* Products Menu */}
      {<ProductsList products={data} />}
    </Container>
  );
}

export default ProductsPage;
