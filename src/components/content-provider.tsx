"use client";

import { Navigation } from "./navigation";
import { ModeToggle } from "./theme-toggler";
import { motion } from "motion/react";

export function ContentProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <motion.div
      className="bg-white dark:bg-[#232323] !opacity-95 p-6 rounded-lg shadow-md dark:border dark:border-gray-950 w-[95vw] sm:w-[80vw] h-[95vh] mx-auto sm:h-[80vh]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-between self-baseline">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <Navigation />
        <ModeToggle />
      </div>
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}
