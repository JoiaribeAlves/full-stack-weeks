import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/ProductImages";

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
  });

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr_1fr]">
      <ProductImages imgUrls={product.imgUrls} productName={product.name} />
    </div>
  );
};

export default Page;
