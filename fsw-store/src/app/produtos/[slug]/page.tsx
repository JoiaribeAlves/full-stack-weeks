import { LinkIcon } from "lucide-react";
import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import { formatPageTitle } from "@/helpers/formatPageTitle";
import Section from "@/components/ui/Section";
import ProductListItem from "@/components/ui/ProductListItem";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import PaymentAndShipping from "./components/PaymentAndShipping";
import FullDescription from "./components/FullDescription";
import { Separator } from "@/components/ui/shadcn/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/shadcn/scroll-area";

export const metadata: Metadata = {
  title: "FSW Store",
  description: "Confira os detalhes do produto",
};

interface IProductsSlug {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: IProductsSlug) => {
  metadata.title = formatPageTitle(params.slug);

  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          Products: {
            where: {
              NOT: {
                slug: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

  return (
    <div className="pb-24">
      <div className="flex flex-col gap-6 px-2 py-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ProductImages imgUrls={product.imgUrls} productName={product.name} />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ProductInfo product={computeProductTotalPrice(product)} />

            <PaymentAndShipping />
          </div>
        </div>

        <FullDescription description={product.description} />

        <Separator />
      </div>

      <Section icon={<LinkIcon size={16} />} label="Produtos relacionados">
        <ScrollArea className="whitespace-nowrap">
          <ul className="flex w-max gap-4 px-2 pb-4 lg:px-8">
            {product.category.Products.map((item, index) => {
              return (
                <li key={index} className="flex w-[178px] lg:w-[218px]">
                  <ProductListItem
                    imageSize="w-[160px] h-[160px] lg:h-[200px] lg:w-[200px]"
                    product={computeProductTotalPrice(item)}
                    priceSize="text-2xl"
                  />
                </li>
              );
            })}
          </ul>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Section>
    </div>
  );
};

export default Page;
