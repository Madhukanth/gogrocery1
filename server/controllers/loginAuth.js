const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.login = function(req, res, next) {
	return res.send({ token: tokenForUser(req.user), success: true });
	// const email = req.body.email;
	// const password = req.body.password;
	//
	// User.findOne({ email }, function(err, existingUser) {
	// 	if (err) {
	// 		return next(err);
	// 	}
	//
	// 	if (existingUser) {
	// 		console.log(existingUser);
	// 		if (existingUser.password === password) {
	// 			console.log(existingUser.password);
	// 			return res.send({ success: 'true' });
	// 		}
	// 		return res.send({ success: 'false' });
	// 	}
	// 	return res.send({ success: 'false' });
	// });
};
