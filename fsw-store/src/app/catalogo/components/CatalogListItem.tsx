import Image from "next/image";
import Link from "next/link";
import { Category } from "@prisma/client";

export interface ICatalogListItem {
  category: Category;
}

const CatalogListItem = ({ category }: ICatalogListItem) => {
  return (
    <li className="flex flex-col transition-transform hover:scale-[1.03]">
      <Link href={`/categorias/${category.slug}`}>
        <div className="bg-catalog-item-gradient flex h-[150px] lg:h-[200px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
          <Image
            src={category.imgUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
        </div>

        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3 text-center text-sm font-semibold">
          {category.name}
        </div>
      </Link>
    </li>
  );
};

export default CatalogListItem;
