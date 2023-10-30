// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Dashboard from './pages/auth/Dashboard';
import ProductsMenu from './pages/product/ProductsMenu';
import AddProduct from './pages/product/AddProduct';
import NotFound from './pages/NotFound';

// Import components
import Layout from './components/layout/Layout';
import PrivateRoutes from './components/layout/PrivateRoutes';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
      <Route path='/' element={<Layout />}>
        z
        <Route index element={<Home />} />
        {/* AUTH */}
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        {/* PRODUCTS */}
        <Route path='store'>
          <Route path='products' element={<ProductsMenu />} />
          <Route path='product'>
            {/* Only login User can use add product route */}
            <Route element={<PrivateRoutes />}>
              {/* Add Route */}
              <Route path='add' element={<AddProduct />} />
              {/* Edit Route */}
            </Route>
          </Route>
        </Route>
        {/* ERROR PAGES */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
