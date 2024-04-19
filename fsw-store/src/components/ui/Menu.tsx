"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  PercentIcon,
  UserIcon,
} from "lucide-react";

import LinkMenu from "./LinkMenu";
import { Avatar, AvatarFallback, AvatarImage } from "./shadcn/avatar";
import { Separator } from "./shadcn/separator";
import { Button } from "./shadcn/button";

const Menu = () => {
  const { data, status } = useSession();

  const handleLoginClick = async () => {
    await signIn("google");
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-3 py-4">
        {status === "authenticated" && data.user ? (
          <>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {data.user.image && <AvatarImage src={data.user.image} />}
                </Avatar>
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-semibold">
                  Olá, {data.user.name?.split(" ")[0]}!
                </p>
                <p className="text-xs opacity-75">Boas compras</p>
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                className="flex items-center gap-1 p-2"
                onClick={handleSignOutClick}
              >
                <LogOutIcon size={16} />
                Sair
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <UserIcon size={18} />
              </div>

              <div className="flex flex-col">
                <p className="text-sm font-semibold">Olá, visitante!</p>
                <p className="text-xs opacity-75">Boas compras</p>
              </div>
            </div>

            <div>
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-1 bg-secondary px-2 text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                onClick={handleLoginClick}
              >
                <LogInIcon size={16} />
                Entrar
              </Button>
            </div>
          </>
        )}
      </div>

      <Separator />

      <nav className="flex flex-1 flex-col">
        <LinkMenu href="/">
          <HomeIcon size={16} /> Início
        </LinkMenu>

        <Separator />

        <LinkMenu href="/ofertas">
          <PercentIcon size={16} /> Ofertas
        </LinkMenu>

        <Separator />

        <LinkMenu href="/categorias">
          <ListOrderedIcon size={16} /> Categorias
        </LinkMenu>

        <Separator />
      </nav>
    </div>
  );
};

export default Menu;
