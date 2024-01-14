"use client";

import { IBook } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

interface BookShowcaseProps {
    books: IBook[];
}

export default function BookShowcase({ books }: BookShowcaseProps) {
    return (
        <div className="w-[21%] absolute right-20 top-10">
            <Carousel
                showThumbs={false}
                swipeable={false}
                showStatus={false}
                showArrows={false}
                infiniteLoop
                autoPlay
                showIndicators={false}
            >
                {books.map((book) => (
                    <Image
                        src={book.image}
                        width={300}
                        height={200}
                        alt={book.name}
                    />
                ))}
            </Carousel>
        </div>
    );
}
