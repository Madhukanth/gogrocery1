const PersonalCare = require('../models/personalCare');

exports.personalCareGet = function(req, res, next) {
	PersonalCare.find({}, function(err, personalCare) {
		if (err) {
			return next(err);
		}

		if (err) {
			next(err);
		} else {
			res.json(personalCare);
		}
	});
};
