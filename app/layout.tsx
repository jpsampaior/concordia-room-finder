import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";

export const metadata: Metadata = {
  title: "Concordia Room Finder",
  description: "Buzzing your way to every room at Concordia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ev bg-cover min-h-[95vh]">
        <Header />
        <main className="px-10">{children}</main>
      </body>
    </html>
  );
}
