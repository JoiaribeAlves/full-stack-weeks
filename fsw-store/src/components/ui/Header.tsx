"use client";

import Link from "next/link";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./shadcn/button";
import { Card } from "./shadcn/card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./shadcn/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";
import { Separator } from "./shadcn/separator";

const Header = () => {
  const { data, status } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-4 lg:p-7">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"outline"}>
            <MenuIcon size={16} />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="pb-2 text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && data.user && (
            <div className="flex items-center gap-2 py-3">
              <Avatar>
                <AvatarFallback>
                  {data.user.name?.[0].toUpperCase()}
                </AvatarFallback>

                {data.user.image && <AvatarImage src={data.user.image} />}
              </Avatar>

              <div className="flex flex-col">
                <p className="text-sm font-semibold">
                  Olá, {data.user.name?.split(" ")[0]}
                </p>
                <p className="text-xs opacity-75">Boas compras</p>
              </div>
            </div>
          )}

          <Separator />

          <div className="flex flex-col gap-2 pt-3">
            <SheetClose asChild>
              <Link href={"/"}>
                <Button
                  variant={"outline"}
                  className="flex w-full items-center justify-start gap-1"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            {status === "unauthenticated" && (
              <Button
                variant={"outline"}
                className="flex items-center justify-start gap-1"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                variant={"outline"}
                className="flex items-center justify-start gap-1"
                onClick={handleSignOutClick}
              >
                <LogOutIcon size={16} />
                Fazer logout
              </Button>
            )}

            <SheetClose asChild>
              <Link href={"/ofertas"}>
                <Button
                  variant={"outline"}
                  className="flex w-full items-center justify-start gap-1"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/catalogo"}>
                <Button
                  variant={"outline"}
                  className="flex w-full items-center justify-start gap-1"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href={"/"}>
        <h1 className="text-lg font-semibold lg:text-xl">
          <span className="text-primary">FSW</span> Store
        </h1>
      </Link>

      <Button size={"icon"} variant={"outline"}>
        <ShoppingCartIcon size={16} />
      </Button>
    </Card>
  );
};

export default Header;
