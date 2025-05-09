"use client";

import { Navigation } from "@/components/navigation/navigation";
import { ModeToggle } from "@/components/theme-toggler";
import { Pivot as Hamburger } from "hamburger-react";
import { motion } from "motion/react";
import React from "react";

export function ContentProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
        <div className="hidden sm:flex justify-center items-center shadow-md dark:border-gray-600 rounded-lg py-2 px-8">
          <Navigation />
        </div>
        <div className="flex items-center justify-center -mt-2 sm:mt-0">
          <ModeToggle />
        </div>
        <div className="flex sm:hidden -mt-4 -mr-4">
          <Hamburger color="orange" onToggle={toggleMenu} />
        </div>
      </div>
      <div className="mt-4">
        {isOpen ? (
          <div className="flex sm:hidden justify-center items-center shadow-md dark:border-gray-600 rounded-lg p-2 mb-4">
            <Navigation />
          </div>
        ) : null}

        {children}
      </div>
    </motion.div>
  );
}
