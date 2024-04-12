import { prismaClient } from "@/lib/prisma";

import ProductList from "../components/ProductList";

const Deals = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Ofertas</h2>

      <ProductList products={deals} />
    </div>
  );
};

export default Deals;
