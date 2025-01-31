import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { UserProvider } from "@/providers/UserProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <PrimeReactProvider>
          <UserProvider>
            <body className="bg-background">
              <ToastContainer />
              {/* <ReactQueryDevtools /> */}
              <div className="w-full h-full bg-background">{children}</div>
            </body>
          </UserProvider>
        </PrimeReactProvider>
      </html>
    </QueryProvider>
  );
}
