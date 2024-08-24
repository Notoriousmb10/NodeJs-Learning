const fs = require('fs');

function logReqRes(filename) {
  return function (req, res, next) {
    // Log request details to the file
    fs.appendFile(filename, `\nTime: ${new Date().toISOString()} - URL: ${req.url}`, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
    next();
  };

  
}

module.exports = { logReqRes };
