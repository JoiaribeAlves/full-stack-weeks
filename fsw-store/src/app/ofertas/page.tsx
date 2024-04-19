import { PercentIcon } from "lucide-react";
import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import TitleBadge from "@/components/ui/TitleBadge";
import ProductListItem from "@/components/ui/ProductListItem";

export const metadata: Metadata = {
  title: "Ofertas FSW Store",
  description: "Confira as nossas ofertas em produtos selecionados",
};

const Page = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
    orderBy: {
      discountPercent: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-6 px-2 pb-24 pt-6 lg:px-8 lg:pt-8">
      <TitleBadge icon={<PercentIcon size={16} />} label="Ofertas" />

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {deals.map((deal, index) => {
          return (
            <li key={index} className="flex w-full">
              <ProductListItem
                imageSize="w-full h-[180px] lg:h-[220px]"
                product={computeProductTotalPrice(deal)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
