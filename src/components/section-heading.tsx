"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <motion.h2
        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="text-gray-300 font-sans text-base md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

