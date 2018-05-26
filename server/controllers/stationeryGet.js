const Stationery = require('../models/stationery');

exports.stationeryGet = function(req, res, next) {
	Stationery.find({}, function(err, vegetables) {
		if (err) {
			next(err);
		} else {
			res.json(vegetables);
		}
	});
};
