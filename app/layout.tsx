import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

const sans = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const serif = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});
const mono = JetBrains_Mono({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Pedro Pontes García",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Teachers:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        {children}
        <Footer />
        <Nav />
      </body>
    </html>
  );
}
