"use client";

import Image from "next/image";
import { useContext } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

import { CartContext, ICartProduct } from "@/providers/cart";
import { Button } from "./shadcn/button";

interface ICartItem {
  product: ICartProduct;
}

const CartItem = ({ product }: ICartItem) => {
  const { decreaseProductQuantityOnCart } = useContext(CartContext);

  const handleDecreaseProductQuantityOnCart = () => {
    decreaseProductQuantityOnCart(product.id);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imgUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="max-h-[90%] max-w-[90%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <p className="text-xs">{product.name}</p>

        <div className="flex gap-3">
          <span className="text-sm font-bold">
            R$ {String(product.totalPrice.toFixed(2)).replace(".", ",")}
          </span>

          {product.discountPercent > 0 && (
            <span className="text-xs line-through opacity-75">
              R${" "}
              {String(Number(product.basePrice).toFixed(2)).replace(".", ",")}
            </span>
          )}
        </div>

        <div className="flex w-[90px] items-center justify-between">
          <Button
            size={"icon"}
            variant={"outline"}
            className="h-8 w-8"
            onClick={handleDecreaseProductQuantityOnCart}
          >
            <MinusIcon size={14} />
          </Button>

          <span className="text-sm">{product.productQuantity}</span>

          <Button
            size={"icon"}
            variant={"outline"}
            className="h-8 w-8"
            onClick={() => {}}
          >
            <PlusIcon size={14} />
          </Button>
        </div>
      </div>

      <Button size={"icon"} variant={"outline"} className="h-8 w-8">
        <TrashIcon size={14} />
      </Button>
    </div>
  );
};

export default CartItem;
