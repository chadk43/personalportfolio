"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x:-100 }}
      animate={{ opacity: 1,  x: 0 }}
      transition={{ type: "spring", ease: "linear", duration: 3, stiffness: 80}}
    >
      {children}
    </motion.div>
  );
}
