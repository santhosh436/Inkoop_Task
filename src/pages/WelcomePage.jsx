import { useEffect } from "react";
import { motion } from "framer-motion";
import Icon from "../components/Icon";

const WelcomePage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, [onComplete]);

  const text = "Hi Inkoop";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-800">
      <Icon />
      <motion.h1
        className="text-3xl font-poppins font-bold text-white flex mt-8 ml-20 tracking-[8px]"
        initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="mr-4">
            {word.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.3,
                  delay: index * 0.5 + i * 0.1,
                  ease: "easeOut",
                }}
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
