'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./componets/header/Header";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./componets/footer/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}