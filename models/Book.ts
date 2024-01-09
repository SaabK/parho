import mongoose from "mongoose";
import Category from "./Category";

export const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    ratings: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    image: String,
    author: {
        name: String,
        about: String,
    },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
