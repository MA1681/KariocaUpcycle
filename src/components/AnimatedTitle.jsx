import React, { useEffect, useState } from "react";
import { GiSewingNeedle } from "react-icons/gi";
import "../styles/needle.css"; // Make sure this path is correct

const AnimatedTitle = () => {
  const text = "Karioca Upcycle";
  const [visibleLetters, setVisibleLetters] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 250); // typing speed (stitch speed)
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="relative flex items-center text-white text-4xl font-signature space-x-2">
      <span>{visibleLetters}</span>
      {currentIndex < text.length && (
        <GiSewingNeedle className="text-white text-3xl animate-needle" />
      )}
    </div>
  );
};

export default AnimatedTitle;
