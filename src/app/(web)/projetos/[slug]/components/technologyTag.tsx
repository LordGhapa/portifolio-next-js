"use client"

import type React from "react"

import { motion } from "framer-motion"

export default function TechnologyTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="px-3 py-1 rounded-full bg-white/10 text-xs md:text-sm text-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  )
}

