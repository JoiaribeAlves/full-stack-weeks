"use client";

import React, { ReactNode, createContext, useState } from "react";

import { IComputeProductTotalPrice } from "@/helpers/product";

export interface ICartProduct extends IComputeProductTotalPrice {
  productQuantity: number;
}

interface ICartContext {
  products: ICartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: ICartProduct) => void;
}

interface ICartProvider {
  children: ReactNode;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  addProductToCart: () => {},
});

const CartProvider = ({ children }: ICartProvider) => {
  const [products, setProducts] = useState<ICartProduct[]>([]);

  const addProductToCart = (product: ICartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...product,
              productQuantity:
                cartProduct.productQuantity + product.productQuantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;
