import Link from "next/link";
import { Category } from "@prisma/client";

import { GET_CATEGORY_ICON } from "@/contants/getCategoryIcon";
import { Badge } from "@/components/ui/shadcn/badge";

interface ICategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItem) => {
  return (
    <Link href={`/categorias/${category.slug}`} className="block w-full">
      <Badge
        variant={"outline"}
        className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {GET_CATEGORY_ICON[category.slug as keyof typeof GET_CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
