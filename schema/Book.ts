import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    ratings: Number,
    category: String,
    image: String,
    author: {
        name: String,
        about: String,
    },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
