import type { Metadata } from "next";
import { Category } from "@prisma/client";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import { GET_CATEGORY_ICON } from "@/contants/getCategoryIcon";
import { Badge } from "@/components/ui/shadcn/badge";
import ProductListItem from "@/components/ui/ProductListItem";

export const metadata: Metadata = {
  title: "Categoria FSW Store",
};

interface ITeste {
  params: Category;
}

const Page = async ({ params }: ITeste) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      Products: true,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <>
      <div>
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
          variant={"outline"}
        >
          {GET_CATEGORY_ICON[params.slug as keyof typeof GET_CATEGORY_ICON]}
          {category.name}
        </Badge>
      </div>

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {category.Products.map((product) => (
          <ProductListItem
            key={product.id}
            product={computeProductTotalPrice(product)}
            imageSize={"100%"}
          />
        ))}
      </ul>
    </>
  );
};

export default Page;
