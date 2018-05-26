const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stationerySchema = new Schema({
	name: String,
	imageurl: String
});

const ModelClass = mongoose.model('stationery', stationerySchema);

module.exports = ModelClass;
