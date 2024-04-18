import { ReactNode } from "react";
import { Roboto } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme";
import { AuthProvider } from "@/providers/auth";
import CartProvider from "@/providers/cart";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/shadcn/sonner";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <div className="flex min-h-screen flex-col">
                <Toaster />
                <Header />
                <main className="flex flex-1 flex-col gap-8 py-4 lg:py-8">
                  {children}
                </main>
                <Footer />
              </div>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
