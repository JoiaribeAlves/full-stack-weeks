import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import Section from "@/components/ui/Section";
import ProductList from "@/components/ui/ProductList";
import { Separator } from "@/components/ui/shadcn/separator";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import PaymentAndShipping from "./components/PaymentAndShipping";
import FullDescription from "./components/FullDescription";

export const metadata: Metadata = {
  title: "Produto FSW Store",
  description: "Confira os detalhes do produto",
};

interface IProductsSlug {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: IProductsSlug) => {
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
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ProductImages imgUrls={product.imgUrls} productName={product.name} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ProductInfo product={computeProductTotalPrice(product)} />

          <PaymentAndShipping />
        </div>
      </div>

      <FullDescription description={product.description} />

      <Separator />

      <Section label="Produtos relacionados">
        <ProductList
          products={product.category.Products}
          height="h-[200px]"
          width="w-[200px]"
        />
      </Section>
    </div>
  );
};

export default Page;
