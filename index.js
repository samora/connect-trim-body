var trimBody = require('trim-body');

module.exports = function () {
  return function (req, res, next) {
    if (req.body) {
      trimBody(req.body);
    }
    next();
  }
};