import { prismaClient } from "@/lib/prisma";

import ProductList from "@/components/ui/ProductList";
import Section from "@/components/ui/Section";

const Mouses = async () => {
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <Section label="Mouses">
      <ProductList products={mouses} />
    </Section>
  );
};

export default Mouses;
