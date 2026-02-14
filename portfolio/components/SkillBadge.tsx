'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: string
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full border border-border hover:bg-accent/80 transition-colors duration-200"
    >
      {skill}
    </motion.span>
  )
}
