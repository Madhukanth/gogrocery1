const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const grocerySchema = new Schema({
	name: String,
	imageurl: String
});

const ModelClass = mongoose.model('grocery', grocerySchema);

module.exports = ModelClass;
