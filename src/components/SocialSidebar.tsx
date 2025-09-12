import { Github } from "lucide-react";

export const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <>
      {/* Left Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20} />
          </a>
        ))}
        <div className="w-px h-16 bg-border mx-auto mt-4" />
      </div>

      {/* Right Email */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        <a
          href="mailto:alieddardoury@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-all duration-300 writing-mode-vertical text-sm font-medium"
          style={{ writingMode: 'vertical-rl' }}
        >
          alieddardoury@gmail.com
        </a>
        <div className="w-px h-16 bg-border mx-auto" />
      </div>
    </>
  );
};