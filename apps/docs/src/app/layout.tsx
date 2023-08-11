import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { classNames } from "@/utils/classname";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { withPrefix } from "@/utils/cookie.util";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Typebox Composition | Pre-formatted validation",
  description: "Pre-formatted validation using typebox under the hood",
};

function getTheme() {
  return cookies().get(withPrefix("theme"))?.value;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = getTheme();

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body
        className={classNames(
          inter.className,
          "antialiased bg-white dark:bg-gray-950",
        )}
      >
        <Header />
        <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
