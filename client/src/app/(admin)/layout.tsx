import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Avatar from "@/components/avatar";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full bg-background">
      <Sidebar />
      <div className="ml-[17rem] p-12 gap-3 w-full flex flex-col">
        <div className="self-end">
          <Avatar   />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
