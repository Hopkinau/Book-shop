const path = require('path');
const debugWRITE = require('debug')('app:write');
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
