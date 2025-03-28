"use client";

import { motion } from "framer-motion";

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
}

export default function SkillItem({ icon, name }: SkillItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-lg p-2">
        {icon}
      </div>
      <span className="font-sans text-base font-medium text-white">{name}</span>
    </motion.div>
  );
}
