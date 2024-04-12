import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

const Categories = async () => {
  const categies = await prismaClient.category.findMany();

  return (
    <div className="grid grid-cols-2 place-items-center gap-x-3 gap-y-3 lg:grid-cols-3 lg:gap-x-4">
      {categies.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
