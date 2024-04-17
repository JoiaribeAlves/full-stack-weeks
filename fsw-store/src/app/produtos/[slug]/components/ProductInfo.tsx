"use client";

import { useContext, useState } from "react";
import { CheckIcon, MinusIcon, PlusIcon } from "lucide-react";
import { toast } from "sonner";

import { IComputeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { Button } from "@/components/ui/shadcn/button";
import DiscountBadge from "@/components/ui/DiscountBadge";
import { formatter } from "@/helpers/formatCurrency";

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

    toast(`${product.name} foi adicionado ao seu carrinho`, {
      duration: 3500,
      position: "top-right",
      icon: <CheckIcon size={14} />,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">{product.name}</h1>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-1">
            <span className="text-xs lg:text-sm">R$</span>
            <strong className="text-4xl font-medium text-primary">
              {formatter.format(product.totalPrice).slice(3)}
            </strong>
          </div>

          {product.discountPercent > 0 && (
            <DiscountBadge>{product.discountPercent}</DiscountBadge>
          )}
        </div>

        {product.discountPercent > 0 && (
          <span className="text-xs line-through opacity-75 lg:text-sm">
            {formatter.format(Number(product.basePrice))}
          </span>
        )}
      </div>

      <div className="flex w-24 items-center justify-between">
        <Button
          size={"icon"}
          variant={"outline"}
          className="h-8 w-8"
          onClick={handleDecreaseProductQuantity}
        >
          <MinusIcon size={14} />
        </Button>

        <span>{productQuantity}</span>

        <Button
          size={"icon"}
          variant={"outline"}
          className="h-8 w-8"
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
