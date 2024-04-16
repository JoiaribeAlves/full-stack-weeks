import Link from "next/link";
import { Category } from "@prisma/client";

import { GET_CATEGORY_ICON } from "@/contants/getCategoryIcon";
import { Badge } from "@/components/ui/shadcn/badge";

interface ICategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItem) => {
  return (
    <li>
      <Link href={`/categorias/${category.slug}`} className="w-full">
        <Badge
          variant={"outline"}
          className="flex items-center justify-center gap-2 rounded-lg p-3 transition-colors hover:bg-accent"
        >
          {GET_CATEGORY_ICON[category.slug as keyof typeof GET_CATEGORY_ICON]}
          <span className="text-xs font-bold">{category.name}</span>
        </Badge>
      </Link>
    </li>
  );
};

export default CategoryItem;
