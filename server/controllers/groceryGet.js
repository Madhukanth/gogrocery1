const Grocery = require('../models/grocery');

exports.groceryGet = function (req, res, next) {
  Grocery.find({}, (err, grocery) => {
    if (err) {
      next(err);
    } else {
      res.json(grocery);
    }
  });
};
