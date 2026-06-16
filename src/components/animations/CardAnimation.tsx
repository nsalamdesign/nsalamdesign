"use client";

import { motion } from "framer-motion";

export default function CardAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}