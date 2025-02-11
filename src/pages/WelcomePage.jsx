import { useEffect } from "react";
import { motion } from "framer-motion";

const WelcomePage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = "Hi INKOOP";
  
  return (
    <div className="flex items-center justify-center h-screen bg-green-800">
      <motion.h1 className="text-5xl font-bold text-white flex">
        {text.split(" ").map((word, index) => (
          <span key={index} className="mr-2">
            {word.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 + i * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default WelcomePage;