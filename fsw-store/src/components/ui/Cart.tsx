import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";

import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import { Badge } from "./shadcn/badge";
import CartItem from "./CartItem";
import { Separator } from "./shadcn/separator";
import { Button } from "./shadcn/button";

const Cart = () => {
  const { products, subtotal, totalDiscount, total } = useContext(CartContext);

  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
          variant={"outline"}
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </div>

      <div className="flex-1 overflow-y-auto">
        {products.length > 0 ? (
          <div className="flex flex-col gap-4">
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={computeProductTotalPrice(product) as any}
              />
            ))}
          </div>
        ) : (
          <div className="text-center font-semibold">
            Seu carrinho está vazio!
          </div>
        )}
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-sm">
            <span>Subtotal:</span>
            <span>
              R$ {String(subtotal.toFixed(2)).replace(".", ",")}
            </span>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm">
            <span>Descontos:</span>
            <span className="line-through">
              R$ {String(totalDiscount.toFixed(2)).replace(".", ",")}
            </span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <span>Total:</span>
            <span className="font-semibold">
              R$ {String(total.toFixed(2)).replace(".", ",")}
            </span>
          </div>

          <Separator />

          <div>
            <Button className="w-full uppercase">Finalizar compra</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
