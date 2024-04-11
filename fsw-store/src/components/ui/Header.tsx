import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./shadcn/button";
import { Card } from "./shadcn/card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-4 lg:p-[1.875rem]">
      <Button size={"icon"} variant={"outline"}>
        <MenuIcon size={16} />
      </Button>

      <h1 className="text-lg font-semibold lg:text-xl">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon size={16} />
      </Button>
    </Card>
  );
};

export default Header;
