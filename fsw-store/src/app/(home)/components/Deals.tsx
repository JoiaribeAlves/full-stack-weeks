import { prismaClient } from "@/lib/prisma";

import ProductList from "@/components/ui/ProductList";
import Section from "@/components/ui/Section";

const Deals = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <Section label="Ofertas">
      <ProductList products={deals} />
    </Section>
  );
};

export default Deals;
