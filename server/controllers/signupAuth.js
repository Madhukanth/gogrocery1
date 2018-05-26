const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.signup = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;
	const doorno = req.body.doorno;
	const phonenumber = req.body.phonenumber;
	const street = req.body.street;
	const city = req.body.city;
	const state = req.body.state;

	User.findOne({ email }, (err, existingUser) => {
		if (err) {
			return next(err);
		}
		if (
			!email ||
			!password ||
			!name ||
			!doorno ||
			!phonenumber ||
			!street ||
			!city ||
			!state
		) {
			return res.send({
				success: 'false',
				error: 'please provide all the details'
			});
		}

		if (existingUser) {
			console.log(existingUser.password);
			return res.send({ success: 'false' }).status(422);
		}

		const user = new User({
			email,
			password,
			name,
			doorno,
			street,
			city,
			state,
			phonenumber
		});

		user.save(function(error) {
			if (error) {
				return next(error);
			}
			res.send({ token: tokenForUser(user), success: 'true' });
		});
	});
};
