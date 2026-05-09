import React from "react";
import Header from "./RootLayout/Header/index";
import Footer from "./RootLayout/Footer/index";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}