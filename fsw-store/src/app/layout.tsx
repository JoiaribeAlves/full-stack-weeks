import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { AuthProvider } from "@/providers/auth";
import CartProvider from "@/providers/cart";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/shadcn/sonner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

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
      <body className={roboto.className}>
        <AuthProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Toaster />
              <Header />
              <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-8 lg:p-8">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
