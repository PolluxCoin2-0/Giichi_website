import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../../src/app/components/layout/Navbar";
import Footer from "../../src/app/components/layout/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar/>
        <main className="w-full px-64 bg-black min-h-screen">{children}</main>
        <Footer/>
      </body>
    
    </html>
  );
}
