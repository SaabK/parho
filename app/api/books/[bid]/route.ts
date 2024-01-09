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

    try {
        const thatOneBook = await Book.findByIdAndUpdate(bid, body);
        if (!thatOneBook)
            return NextResponse.json(
                { message: "Couldn't find that product" },
                { status: 404 }
            );

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
