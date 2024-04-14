import Link from "next/link";
import Image from "next/image";

import { IComputeProductTotalPrice } from "@/helpers/product";
import DiscountBadge from "./DiscountBadge";

interface IProductListItem {
  product: IComputeProductTotalPrice;
  imageSize: string;
}

const ProductListItem = ({ product, imageSize }: IProductListItem) => {
  return (
    <li className={`flex flex-col gap-4`}>
      <Link href={`/produtos/${product.slug}`}>
        <div
          className={`relative flex h-[200px] w-[${imageSize}] items-center justify-center rounded-lg bg-accent`}
        >
          <Image
            src={product.imgUrls[0]}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />

          {product.discountPercent > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercent}
            </DiscountBadge>
          )}
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg">
            <strong>{product.name}</strong>
          </p>

          <div className="flex items-center justify-between">
            {product.discountPercent > 0 ? (
              <>
                <span className="text-sm font-semibold">
                  R$ {String(product.totalPrice.toFixed(2)).replace(".", ",")}
                </span>

                <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  R$ {String(product.basePrice.toFixed(2)).replace(".", ",")}
                </span>
              </>
            ) : (
              <span className="text-sm font-semibold">
                R$ {String(product.basePrice.toFixed(2)).replace(".", ",")}
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductListItem;
