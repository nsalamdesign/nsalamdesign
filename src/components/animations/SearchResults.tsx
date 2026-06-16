"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SearchResults({
  children,
  searchKey,
}: {
  children: React.ReactNode;
  searchKey: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={searchKey}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}