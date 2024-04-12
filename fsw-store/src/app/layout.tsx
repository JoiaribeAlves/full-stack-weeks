import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

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
      <body className={inter.className}>
        <AuthProvider>
          <>
            <Header />
            {children}
            <Footer />
          </>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
