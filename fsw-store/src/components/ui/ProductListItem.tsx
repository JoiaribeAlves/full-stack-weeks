import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { IComputeProductTotalPrice } from "@/helpers/product";
import { formatter } from "@/helpers/formatCurrency";
import DiscountBadge from "./DiscountBadge";

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
  return (
    <div className="flex w-full">
      <Link
        href={`/produtos/${product.slug}`}
        className="flex w-full flex-col gap-3 rounded-lg border border-accent p-2"
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
    </div>
  );
};

export default ProductListItem;
