
import { useLanguage } from "@/context/LanguageContext";

const technologies = [
  "HTML5/CSS3",
  "JavaScript/TypeScript",
  "React.js",
  "Tailwind CSS",
  "Bootstrap",
  "Git/GitHub",
  "Responsive Design",
  "Web Security",
  "Performance Optimization",
  "UI/UX Design",
];

export const Portfolio = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12">
          {t.portfolio.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-foreground font-inter leading-relaxed text-lg">
              {t.portfolio.aboutMe}
            </p>
            
            <p className="text-foreground font-inter leading-relaxed text-lg">
              {t.portfolio.journey}
            </p>
            
            <p className="text-foreground font-inter leading-relaxed text-lg">
              {t.portfolio.commitment}
            </p>
            
            <p className="text-foreground font-inter leading-relaxed text-lg">
              {t.portfolio.learning}
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                {t.portfolio.techStack}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card rounded-lg border border-border text-sm font-inter text-foreground hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};