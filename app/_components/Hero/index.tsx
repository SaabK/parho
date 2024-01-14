import React from "react";
import Categories from "./Categories";
import Image from "next/image";
import BookShowcase from "./BookShowcase";
import { getBooksOnSale } from "@/lib/requests";

export default async function Hero() {
    const { books: booksOnSale } = await getBooksOnSale();

    return (
        <section className="" id="hero">
            <Categories />
            <div className="w-full h-[510px] bg-gray-200 relative">
                <Image
                    src="/flash_sale.jpg"
                    alt=""
                    fill
                    className="object-cover w-full h-full"
                />
                <BookShowcase books={booksOnSale} />
            </div>
        </section>
    );
}
