"use client";

import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ShoppingCartIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { toast } from "sonner";

import { CartContext } from "@/providers/cart";
import { IComputeProductTotalPrice } from "@/helpers/product";
import { formatter } from "@/helpers/formatCurrency";
import DiscountBadge from "./DiscountBadge";
import { Button } from "./shadcn/button";

interface IProductListItem {
  product: IComputeProductTotalPrice;
  imageSize: string;
  priceSize?: string;
}

const ProductListItem = ({
  product,
  imageSize,
  priceSize,
}: IProductListItem) => {
  const { addProductToCart } = useContext(CartContext);

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, productQuantity: 1 });

    toast(`${product.name} foi adicionado ao seu carrinho`, {
      duration: 3500,
      position: "top-right",
      icon: <CheckIcon size={14} />,
    });
  };

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border border-accent p-2">
      <Link
        href={`/produtos/${product.slug}`}
        className="flex w-full flex-grow flex-col gap-3"
      >
        <div
          className={twMerge(
            "relative flex items-center justify-center overflow-hidden rounded-lg bg-accent",
            imageSize,
          )}
        >
          <Image
            src={product.imgUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            className="h-[90%] w-[90%]"
          />

          {product.discountPercent > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercent}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-2 overflow-hidden">
          <strong className="overflow-hidden text-ellipsis whitespace-nowrap text-lg">
            {product.name}
          </strong>

          {product.discountPercent > 0 ? (
            <>
              <p className="text-xs font-light line-through">
                {formatter.format(Number(product.basePrice))}
              </p>

              <p>
                R${" "}
                <span
                  className={`${priceSize ?? "text-3xl"} font-medium text-primary`}
                >
                  {formatter.format(Number(product.totalPrice)).slice(3)}
                </span>
              </p>
            </>
          ) : (
            <p>
              R${" "}
              <span
                className={`${priceSize ?? "text-3xl"} font-medium text-primary`}
              >
                {formatter.format(Number(product.totalPrice)).slice(3)}
              </span>
            </p>
          )}
        </div>
      </Link>

      <Button
        size="sm"
        variant="secondary"
        className="flex items-center gap-1 text-xs uppercase hover:bg-primary hover:text-primary-foreground"
        onClick={handleAddProductToCart}
      >
        <ShoppingCartIcon size={16} /> Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductListItem;
