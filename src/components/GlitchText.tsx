import { useEffect, useState } from "react";

export const GlitchText = () => {
  const fullText = "/Cybersecurity & Frontend Developer/";
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative">
      <p className="text-2xl md:text-3xl lg:text-4xl font-inter text-accent font-medium">
        {displayText}
        {currentIndex < fullText.length && (
          <span className="animate-pulse">|</span>
        )}
      </p>
    </div>
  );
};