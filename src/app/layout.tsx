'use client'
import { GlobalStyle } from "styles/GlobalStyles";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./componets/header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./componets/footer/Footer";
import Head from "next/head";
import Link from "next/link";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
            <body>
                <GlobalStyle />
                <Header />
                {children}
                <Footer />
            </body>
        </html>

    );
}