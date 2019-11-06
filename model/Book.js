const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String
});

const BookModel = Mongoose.model('Book', BookSchema)
module.exports = { BookModel }; 