import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

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
    <Section icon={<PercentIcon size={16} />} label="Ofertas">
      <ProductList products={deals} height="h-[200px]" width="w-[200px]" />
    </Section>
  );
};

export default Deals;
