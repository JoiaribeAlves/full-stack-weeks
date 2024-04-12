import Link from "next/link";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/shadcn/badge";

interface ICategoryItem {
  category: Category;
}

const CategoryItem = ({ category }: ICategoryItem) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    mouses: <MouseIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
  };

  return (
    <Link href={`/categorias/${category.slug}`} className="block w-full">
      <Badge
        variant={"outline"}
        className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {categoryIcon[category.slug as keyof typeof categoryIcon]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
