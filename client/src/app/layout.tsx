import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Avatar from "@/components/avatar";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
