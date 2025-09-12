import { useLanguage } from "@/context/LanguageContext";

export const WorkExperience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    t.experience.experiences.freelance,
    t.experience.experiences.university,
    t.experience.experiences.personal
  ];
  return (
    <section id="experience" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12">
          {t.experience.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {experiences.map((exp) => (
            <button
              key={exp.company}
              className="p-4 text-left border border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <h3 className="font-poppins font-semibold text-foreground">
                {exp.company}
              </h3>
            </button>
          ))}
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="relative pl-8 pb-8 border-l-2 border-border hover:border-accent transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full" />
              
              <div className="space-y-2">
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {exp.position} @ {exp.company}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  {exp.type} | {exp.duration}
                </p>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};