// DATABASE CONFIGURATION
// Imports of db admin modules (imports the admin libraries)
var admin = require('firebase-admin');
const config = require('./config');

// Import debug logs
const dbStartup = require('debug')('app:db');
const debugError500 = require('debug')('app:error500');

try {
  dbStartup('Attempting database connection...');

  // Setup of db credential and options

  // Initialize firebase services
  admin.initializeApp({
    // Set Application Default Credentials (ADC implicitly determines credentials from GOOGLE_APPLICATION_CREDENTIALS ENV)
    credential: admin.credential.cert(config.db.google_account_credentials),
    storageBucket: config.db.storageBucket,
  });

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // DB Ping function just for testing
  // const dbPing = db.listCollections().then((collections) => {
  //   dbStartup('Connected to Cloud Firestore');
  //   for (let collection of collections) {
  //     dbStartup(`Found db collection: ${collection.id}`);
  //   }
  // });

  // Export variable objects for use in our application
  module.exports = { db, bucket, dbPing };

  // DEBUG: Unhandled error will be logged to console
} catch (err) {
  debugError500(err);
}
