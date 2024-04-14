import { ShoppingCartIcon } from "lucide-react";

import { Badge } from "./shadcn/badge";
import CartItem from "./CartItem";

const Cart = () => {
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

      <CartItem />
    </div>
  );
};

export default Cart;
