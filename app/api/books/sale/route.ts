import { connectToMongo } from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

connectToMongo();

export async function GET() {
    const books = await Book.find().skip(20).limit(7);

    return NextResponse.json(
        {
            message: "Successfully Fetched the Books",
            books,
        },
        {
            status: 200,
        }
    );
}
