import { Navigation } from "@/components/Navigation";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { PixelBackground } from "@/components/PixelBackground";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background relative">
      <PixelBackground />
      <Navigation />
      <SocialSidebar />
      
      <main>
        <Hero />
        <Portfolio />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground font-inter text-sm">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;