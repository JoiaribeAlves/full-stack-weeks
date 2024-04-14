import { useContext } from "react";

import { CartContext } from "@/providers/cart";

const CartItem = () => {
  const { products } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-3">
          {/* imagem */}
          {product.name}

          {/* conteudo */}

          {/* excluir */}
        </div>
      ))}
    </div>
  );
};

export default CartItem;
