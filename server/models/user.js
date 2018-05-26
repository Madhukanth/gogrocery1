const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

//Define Model
const userSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: String,
	name: String,
	doorno: String,
	street: String,
	city: String,
	state: String,
	phonenumber: String
});

//on save hook,
userSchema.pre('save', function(next) {
	const user = this;

	bcrypt.genSalt(10, function(err, salt) {
		if (err) {
			return next(err);
		}

		bcrypt.hash(user.password, salt, null, function(error, hash) {
			if (error) {
				return next(error);
			}
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) {
			return callback(err);
		}

		callback(null, isMatch);
	});
};
//Create Model
const ModelClass = mongoose.model('user', userSchema);

//Export Model
module.exports = ModelClass;
