"use client"

import { motion } from "framer-motion"


interface SkillItemProps {
  icon: React.ReactNode;
  name: string

}

export default function SkillItem({ icon, name }: SkillItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-20 h-20 flex items-center justify-center rounded-lg p-2 "
        
      >
       
  {icon}
      </div>
      <span className="text-white text-sm font-medium">{name}</span>
    </motion.div>
  )
}

