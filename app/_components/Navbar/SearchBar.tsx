import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="w-full relative">
            <Input type="text" placeholder="search" />
            <Search
                className="absolute cursor-pointer right-2.5 w-5 opacity-95 hover:text-primary"
                style={{ top: "calc(50% - 0.75rem)" }}
            />
        </div>
    );
}
