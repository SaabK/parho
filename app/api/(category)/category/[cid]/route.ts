import { connectToMongo } from "@/lib/db";
import Category from "@/models/Category";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

connectToMongo();

export async function GET(req: Request, { params }: { params: any }) {
    const { cid } = params;

    try {
        const category = await Category.find({ name: cid }).populate("books");

        return NextResponse.json(
            {
                message: "Successfully Fetched the Categories",
                category,
            },
            {
                status: 200,
            }
        );
    } catch (error: any) {
        console.error(error);

        return NextResponse.json(
            {
                message: "An error occurred while fetching categories",
            },
            { status: 500 }
        );
    }
}
