const Vegetable = require('../models/vegeable');

exports.vegetablesGet = function(req, res, next) {
	Vegetable.find({}, function(err, vegetables) {
		if (err) {
			return next(err);
		}

		if (err) {
			next(err);
		} else {
			res.json(vegetables);
		}
	});
};
