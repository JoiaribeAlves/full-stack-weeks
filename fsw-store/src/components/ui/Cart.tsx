import { useContext } from "react";
import { ShoppingCartIcon } from "lucide-react";

import { CartContext } from "@/providers/cart";
import { computeProductTotalPrice } from "@/helpers/product";
import { Badge } from "./shadcn/badge";
import CartItem from "./CartItem";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
          variant={"outline"}
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </div>

      {products.map((product) => (
        <CartItem
          key={product.id}
          product={computeProductTotalPrice(product) as any}
        />
      ))}
    </div>
  );
};

export default Cart;
