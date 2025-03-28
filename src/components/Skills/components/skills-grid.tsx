"use client";

import { motion } from "framer-motion";
import SkillItem from "./skill-item";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiStyledcomponents,
  SiTailwindcss,
  SiGit,
  SiSanity,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500" size={80} />, // Ícone com cor original
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-500" size={80} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" size={80} />,
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-400" size={80} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" size={80} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={80} />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-pink-500" size={80} />,
  },
  {
    name: "Sanity.io",
    icon: <SiSanity className="text-orange-500" size={80} />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400" size={80} />,
  },
  {
    name: "Git",
    icon: <SiGit className="text-orange-600" size={80} />,
  },
];

export default function SkillsGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div key={skill.name} variants={item}>
          <SkillItem icon={skill.icon} name={skill.name} />
        </motion.div>
      ))}
    </motion.div>
  );
}
