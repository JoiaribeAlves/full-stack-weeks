import type { Metadata } from "next";

import { ShapesIcon } from "lucide-react";

import { prismaClient } from "@/lib/prisma";
import CatalogList from "./components/CatalogList";
import TitleBadge from "@/components/ui/TitleBadge";

export const metadata: Metadata = {
  title: "Catálogo FSW Store",
};

const Page = async () => {
  const categories = await prismaClient.category.findMany();

  return (
    <>
      <TitleBadge icon={<ShapesIcon size={16} />} label="Catálogo" />

      <CatalogList categories={categories} />
    </>
  );
};

export default Page;
