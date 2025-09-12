import { Button } from "@/components/ui/button";
import { TypewriterText } from "@/components/TypewriterText";
import { LanguageLoop } from "@/components/LanguageLoop";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-12 pt-20">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <LanguageLoop className="text-4xl md:text-6xl font-bold text-foreground font-inter" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground font-inter">
              {t.hero.name},
            </h1>
            <TypewriterText 
              text={t.hero.title}
              className="text-3xl md:text-5xl font-bold text-accent font-inter"
              delay={50}
            />
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mt-8 font-inter leading-relaxed">
            {t.hero.description}
          </p>
          
          <Button 
            onClick={scrollToContact}
            className="mt-8 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-3 text-base font-medium rounded-md"
            variant="outline"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};