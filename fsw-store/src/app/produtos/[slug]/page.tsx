import { prismaClient } from "@/lib/prisma";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import AddToCard from "./components/AddToCard";
import FullDescription from "./components/FullDescription";

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
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr_1fr]">
        <ProductImages imgUrls={product.imgUrls} productName={product.name} />

        <ProductInfo product={computeProductTotalPrice(product)} />

        <AddToCard />
      </div>

      <FullDescription description={product.description} />
    </div>
  );
};

export default Page;
