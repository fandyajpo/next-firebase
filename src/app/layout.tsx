import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TQuery from "@/lib/tQuery";
import Navbar from "@/components/layout/navbar";
const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Instiki Developer Club",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <TQuery>{children}</TQuery>
      </body>
    </html>
  );
}
