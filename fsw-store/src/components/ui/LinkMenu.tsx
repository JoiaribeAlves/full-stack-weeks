import { ReactNode } from "react";
import Link from "next/link";

import { SheetClose } from "./shadcn/sheet";

interface ILinkMenu {
  href: string;
  children: ReactNode;
}

const LinkMenu = ({ href, children }: ILinkMenu) => {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className="flex items-center gap-1 p-3 transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {children}
      </Link>
    </SheetClose>
  );
};

export default LinkMenu;
