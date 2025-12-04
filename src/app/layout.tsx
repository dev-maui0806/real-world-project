import type { Metadata } from "next";
import "./globals.css";
import FixedWidget from "@/components/FixedWidget";

export const metadata: Metadata = {
  title: "RealWorld Frontend",
  description: "RealWorld Frontend Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FixedWidget />
      </body>
    </html>
  );
}
