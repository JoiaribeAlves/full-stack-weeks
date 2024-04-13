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
        <div key={product.id} className="w-[200px] pb-4">
          <ProductListItem
            product={computeProductTotalPrice(product)}
            imageSize={"200px"}
          />
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
