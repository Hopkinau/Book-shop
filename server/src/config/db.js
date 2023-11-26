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

  //1.STANDARD SETUP:ENV KEY
  let serviceAccountKey;
  if (config.env === 'development' || config.env === 'production') {
    serviceAccountKey = config.db.google_account_credentials;

    //2.NEW SETUP:SEPARATE ENVS
  } else if (config.env === 'preview') {
    serviceAccountKey = {
      type: config.db.type,
      project_id: config.db.project_id,
      private_key_id: config.db.private_key_id,
      private_key: config.db.private_key,
      client_email: config.db.client_email,
      client_id: config.db.client_id,
      auth_uri: config.db.auth_uri,
      token_uri: config.db.token_uri,
      auth_provider_x509_cert_url: config.db.auth_provider_x509_cert_url,
      client_x509_cert_url: config.db.client_x509_cert_url,
      universe_domain: config.db.universe_domain,
    };
  }

  dbStartup(serviceAccountKey);

  //OPTIONS VAR : Grant admin access to firebase +bucket services
  const firebaseAppOptions = {
    credential: admin.credential.cert(config.db.google_account_credentials),
    storageBucket: config.db.storageBucket,
  };

  // Initialize firebase services
  admin.initializeApp(firebaseAppOptions);

  const db = admin.firestore();
  const bucket = admin.storage().bucket();

  // DB Ping function just for testing

  // Export variable objects for use in our application
  module.exports = { db, bucket };

  // DEBUG: Unhandled error will be logged to console
} catch (err) {
  debugError500(err);
}
