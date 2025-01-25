import Header from "@/components/Header";
import { CartProvider } from "@/context/Cart";
import type { Metadata } from "next";
import "./globals.css";
import { DeliveryProvider } from "@/context/Delivery";

export const metadata: Metadata = {
  title: "Coffee Delivery",
  description: "Gerenciador de carrinho de compras de uma cafeteria fictícia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="w-screen h-screen flex flex-col items-center">
        <CartProvider>
          <DeliveryProvider>
            <Header />
            {children}
          </DeliveryProvider>
        </CartProvider>
      </body>
    </html>
  );
}
