'use client';
import { GlobalStyle } from "styles/GlobalStyles";
import Header from "../../componets/header/Header";
import Footer from "../../componets/footer/Footer";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <title>Voluntariado</title>
            </head>
            <body>
                <GlobalStyle />
                <Header />
                {children}
                <Footer />
            </body>
        </html>

    );
}