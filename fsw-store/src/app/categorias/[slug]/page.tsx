import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import { formatter } from "@/helpers/formatCurrency";
import { GET_CATEGORY_ICON } from "@/contants/getCategoryIcon";
import TitleBadge from "@/components/ui/TitleBadge";
import DiscountBadge from "@/components/ui/DiscountBadge";

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
    <>
      <TitleBadge
        icon={GET_CATEGORY_ICON[params.slug as keyof typeof GET_CATEGORY_ICON]}
        label={category.name}
      />

      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-5">
        {category.Products.map((product, index) => (
          <li key={index}>
            <Link
              href={`/produtos/${product.slug}`}
              className="flex flex-col gap-3 overflow-hidden"
            >
              <div className="relative flex h-[200px] w-full items-center justify-center rounded-lg bg-accent">
                <Image
                  src={product.imgUrls[0]}
                  alt={product.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="max-h-[90%] max-w-[90%]"
                />

                {product.discountPercent > 0 && (
                  <DiscountBadge className="absolute left-3 top-3">
                    {product.discountPercent}
                  </DiscountBadge>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <h2
                  title={product.name}
                  className="overflow-hidden text-ellipsis whitespace-nowrap text-lg"
                >
                  {product.name}
                </h2>

                <p className="text-xs line-through">
                  de {formatter.format(Number(product.basePrice))}
                </p>

                <p className="text-sm">
                  por R${" "}
                  <span className="text-3xl font-medium text-primary">
                    {formatter
                      .format(computeProductTotalPrice(product).totalPrice)
                      .slice(3)}
                  </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
