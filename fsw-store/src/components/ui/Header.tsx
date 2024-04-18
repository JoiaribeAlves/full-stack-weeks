import Link from "next/link";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import Cart from "./Cart";
import Menu from "./Menu";
import ToggleTheme from "./ToggleTheme";
import { Button } from "./shadcn/button";
import { Card } from "./shadcn/card";
import { Sheet, SheetContent, SheetTrigger } from "./shadcn/sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between rounded-none border-l-0 border-r-0 border-t-0 p-4 lg:p-7">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon size={16} />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0">
          <Menu />
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <h1 className="text-lg font-bold lg:text-xl">
          <span className="bg-catalog-item-gradient bg-clip-text text-transparent">
            FSW
          </span>{" "}
          Store
        </h1>
      </Link>

      <div className="flex gap-2">
        <ToggleTheme />

        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <ShoppingCartIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <Cart />
          </SheetContent>
        </Sheet>
      </div>
    </Card>
  );
};

export default Header;
