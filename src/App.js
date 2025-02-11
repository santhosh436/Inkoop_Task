import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.div
            key="welcome"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.5 }}
            className="h-screen"
          >
            <WelcomePage onComplete={() => setShowWelcome(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
            transition={{ duration: 0.5 }}
            className="overflow-auto h-screen"
          >
            <MainPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
