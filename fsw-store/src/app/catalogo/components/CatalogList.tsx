import { Category } from "@prisma/client";

import CatalogListItem from "./CatalogListItem";

interface ICatalogList {
  categories: Category[];
}

const CatalogList = ({ categories }: ICatalogList) => {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {categories.map((category) => (
        <CatalogListItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default CatalogList;
