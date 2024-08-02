import type { Metadata } from "next";
import "../../globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/Footer";

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
      <Navbar />
      <div className="mt-16">{children}</div>
      <Footer />
    </>
  );
}
