import { prismaClient } from "@/lib/prisma";

import ProductList from "../components/ProductList";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const Keyboards = async () => {
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <Section>
      <>
        <SectionTitle label={"Teclados"} />

        <ProductList products={keyboards} />
      </>
    </Section>
  );
};

export default Keyboards;
