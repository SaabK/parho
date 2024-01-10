import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <header className="container py-2 flex items-center gap-3">
            <Image
                src="/logo/real_logo.png"
                width={50}
                height={50}
                alt="Parho Logo"
            />
            <SearchBar />
            <div className="flex gap-2">
                <Button variant="default" className="text-xs">
                    Log in
                </Button>
                <Button variant="ghost" className="text-xs">
                    Sign up
                </Button>
            </div>
        </header>
    );
}
