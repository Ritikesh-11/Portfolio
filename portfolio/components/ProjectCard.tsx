'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    techStack: string[]
    githubUrl: string
    demoUrl: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
        <div className="flex space-x-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors duration-200"
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      <p className="text-muted-foreground mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
