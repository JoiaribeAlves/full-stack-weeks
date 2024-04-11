import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Store - Full Stack Week",
  description: "Full stack week store",
};

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
