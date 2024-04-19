import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

import { computeProductTotalPrice } from "@/helpers/product";
import Section from "@/components/ui/Section";
import ProductListItem from "@/components/ui/ProductListItem";
import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";

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
      <ScrollArea className="whitespace-nowrap">
        <ul className="flex w-max gap-4 px-2 pb-4 lg:px-8">
          {deals.map((mouse, index) => {
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

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Section>
  );
};

export default Deals;
