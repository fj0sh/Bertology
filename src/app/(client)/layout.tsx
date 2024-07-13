import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Avatar from "@/components/avatar";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";

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
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}