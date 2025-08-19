'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./componets/header/page";
import HeaderScreen from "./componets/header/page";
import styled, { createGlobalStyle } from "styled-components";
import FooterComponent from "./componets/footer/page";




const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
        <HeaderScreen/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
