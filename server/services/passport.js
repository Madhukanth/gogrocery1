const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

//LocalStrategy
const localOptions = {
	usernameField: 'email'
};
const localLogin = new LocalStrategy(localOptions, function(
	email,
	password,
	done
) {
	User.findOne({ email: email.toLowerCase() }, function(err, user) {
		if (err) {
			console.log('hi');
			return done(err);
		}
		if (!user) {
			console.log('hello');
			return done(null, false);
		}

		user.comparePassword(password, function(err, isMatch) {
			if (err) {
				console.log('waste');
				return done(err);
			}
			if (!isMatch) {
				console.log('moon');
				return done(null, false);
			}

			return done(null, user);
		});
	});
});
//Jwt Strategy
const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	//payload contains both sub and iat decoded
	User.findById(payload.sub, function(err, user) {
		if (err) {
			return done(err, false);
		}

		if (user) {
			done(null, user);
		} else {
			done(null, false);
		}
	});
});

passport.use(jwtLogin);
passport.use(localLogin);
