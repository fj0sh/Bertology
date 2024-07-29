import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Avatar from "@/components/avatar";
import { LogoutProvider } from "@/providers/logoutProvider";
import LogoutModal from "@/components/Modals/LogoutModal";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LogoutProvider>
      <LogoutModal />
      <div className="flex h-full bg-background">
        <Sidebar />
        <div className="ml-[15rem] px-12 py-6 gap-6 w-full flex flex-col">
          <div className="self-end">
            <Avatar />
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
    </LogoutProvider>
  );
}