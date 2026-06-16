"use client";

import { motion } from "framer-motion";

export default function CardReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}