import type { Metadata } from "next";
import "./globals.css";
import Header from "./sections/Header";

export const metadata: Metadata = {
  title: "Work Dashboard",
  description: "A personal dashboard for organizing work and daily priorities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-1 antialiased bg-foreground text-background">
        <Header />
        {children}
      </body>
    </html>
  );
}
