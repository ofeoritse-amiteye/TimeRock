import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage'
})

export const metadata: Metadata = {
  title: "TimeRockFamilyEntertainment",
  description: "Where creative ideas become unforgettable experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
