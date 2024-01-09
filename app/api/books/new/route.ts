import { connectToMongo } from "@/lib/db";
import { IBook } from "@/lib/types";
import Book from "@/models/Book";
import Category from "@/models/Category";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectToMongo();

export async function POST(req: NextRequest) {
    const body = await req.json();

    // Whenever a new product is created then it should also be pushed to it's respective category. How should I implement this? 1) I will recieve the category Id in the req object. I can find that category and update its books array by pushing this same book to the array. ( Gonna do it in the PRE-POST method of bookSchema)

    try {
        const newBook: IBook = await Book.create(body);

        const Category = mongoose.model("Category");
        const thatOneCategory = await Category.findById(newBook.category);

        if (!thatOneCategory)
            return console.log(
                "That one category doesn't exist and this is a really weird error"
            );

        thatOneCategory.books.push(newBook._id);
        await thatOneCategory.save();

        return NextResponse.json(
            {
                message: "Created a new book with title",
                book: newBook,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);

        return NextResponse.json(
            {
                message: "An Error Ocurred",
            },
            { status: 500 }
        );
    }
}
