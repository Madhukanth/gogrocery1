const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personalCareSchema = new Schema({
	name: String,
	imageurl: String
});

const ModelClass = mongoose.model('personalCare', personalCareSchema);

module.exports = ModelClass;
