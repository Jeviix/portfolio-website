import { useEffect, useState } from "react";

const greetings = [
  { text: "Hey, I'm", lang: "en" },
  { text: "Salut, je suis", lang: "fr" },
  { text: "مرحباً، أنا", lang: "ar" },
  { text: "Hola, soy", lang: "es" },
];

export const LanguageLoop = ({ className = "" }: { className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 
      className={`${className} transition-all duration-300 ${
        isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
      }`}
      dir={greetings[currentIndex].lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {greetings[currentIndex].text}
    </h2>
  );
};