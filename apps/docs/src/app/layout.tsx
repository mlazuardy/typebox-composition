import { classNames } from "@/utils/classname";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typebox Validator | Pre-formatted validation",
  description: "Pre-formatted validation using typebox under the hood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "antialiased bg-white dark:bg-slate-900")}>
        {children}
      </body>
    </html>
  );
}
