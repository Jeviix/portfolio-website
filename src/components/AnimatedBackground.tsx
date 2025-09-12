import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid dots pattern */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark 
            ? 'opacity-40' 
            : 'opacity-30'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${
            isDark 
              ? 'hsl(var(--accent))' 
              : 'hsl(0 0% 0%)'
          } 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
        }}
      />
      
      {/* Animated overlay dots */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 animate-pulse ${
          isDark 
            ? 'opacity-20' 
            : 'opacity-15'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${
            isDark 
              ? 'hsl(var(--accent))' 
              : 'hsl(0 0% 0%)'
          } 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '30px 30px',
          animationDuration: '4s',
        }}
      />
      
      {/* Moving gradient overlay */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark
            ? 'bg-gradient-to-br from-transparent via-accent/5 to-transparent'
            : 'bg-gradient-to-br from-transparent via-primary/5 to-transparent'
        }`}
        style={{
          animation: 'drift 8s ease-in-out infinite alternate',
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drift {
            0% { transform: translateX(-10px) translateY(-10px); }
            100% { transform: translateX(10px) translateY(10px); }
          }
        `
      }} />
    </div>
  );
};