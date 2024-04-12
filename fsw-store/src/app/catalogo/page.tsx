import type { Metadata } from "next";

import { ShapesIcon } from "lucide-react";

import { prismaClient } from "@/lib/prisma";
import { Badge } from "@/components/ui/shadcn/badge";
import CatalogList from "./components/CatalogList";

export const metadata: Metadata = {
  title: "Catálogo FSW Store",
};

const Page = async () => {
  const categories = await prismaClient.category.findMany();

  return (
    <>
      <div>
        <Badge
          className="gap-1 border-2 border-primary px-3 py-[0.375rem] text-sm uppercase lg:text-base"
          variant={"outline"}
        >
          <ShapesIcon size={16} />
          Catálogo
        </Badge>
      </div>

      <CatalogList categories={categories} />
    </>
  );
};

export default Page;
