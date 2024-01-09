import { connectToMongo } from "@/lib/db";
import Book from "@/models/Book";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

connectToMongo();

export async function GET(req: NextRequest, { params }: { params: any }) {
    const { bid } = params;

    try {
        const thatOneBook = await Book.findById(bid);
        if (!thatOneBook)
            return NextResponse.json(
                { message: "Couldn't find that product" },
                { status: 404 }
            );

        return NextResponse.json(
            {
                message: "Successfully Fetched Data",
                book: thatOneBook,
            },
            { status: 200 }
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

export async function PATCH(req: NextRequest, { params }: { params: any }) {
    const { bid } = params;
    const body = await req.json();

    // The difference here is that I need to check if the body contains the category id and then if it does, I need to remove the object id from previous category and add it to the new category

    const Category = mongoose.model("Category");

    try {
        // const thatOneBook = await Book.findById(bid);
        const thatOneBook = await Book.findByIdAndUpdate(bid, body);

        if (!thatOneBook)
            return NextResponse.json(
                { message: "Couldn't find that product" },
                { status: 404 }
            );

        if (body.hasOwnProperty("category")) {
            const previousCategory = await Category.findById(
                thatOneBook.category
            );

            if (!previousCategory)
                return console.log(
                    "That one category doesn't exist and this is a really weird error"
                );

            // Removing the object id that exists in the previous category

            previousCategory.books = previousCategory.books.filter(
                (id: string) => id.toString() !== thatOneBook._id.toString()
            );

            await previousCategory.save();

            // Now add the object id to the new category:

            const newCategory = await Category.findById(body.category);

            if (!newCategory)
                return console.log(
                    "That one category doesn't exist and this is a really weird error"
                );

            newCategory.books.push(thatOneBook._id);
            await newCategory.save();
        }

        return NextResponse.json(
            {
                message: "Updated the book",
                book: thatOneBook,
            },
            { status: 200 }
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

export async function DELETE(req: Request, { params }: { params: any }) {
    const { bid } = params;

    try {
        // 659d0ebe5373bd12efe544e0 to be deleted
        const thatOneBook = await Book.findById(bid);
        if (!thatOneBook)
            return NextResponse.json(
                { message: "Couldn't find that product" },
                { status: 404 }
            );

        await thatOneBook.deleteOne();

        // Removing the item from the Category's Books Array:

        const Category = mongoose.model("Category");
        const thatOneCategory = await Category.findById(thatOneBook.category);

        if (!thatOneCategory)
            return console.log(
                "That one category doesn't exist and this is a really weird error"
            );

        thatOneCategory.books = thatOneCategory.books.filter(
            (id: string) => id.toString() !== thatOneBook._id.toString()
        );

        await thatOneCategory.save();

        return NextResponse.json({
            message: "Deleted the book",
            book: thatOneBook,
        });
    } catch (error: any) {
        console.error(error);

        return NextResponse.json({
            message: "An Error Ocurred",
        });
    }
}
