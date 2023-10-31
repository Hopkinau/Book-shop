//The main job is to upload file to bucket and return from the bucket

const { bucket } = require('../config/db');
const debugBucket = require('debug')('app:bucket');
const uuid = require('uuid');
const fs = require('fs');
module.exports = {
  async storageBucketUpload(filename) {
    //1.Generate a random UUID Storage Token
    debugBucket('Firestore Filename:${filename} received');
    const storageToken = uuid.v4();
    //2.Declare filepath & options parameters for bucket upload
    const serverFilePath = `./public/uploads/${filename}`;
    const options = {
      destination: filename,
      resumable: true,
      validation: 'crc32c',
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken,
        },
      },
    };

    //3.Cloud Firestore upload call
    const result = await bucket.upload(serverFilePath, options);
    const bucketName = result[0].metadata.bucket;
    debugBucket(`Bucket Name:${bucketName}`);

    //4.Construct download URL
    const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
    console.log(`File Successfully Uploaded to Bucket:${downloadURL}`);

    //5.Delete TEP file,in the local file
    fs.unlink(serverFilePath, (err) => {
      if (err) {
        debugBucket(err);
        return {
          message: `File:${filename} could not be deleted`,
        };
      } else {
        debugBucket(`File:${filename} deleted`);
      }
    });

    return downloadURL;
  },

  async deleteFileFromBucket(uploadedFile) {
    // Determine File Location in Storage
    // NOTE: You would ALSO want to CHECK if it existed in the storage bucket before deletion OTHERWISE it would hit an error!
    const file = bucket.file(uploadedFile);
    const fileChecker = await file.exists();

    // [400 ERROR] Check for Item Existing in Storage Bucket
    // NOTE: To ensure our delete function still works against Firestore DB, we will modify the delete request to prevent an error.
    if (fileChecker[0] === false) {
      // [TOGGLE]: Set custom option parameter to prevent error returning (true = ignores missing file!)
      const options = {
        ignoreNotFound: true,
      };

      // Call modified delete request (no deletion from storage bucket)
      // NOTE: Default option is "false", meaning error is issued and delete request fails if file does NOT exist!
      const data = await file.delete(options);
      debugBucket(
        `The file: ${uploadedFile}, does not exist in Storage.  Please check server for inconsistent data handling & database queries.`
      );

      // Return API response to controller
      return data[0];

      // [SUCCESS] FILE EXISTS: Standard delete path
    } else {
      // Call standard delete request
      const data = await file.delete();
      console.log(`File deleted from Storage Bucket: ${uploadedFile}`);

      // Return API response to controller
      return data[0];
    }
  },
};
