import { prismaClient } from "@/lib/prisma";

import Section from "@/components/ui/Section";
import { MouseIcon } from "lucide-react";
import ProductListItem from "@/components/ui/ProductListItem";
import { computeProductTotalPrice } from "@/helpers/product";

const Teste = async () => {
  const mouses = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  });

  return (
    <Section icon={<MouseIcon size={16} />} label="Teste">
      <ul className="flex gap-4 overflow-x-auto px-2 pb-5 lg:px-8">
        {mouses.map((mouse, index) => {
          return (
            <li key={index} className="flex w-[218px] lg:w-[258px]">
              <ProductListItem
                imageSize="w-[200px] h-[200px] lg:h-[240px] lg:w-[240px]"
                product={computeProductTotalPrice(mouse)}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Teste;
