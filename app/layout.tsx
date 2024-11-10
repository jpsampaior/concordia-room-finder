import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="bg-ev bg-cover">
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
