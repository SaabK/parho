import { connectToMongo } from "@/lib/db";
import Book from "@/schema/Book";
import { NextResponse } from "next/server";

connectToMongo();

function generateRandomNumber(MIN: number, MAX: number) {
    return Math.floor(Math.random() * (MAX - MIN) + MIN);
}

export async function GET() {
    const books = await Book.find();

    return NextResponse.json(
        {
            hello: "world",
            books,
        },
        {
            status: 200,
        }
    );
}

export async function POST(req: Request) {
    const data: never[] = [];

    return NextResponse.json({
        data,
    });
}
