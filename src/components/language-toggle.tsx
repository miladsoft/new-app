import { Button } from "./ui/button";
import { useLanguage } from "../contexts/language-context";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className={className}
      title={language === "en" ? "Switch to Arabic" : "Switch to English"}
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      data-lang-toggle
    >
      <div className="flex items-center">
        <Languages className="h-[18px] w-[18px]" />
        <span className="sr-only">
          {language === "en" ? "Switch to Arabic" : "Switch to English"}
        </span>
      </div>
    </Button>
  );
}
