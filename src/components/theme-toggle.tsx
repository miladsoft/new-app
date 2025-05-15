import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative border-[#176c91]/20 hover:bg-[#176c91]/10"
    >
      {/* Sun icon with improved visibility */}
      <Sun 
        className={`h-[18px] w-[18px] absolute transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} 
      />
      {/* Moon icon with improved visibility */}
      <Moon 
        className={`h-[18px] w-[18px] absolute transition-all duration-300 ${
          resolvedTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`} 
      />
    </Button>
  );
}
