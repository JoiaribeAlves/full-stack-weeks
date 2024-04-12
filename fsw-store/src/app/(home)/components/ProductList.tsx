import { Product } from "@prisma/client";

import ProductListItem from "@/components/ui/ProductListItem";
import { computeProductTotalPrice } from "@/helpers/product";

interface IProductList {
  products: Product[];
}

const ProductList = ({ products }: IProductList) => {
  return (
    <ul className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductListItem
          key={product.id}
          product={computeProductTotalPrice(product)}
        />
      ))}
    </ul>
  );
};

export default ProductList;