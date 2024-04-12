import { Product } from "@prisma/client";

export interface IComputeProductTotalPrice extends Product {
  totalPrice: number;
}

const computeProductTotalPrice = (product: Product): IComputeProductTotalPrice => {
  if (product.discountPercent === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const discount = Number(product.basePrice) * (product.discountPercent / 100);

  const totalPrice = Number(product.basePrice) - discount;

  return {
    ...product,
    totalPrice,
  };
};

export { computeProductTotalPrice };
