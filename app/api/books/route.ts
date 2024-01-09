import { connectToMongo } from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

function generateRandomNumber(MIN: number, MAX: number) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

connectToMongo();

export async function GET() {
    const books = await Book.find();

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
