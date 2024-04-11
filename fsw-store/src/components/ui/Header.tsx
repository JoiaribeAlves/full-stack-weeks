import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./shadcn/button";
import { Card } from "./shadcn/card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./shadcn/sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-4 lg:p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon size={16} />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-2">
            <Button
              variant={"outline"}
              className="flex items-center justify-start gap-1"
            >
              <HomeIcon size={16} />
              Início
            </Button>

            <Button
              variant={"outline"}
              className="flex items-center justify-start gap-1"
            >
              <LogInIcon size={16} />
              Fazer login
            </Button>

            <Button
              variant={"outline"}
              className="flex items-center justify-start gap-1"
            >
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button
              variant={"outline"}
              className="flex items-center justify-start gap-1"
            >
              <ListOrderedIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

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
