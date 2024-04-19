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
        lt: 25,
      },
    },
    orderBy: {
      discountPercent: "desc",
    },
  });

  return (
    <Section icon={<PercentIcon size={16} />} label="Ofertas">
      <ScrollArea className="whitespace-nowrap">
        <ul className="flex w-max gap-4 px-2 pb-4 lg:px-8">
          {deals.map((deal, index) => {
            return (
              <li key={index} className="flex w-[198px] lg:w-[238px]">
                <ProductListItem
                  imageSize="w-[180px] h-[180px] lg:h-[220px] lg:w-[220px]"
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

export default Deals;
