import { connectToMongo } from "@/lib/db";
import Book from "@/schema/Book";
import { NextResponse } from "next/server";

connectToMongo();

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
    const data = await req.json();

    return NextResponse.json({
        data,
    });
}
