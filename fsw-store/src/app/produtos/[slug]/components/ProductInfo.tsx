"use client";

import { useContext, useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { IComputeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Button } from "@/components/ui/shadcn/button";
import DiscountBadge from "@/components/ui/DiscountBadge";

interface IProductInfo {
  product: IComputeProductTotalPrice;
}

const ProductInfo = ({ product }: IProductInfo) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseProductQuantity = () => {
    if (productQuantity === 1) {
      return;
    }

    setProductQuantity((prev) => prev - 1);
  };

  const handleIncreaseProductQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleAddProductToCart = () => {
    addProductToCart({ ...product, productQuantity });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-medium lg:text-4xl">{product.name}</h1>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <strong className="text-lg font-bold lg:text-2xl">
            R$ {String(product.totalPrice.toFixed(2)).replace(".", ",")}
          </strong>

          {product.discountPercent > 0 && (
            <DiscountBadge>{product.discountPercent}</DiscountBadge>
          )}
        </div>

        {product.discountPercent > 0 && (
          <span className="text-xs line-through opacity-75 lg:text-sm">
            R$ {String(Number(product.basePrice).toFixed(2)).replace(".", ",")}
          </span>
        )}
      </div>

      <div className="flex w-[105px] items-center justify-between">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleDecreaseProductQuantity}
        >
          <MinusIcon size={14} />
        </Button>

        <span>{productQuantity}</span>

        <Button
          size={"icon"}
          variant={"outline"}
          onClick={handleIncreaseProductQuantity}
        >
          <PlusIcon size={14} />
        </Button>
      </div>

      <Button className="uppercase" onClick={handleAddProductToCart}>
        Adicionar ao carrinho
      </Button>
    </div>
  );
};

export default ProductInfo;
