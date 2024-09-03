import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/navbar"

const work_Sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Created by Muhammed Aman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_Sans.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
