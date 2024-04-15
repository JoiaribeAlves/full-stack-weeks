"use server";

import Stripe from "stripe";

import { ICartProduct } from "@/providers/cart";

const createCheckout = async (products: ICartProduct[]) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.BASE_URL,
    cancel_url: process.env.BASE_URL,
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "BRL",
          product_data: {
            name: product.name,
            images: product.imgUrls,
          },
          unit_amount: product.totalPrice * 100,
        },
        quantity: product.productQuantity,
      };
    }),
  });

  return checkout;
};

export { createCheckout };
