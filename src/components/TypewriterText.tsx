import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TypewriterText = ({ text, delay = 30, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Characters to use for the scramble effect
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    if (currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        // Create scrambled text
        let scrambled = "";
        
        for (let i = 0; i < text.length; i++) {
          if (i < currentIndex) {
            // Show the actual character
            scrambled += text[i];
          } else if (i < currentIndex + 10 && text[i] !== ' ') {
            // Show random characters for the next few positions (scrambling effect)
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          } else {
            // Keep spaces as spaces, hide other characters
            scrambled += text[i] === ' ' ? ' ' : '';
          }
        }
        
        setDisplayText(scrambled);
        setCurrentIndex(currentIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  // Reset animation when text changes
  useEffect(() => {
    setCurrentIndex(0);
    setDisplayText("");
  }, [text]);

  return (
    <div className={className}>
      <span className="font-mono">
        {displayText}
      </span>
    </div>
  );
};