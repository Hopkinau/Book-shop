// CENTRAL ROUTE FILE
// Import express and router
const express = require('express');
const router = express.Router();

// Import modules
const fileServerUpload = require('../middleware/fileServerUpload');
const ProductController = require('../controllers/productController');

// Setup routes within export function
module.exports = () => {
  // GET ALL Products
  router.get('/', ProductController.getAllProducts);

  // GET onSALE Products

  // POST Product
  router.post('/', fileServerUpload, ProductController.postProduct);
  // GET BY ID Product
  router.get('/:id', ProductController.getProductById);
  // UPDATE BY ID Product

  // DELETE BY ID Product

  return router;
};
