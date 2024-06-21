import { DataProvider } from "@/context/dataContext";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "Flow Ecommerce",
  description: "e-Commerce developed by Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DataProvider>
        <body className={`${poppins.className} ${inter.className}`}>{children}</body>
      </DataProvider>
    </html>
  );
}
