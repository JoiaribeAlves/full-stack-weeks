import Link from "next/link";
import Image from "next/image";
import { ListOrderedIcon } from "lucide-react";
import type { Metadata } from "next";

import { prismaClient } from "@/lib/prisma";
import TitleBadge from "@/components/ui/TitleBadge";

export const metadata: Metadata = {
  title: "Categorias FSW Store",
};

const Page = async () => {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="flex flex-col gap-6 px-2 pb-24 pt-6 lg:px-8 lg:pt-8">
      <TitleBadge icon={<ListOrderedIcon size={16} />} label="Categorias" />

      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {categories.map((category, index) => (
          <li key={index} className="transition-transform hover:scale-[1.02]">
            <Link
              href={`/categorias/${category.slug}`}
              className="flex flex-col"
            >
              <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-catalog-item-gradient lg:h-[250px]">
                <Image
                  src={category.imgUrl}
                  alt={category.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto max-h-[90%] w-auto max-w-[90%]"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="rounded-bl-lg rounded-br-lg bg-accent py-3 text-center text-sm font-medium">
                {category.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
