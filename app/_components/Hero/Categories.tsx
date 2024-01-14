import React from "react";
import { getCategories } from "@/lib/requests";
import { ICategory } from "@/lib/types";

export default async function Categories() {
    const { categories } = await getCategories();

    return (
        <div className="bg-primary bg-gray-100">
            <div className="container flex justify-between gap-1 flex-wrap">
                {categories.map((category: ICategory) => (
                    <span
                        key={category._id}
                        className="cursor-pointer text-[13px] text-white/90 py-1.5 px-3 hover:bg-white hover:text-black transition-all"
                    >
                        {category.name}
                    </span>
                ))}
            </div>
        </div>
    );
}
