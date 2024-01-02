import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    ratings: Number,
    category: String,
    image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
