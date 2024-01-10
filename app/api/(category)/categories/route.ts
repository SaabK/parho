import { connectToMongo } from "@/lib/db";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

connectToMongo();

export async function GET() {
    try {
        const categories = await Category.find().select("name");

        return NextResponse.json(
            {
                message: "Successfully Fetched the Categories",
                categories,
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
