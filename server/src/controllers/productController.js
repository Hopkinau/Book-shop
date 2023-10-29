// Import modules
const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');
const debugREAD = require('debug')('app:read');
const debugWRITE = require('debug')('app:write');

module.exports = {
  // [1A] GET ALL Products
  async getAllProducts(req, res, next) {
    try {
      // Store the collection reference in variable
      const productRef = db.collection('products');
      // Fetch ALL Currencies and store response in "snapshot"
      const snapshot = await productRef.orderBy('name').get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (snapshot.empty) {
        return next(
          ApiError.badRequest('The items you were looking for do not exist')
        );

        // SUCCESS: Push object properties to array and send to client
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            category: doc.data().category,
            price: doc.data().price,
            sizes: doc.data().sizes,
            texture: doc.data().texture,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }
      // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch (err) {
      return next(
        ApiError.internal('The items selected could not be found', err)
      );
    }
  },

  // [1B] GET onSale Products

  // [2] POST Product
  async postProduct(req, res, next) {
    try {
      debugWRITE(req.files);
      debugWRITE(req.locals);
      debugWRITE(req.body);
      res.send('POST request received');
    } catch (error) {
      return next(ApiError.internal('You request is not processed', err));
    }
  },
  // [3] GET Product BY ID
  async getProductById(req, res, next) {
    // Test: Check ID passed via URL query string parameters
    debugREAD(req.params);

    try {
      // Store the document query in variable & call GET method for ID
      const productRef = db.collection('products').doc(req.params.id);
      const doc = await productRef.get();

      // [400 ERROR] Check for User Asking for Non-Existent Documents
      if (!doc.exists) {
        return next(
          ApiError.badRequest('The item you were looking for does not exist')
        );

        // SUCCESS: Send back the specific document's data
      } else {
        res.send(doc.data());
      }

      // [500 ERROR] Checks for Errors in our Query - issue with route or DB query
    } catch (err) {
      return next(
        ApiError.internal(
          'Your request could not be processed at this time',
          err
        )
      );
    }
  },

  // [4] PUT Product BY ID

  // [5] DELETE Product BY ID
};
