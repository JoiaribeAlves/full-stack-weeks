import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import { GET_CATEGORY_ICON } from "@/contants/getCategoryIcon";
import TitleBadge from "@/components/ui/TitleBadge";
import ProductListItem from "@/components/ui/ProductListItem";

export const metadata: Metadata = {
  title: "",
};

interface ICategoriesSlug {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: ICategoriesSlug) => {
  metadata.title =
    params.slug.charAt(0).toUpperCase() +
    params.slug.slice(1).concat(" FSW Store");

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
    <div className="flex flex-col gap-6 px-2 pb-24 pt-6 lg:px-8 lg:pt-8">
      <TitleBadge
        icon={GET_CATEGORY_ICON[params.slug as keyof typeof GET_CATEGORY_ICON]}
        label={category.name}
      />

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {category.Products.map((product, index) => {
          return (
            <li key={index} className="flex w-full">
              <ProductListItem
                imageSize="w-full h-[180px] lg:h-[220px]"
                product={computeProductTotalPrice(product)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
