"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "./shadcn/button";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon size={16} />
        </Button>
      ) : (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun size={16} />
        </Button>
      )}
    </div>
  );
};

export default ToggleTheme;
