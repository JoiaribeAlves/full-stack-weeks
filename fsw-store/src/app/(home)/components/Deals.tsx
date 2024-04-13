import { prismaClient } from "@/lib/prisma";

import ProductList from "../../../components/ui/ProductList";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const Deals = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <Section>
      <>
        <SectionTitle label={"Ofertas"} />

        <ProductList products={deals} />
      </>
    </Section>
  );
};

export default Deals;
