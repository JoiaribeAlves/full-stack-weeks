import { prismaClient } from "@/lib/prisma";

import ProductList from "@/components/ui/ProductList";
import Section from "@/components/ui/Section";
import { MouseIcon } from "lucide-react";

const Mouses = async () => {
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <Section icon={<MouseIcon size={16} />} label="Mouses">
      <ProductList products={mouses} height="h-[200px]" width="w-[200px]" />
    </Section>
  );
};

export default Mouses;
