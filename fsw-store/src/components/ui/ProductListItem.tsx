import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";

import { IComputeProductTotalPrice } from "@/helpers/product";
import { Badge } from "./shadcn/badge";

interface IProductListItem {
  product: IComputeProductTotalPrice;
}

const ProductListItem = ({ product }: IProductListItem) => {
  return (
    <li className="flex max-w-[170px] flex-col gap-4">
      <div className="relative flex h-[180px] w-[170px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imgUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />

        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-lg">
          <strong>{product.name}</strong>
        </p>

        <div className="flex items-center justify-between">
          {product.discountPercent > 0 ? (
            <>
              <span className="font-semibold">
                R$ {String(product.totalPrice.toFixed(2)).replace(".", ",")}
              </span>

              <span className="text-xs line-through opacity-75">
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
    </li>
  );
};

export default ProductListItem;
