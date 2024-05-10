"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import Links from "./Links";

import { AnimatePresence } from "framer-motion";

export default function MobileLinks() {
  const [isActive, setIsActive] = useState(false);

  const handleMenu = () => {
    setIsActive((s) => !s);
  };
  return (
    <>
      <div
        className={`fixed right-0 top-0 z-20 mx-5 mt-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-2 border-[#4a2ba8] bg-white md:hidden`}
        onClick={handleMenu}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""} `}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Links func={handleMenu} />}
      </AnimatePresence>
    </>
  );
}
