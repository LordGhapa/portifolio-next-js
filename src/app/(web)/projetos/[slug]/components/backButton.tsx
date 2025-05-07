"use client"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()
  return (
    <motion.button
        onClick={() => router.back()}
        className="fixed z-50 top-24 left-4 md:left-8  p-2 rounded-full bg-slate-800  hover:bg-slate-700 text-white transition-colors border border-slate-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft size={20} />
      </motion.button>
  )
}
