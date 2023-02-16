import { Schema, models, model } from "mongoose";

const bookSchema = new Schema({
  name: String,
  genre: String,
  author: String,
  publishDate: Date,
  status: String,
});

const Books = models.book || model("book", bookSchema);

export default Books;
