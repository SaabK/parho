import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { connectToMongo } from "@/lib/db";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "600", "900"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Parho - The Best Pakistani Book Store",
    description:
        "Parho is a Pakistani Book Store that aims at providing the best books readily at high quality. You can find all kinds of books from fiction to non-fiction, from self-improvement to poetry",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/logo/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/logo/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/logo/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={cn("antialiased", poppins.className)}>
                {children}
            </body>
        </html>
    );
}
