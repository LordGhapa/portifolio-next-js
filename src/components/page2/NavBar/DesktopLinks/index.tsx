"use client";
import { dataMenu } from "@/data";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DesktopLinks() {
  const [selectedTab, setSelectedTab] = useState(dataMenu[0]);

  return (
    <>
      <div className="hidden justify-between gap-4  rounded-full border border-[#7042f861] bg-[#030014ad] px-5 py-2 md:flex">
        {dataMenu.map((el, index) => (
          <React.Fragment key={index}>
            <Link
              href={el.href}
              className="relative flex h-auto w-auto cursor-pointer flex-row items-center "
              onClick={() => {
                setSelectedTab(el);
              }}
            >
              <p className="text-base font-semibold tracking-wider text-white transition-all duration-100 hover:scale-105 hover:text-purple-300">
                {el.name}
              </p>

              {el === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
