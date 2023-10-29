//Job: Uploads file to server
const ApiError = require('../utilities/ApiError');
const path = require('path');
const debugWRITE = require('debug')('app:write');
//piece of middle just of function
const fileServerUpload = (req, res, next) => {
  //1.check file has been uploaded
  if (req.files) {
    const file = req.files.image;
    debugWRITE(`Image:${file.name} received`);

    //2.APPEND UNIQUE FILE ID
    const filename = `${Date.now()}-${file.name}`;
    next();
  } else {
    next();
  }
};

module.exports = fileServerUpload;
