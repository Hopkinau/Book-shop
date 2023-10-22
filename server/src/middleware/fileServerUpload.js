//Job: Uploads file to server
const ApiError = require('../utilities/ApiError');
const path = require('path');
const debugWRITE = require('debug')('app:write');
//piece of middle just of function
const fileServerUpload = (req, res, next) => {
  if (req.files) {
    const file = req.files.image;
    debugWRITE(`Image:${file.name} received`);

    next();
  } else {
    next();
  }
};

module.exports = fileServerUpload;
