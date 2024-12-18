import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../../src/app/components/layout/Navbar";
import Footer from "../../src/app/components/layout/Footer";
import "./globals.css";
import ClientLoaderWrapper from "./ClientLoaderWrapper";

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
  title: "Giichi IT Solutions Pvt. Ltd. - Digital Innovation, Web3 & Blockchain, AI, and Application Development",
  description: "Giichi IT Solutions is a global leader in Digital Transformation, specializing in Web3, Blockchain, AI, Application Development, UI/UX Design, and Enterprise Solutions. With over 500+ dedicated developers and a presence in Gurgaon, Bangalore, Taiwan, Canada, and the US, we deliver cutting-edge, customer-centric technology services with unmatched quality and timely delivery.",
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  keywords: "Digital Transformation, Web Development, UI/UX Design, Web3, Blockchain Solutions, AI Development, NFTs, Gaming, DeFi, dApps, Mobile App Development, Enterprise Solutions, CRM, ERP, POS, Digital Strategy, Technology Consulting, Cloud Infrastructure, IoT, AR/VR, Business Intelligence, Clutch Certified IT Company, ISO Certified IT Solutions.",
  openGraph: {
    type: 'website',
    title: 'Giichi IT Solutions Pvt. Ltd. - Digital Innovation, Web3 & Blockchain, AI, and Application Development.',
    description: 'Giichi IT Solutions is a global leader in Digital Transformation, specializing in Web3, Blockchain, AI, Application Development, UI/UX Design, and Enterprise Solutions. With over 500+ dedicated developers and a presence in Gurgaon, Bangalore, Taiwan, Canada, and the US, we deliver cutting-edge, customer-centric technology services with unmatched quality and timely delivery.',
    url: 'https://giichi.network/',
    images: [
      {
        url: '', // Full URL for the image
        width: 1200,
        height: 630,
        alt: 'Digital Innovation, Web3 & Blockchain, AI, and Application Development',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg" type="image/*" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ClientLoaderWrapper>
          <Navbar/>
        <main className="w-full bg-black min-h-screen">{children}</main>
        <Footer/>
          </ClientLoaderWrapper>
      </body>
    
    </html>
  );
}
