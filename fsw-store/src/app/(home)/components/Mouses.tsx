import { prismaClient } from "@/lib/prisma";

import ProductList from "../components/ProductList";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const Mouses = async () => {
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <Section>
      <>
        <SectionTitle label={"Mouses"} />

        <ProductList products={mouses} />
      </>
    </Section>
  );
};

export default Mouses;
