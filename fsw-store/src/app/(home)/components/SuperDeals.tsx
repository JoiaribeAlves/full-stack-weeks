import { prismaClient } from "@/lib/prisma";
import { DollarSignIcon } from "lucide-react";

import { computeProductTotalPrice } from "@/helpers/product";
import Section from "@/components/ui/Section";
import ProductListItem from "@/components/ui/ProductListItem";
import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";

const SuperDeals = async () => {
  const superDeals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gte: 25,
      },
    },
    orderBy: {
      discountPercent: "desc",
    },
  });

  return (
    <Section icon={<DollarSignIcon size={16} />} label="Super Ofertas">
      <ScrollArea className="whitespace-nowrap">
        <ul className="flex w-max gap-4 px-2 pb-4 lg:px-8">
          {superDeals.map((deal, index) => {
            return (
              <li key={index} className="flex w-[218px] lg:w-[258px]">
                <ProductListItem
                  imageSize="w-[200px] h-[200px] lg:h-[240px] lg:w-[240px]"
                  product={computeProductTotalPrice(deal)}
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

export default SuperDeals;
