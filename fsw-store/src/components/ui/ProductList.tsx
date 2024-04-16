import Image from "next/image";
import { Product } from "@prisma/client";
import { twMerge } from "tailwind-merge";

import { computeProductTotalPrice } from "@/helpers/product";
import { formatter } from "@/helpers/formatCurrency";
import { ScrollArea, ScrollBar } from "./shadcn/scroll-area";
import DiscountBadge from "./DiscountBadge";

interface IProductList {
  products: Product[];
  width: string;
  height: string;
}

const ProductList = ({ products, height, width }: IProductList) => {
  return (
    <ScrollArea className="whitespace-nowrap">
      <ul className="flex w-max gap-3 pb-4">
        {products.map((product, index) => (
          <li
            key={index}
            className={twMerge("flex flex-col gap-3 overflow-hidden", width)}
          >
            <div
              className={twMerge(
                "relative flex w-full items-center justify-center rounded-lg bg-accent",
                height,
              )}
            >
              <Image
                src={product.imgUrls[0]}
                alt={product.name}
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="max-h-[90%] max-w-[90%]"
              />

              {product.discountPercent > 0 && (
                <DiscountBadge className="absolute left-3 top-3">
                  {product.discountPercent}
                </DiscountBadge>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <h2
                title={product.name}
                className="overflow-hidden text-ellipsis whitespace-nowrap text-lg"
              >
                {product.name}
              </h2>

              {product.discountPercent > 0 ? (
                <>
                  <p className="text-xs line-through">
                    de {formatter.format(Number(product.basePrice))}
                  </p>

                  <p className="text-sm">
                    por R${" "}
                    <span className="text-3xl font-medium text-primary">
                      {formatter
                        .format(computeProductTotalPrice(product).totalPrice)
                        .slice(3)}
                    </span>
                  </p>
                </>
              ) : (
                <p className="text-sm">
                  R${" "}
                  <span className="text-3xl font-medium text-primary">
                    {formatter
                      .format(computeProductTotalPrice(product).totalPrice)
                      .slice(3)}
                  </span>
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ProductList;
