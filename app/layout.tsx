import "@/app/globals.css";

import {Lexend} from "next/font/google";
import {type NextFontWithVariable} from "next/dist/compiled/@next/font";
import {ThemeProvider} from "@/components/theme-provider";

const lexend: NextFontWithVariable = Lexend({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata = {
    title: "NasThreads",
    description: "Brand new social network made for the people.",
    icons: [{rel: "icon", url: "@/app/favicon.ico"}],
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="fr">
            <body className={`${lexend.className} bg-white dark:bg-black dark:text-white text-black`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
