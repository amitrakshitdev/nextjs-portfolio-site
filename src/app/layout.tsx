import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Rakshit || Portfolio",
  description: "Amit Rakshit is a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(`${inter.className} min-h-screen h-auto`, [
          "overflow-x-hidden",
          "w-screen",
        ])}
      >
        {children}
      </body>
    </html>
  );
}
