import type { Metadata } from "next";
import "../../globals.css";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-background h-full">{children}</div>
    </>
  );
}
