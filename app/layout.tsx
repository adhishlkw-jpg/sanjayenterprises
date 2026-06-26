import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sanjay Enterprises | IVF, Fertility & Surgical Distribution India",
  description:
    "Premium IVF, fertility, gynaecology and surgical healthcare product distribution across India with technical support and exclusive brand partnerships.",
  keywords: ["IVF products India", "fertility devices", "surgical disposables", "IUI devices", "Sanjay Enterprises"],
  openGraph: {
    title: "Sanjay Enterprises",
    description: "Trusted IVF, fertility and surgical healthcare solutions across India.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
