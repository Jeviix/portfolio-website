import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo Text */}
          <a href="#home" className="group flex items-center">
            <span className="text-xl font-bold text-foreground font-inter hover:text-accent transition-colors">
              Ali Eddardoury
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {t.nav.about}
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {t.nav.experience}
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {t.nav.projects}
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                {t.nav.contact}
              </a>
            </div>
            <div className="w-px h-6 bg-border/50" />
            <LanguageSwitch />
            <ThemeSwitch />
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-4 md:hidden">
            <LanguageSwitch />
            <ThemeSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 hover:bg-accent/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-6 space-y-4 shadow-xl">
            <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              {t.nav.about}
            </a>
            <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              {t.nav.experience}
            </a>
            <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              {t.nav.projects}
            </a>
            <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2">
              {t.nav.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};