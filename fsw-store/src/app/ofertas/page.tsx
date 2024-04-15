import type { Metadata } from "next";
import { PercentIcon } from "lucide-react";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import { Badge } from "@/components/ui/shadcn/badge";
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
  });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
          variant={"outline"}
        >
          <PercentIcon size={16} />
          Ofertas
        </Badge>
      </div>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {deals.map((product) => (
          <ProductListItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            imageSize="100%"
          />
        ))}
      </ul>
    </div>
  );
};

export default Page;
