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
};
