import React from 'react';
import { motion } from 'framer-motion';

const Icon = () => {
  return (
    <div className="flex items-center justify-center h-24 w-24">
      {/* "I" Letter */}
      <motion.div 
        className="h-24 w-5 bg-black rounded-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 100 }}
      ></motion.div>

      {/* Space between letters */}
      <div className="w-2"></div>

      {/* "K" Letter */}
      <div className="relative h-16 w-6">
        <motion.div 
          className="absolute top-[-16px] left-0 h-24 w-5 bg-black rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring', stiffness: 100 }}
        ></motion.div>

        <motion.div 
          className="absolute left-[36.5px] bottom-[-31px] h-[121px] w-5 bg-black rotate-45 rounded-lg"
          initial={{ opacity: 0, scale: 1.2, rotate: 30 }}
          animate={{ opacity: 1, scale: 1, rotate: 45 }}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 100 }}
        ></motion.div>

        <motion.div 
          className="absolute bottom-[-20px] left-[60px] h-[45px] w-5 bg-black -rotate-45 rounded-sm"
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -45 }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 100 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Icon;
