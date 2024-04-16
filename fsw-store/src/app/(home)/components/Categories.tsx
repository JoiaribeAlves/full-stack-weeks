import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./CategoryItem";

const Categories = async () => {
  const categies = await prismaClient.category.findMany();

  return (
    <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {categies.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
