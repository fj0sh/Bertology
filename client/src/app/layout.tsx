import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/queryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

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
          <body>
            <ReactQueryDevtools />
            <div className="w-full h-full bg-background">{children}</div>
          </body>
        </PrimeReactProvider>
      </html>
    </QueryProvider>
  );
}
