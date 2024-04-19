import { prismaClient } from "@/lib/prisma";
import { KeyboardIcon } from "lucide-react";

import { computeProductTotalPrice } from "@/helpers/product";
import Section from "@/components/ui/Section";
import ProductListItem from "@/components/ui/ProductListItem";
import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";

const Keyboards = async () => {
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
    orderBy: {
      discountPercent: "desc",
    },
  });

  return (
    <Section icon={<KeyboardIcon size={16} />} label="Teclados">
      <ScrollArea className="whitespace-nowrap">
        <ul className="flex w-max gap-4 px-2 pb-4 lg:px-8">
          {keyboards.map((keyboard, index) => {
            return (
              <li key={index} className="flex w-[178px] lg:w-[218px]">
                <ProductListItem
                  imageSize="w-[160px] h-[160px] lg:h-[200px] lg:w-[200px]"
                  product={computeProductTotalPrice(keyboard)}
                  priceSize="text-2xl"
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

export default Keyboards;
