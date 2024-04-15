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
  decreaseProductQuantityOnCart: (productId: string) => void;
  increaseProductQuantityOnCart: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
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
  decreaseProductQuantityOnCart: () => {},
  increaseProductQuantityOnCart: () => {},
  removeProductFromCart: () => {},
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

  const decreaseProductQuantityOnCart = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              productQuantity: cartProduct.productQuantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.productQuantity > 0),
    );
  };

  const increaseProductQuantityOnCart = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            productQuantity: cartProduct.productQuantity + 1,
          };
        }

        return cartProduct;
      }),
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        addProductToCart,
        decreaseProductQuantityOnCart,
        increaseProductQuantityOnCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
export default CartProvider;