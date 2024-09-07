import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
        <body>
          <ReactQueryDevtools />
          <div className="w-full h-screen bg-background">{children}</div>
        </body>
      </html>
    </QueryProvider>
  );
}
