import { motion } from "framer-motion"
export default function ActionButton({
  href,
  icon,
  children,
  variant = "primary",
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  variant?: "primary" | "secondary"
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
        variant === "primary"
          ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white"
          : "bg-white/10 text-white hover:bg-white/20"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {icon}
      {children}
    </motion.a>
  )
}