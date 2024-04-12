import { CopyrightIcon } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center gap-1 bg-accent px-4 py-4 text-xs opacity-75 lg:px-7">
      <CopyrightIcon size={12} /> {year} <strong>FSW Store</strong> - Todos os
      direitos reservados
    </footer>
  );
};

export default Footer;
