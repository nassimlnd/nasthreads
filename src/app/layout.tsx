import "~/styles/globals.css";

import {Lexend} from "next/font/google";
import {type NextFontWithVariable} from "next/dist/compiled/@next/font";

const lexend: NextFontWithVariable = Lexend({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "NasThreads",
    description: "Brand new social network made for the people.",
    icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body
            className={`font-sans ${lexend.variable} dark:bg-neutral-900 bg-white dark:text-white text-black`}>{children}</body>
        </html>
    );
}
