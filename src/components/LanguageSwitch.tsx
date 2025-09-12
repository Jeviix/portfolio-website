import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative"
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5" />
      <span className="absolute -bottom-1 -right-1 text-[10px] font-bold uppercase bg-accent text-accent-foreground rounded px-1">
        {language}
      </span>
    </Button>
  );
};