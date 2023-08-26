import { AppProvider } from "@/components/AppProvider";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { classNames } from "@/utils/classname";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typebox Composition | Pre-formatted validation",
  description: "Pre-formatted validation using typebox under the hood",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          inter.className,
          "antialiased bg-white dark:bg-gray-950",
        )}
      >
        <Script src="/js/theme.js" strategy="beforeInteractive" suppressHydrationWarning id="theme" />

        <Header />
        <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
          <AppProvider>{children}</AppProvider>
        </div>
      </body>
    </html>
  );
}
