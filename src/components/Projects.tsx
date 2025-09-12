import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import xDividendImg from "@/assets/projects/xdividend.jpg";
import interectImg from "@/assets/projects/interect.jpg";
import shareItImg from "@/assets/projects/shareit.jpg";
import pickDropImg from "@/assets/projects/pickdrop.jpg";
import learningGuideImg from "@/assets/projects/learningguide.jpg";

export const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t.projects.projectsList.ecommerce.title,
      description: t.projects.projectsList.ecommerce.description,
      image: xDividendImg,
      tags: ["React.js", "Tailwind CSS", "Responsive Design", "Web Security"],
      featured: true,
    },
    {
      title: t.projects.projectsList.business.title,
      description: t.projects.projectsList.business.description,
      image: interectImg,
      tags: ["HTML5/CSS3", "JavaScript", "SEO Optimized", "Performance"],
      featured: true,
    },
    {
      title: t.projects.projectsList.personal.title,
      description: t.projects.projectsList.personal.description,
      image: shareItImg,
      tags: ["React.js", "Tailwind CSS", "UI/UX Design", "Responsive"],
      featured: true,
    },
    {
      title: t.projects.projectsList.restaurant.title,
      description: t.projects.projectsList.restaurant.description,
      image: pickDropImg,
      tags: ["HTML5/CSS3", "JavaScript", "Bootstrap", "Mobile-First"],
      featured: true,
    },
    {
      title: t.projects.projectsList.security.title,
      description: t.projects.projectsList.security.description,
      image: learningGuideImg,
      tags: ["React.js", "TypeScript", "Web Security", "Data Visualization"],
      featured: true,
    },
  ];
  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
          {t.projects.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-sm font-medium rounded">
                    {t.projects.featured}
                  </span>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-inter rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};