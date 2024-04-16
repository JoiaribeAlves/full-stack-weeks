import { prismaClient } from "@/lib/prisma";
import { KeyboardIcon } from "lucide-react";

import ProductList from "@/components/ui/ProductList";
import Section from "@/components/ui/Section";

const Keyboards = async () => {
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <Section icon={<KeyboardIcon size={16} />} label="Teclados">
      <ProductList products={keyboards} height="h-[200px]" width="w-[200px]" />
    </Section>
  );
};

export default Keyboards;
