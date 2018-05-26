const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vegetableSchema = new Schema({
	name: String,
	imageurl: String
});

const ModelClass = mongoose.model('vegetable', vegetableSchema);

module.exports = ModelClass;
