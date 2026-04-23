import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "altogetherceremonies | Jane Wingfield, Celebrant",
    template: "%s | altogetherceremonies",
  },
  description:
    "altogetherceremonies - bespoke, heartfelt ceremonies for weddings, funerals, naming ceremonies, vow renewals and life celebrations across Surrey and the South East. Created by celebrant Jane Wingfield.",
  keywords: [
    "celebrant",
    "Surrey",
    "South East",
    "weddings",
    "funerals",
    "naming ceremonies",
    "vow renewals",
    "Jane Wingfield",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
