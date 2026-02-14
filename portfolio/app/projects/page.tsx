'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Filter } from 'lucide-react'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard'
import projectsData from '../../data/projects.json'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(project =>
        selectedFilter === 'Web Development' && project.techStack.some(tech => ['React', 'Next.js', 'Node.js', 'Express', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Flask', 'FastAPI', 'JavaScript (ES6+)', 'CSS3', 'HTML5', 'Google Sheet'].includes(tech)) ||
        selectedFilter === 'Java Projects' && project.techStack.some(tech => ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Thymeleaf', 'JSP', 'Servlets', 'Swing'].includes(tech)) ||
        selectedFilter === 'Python Projects' && project.techStack.some(tech => ['Python'].includes(tech)) ||
        selectedFilter === 'AI & Machine Learning' && project.techStack.some(tech => ['Scikit-learn', 'TensorFlow', 'PyTorch', 'NLTK', 'Transformers'].includes(tech)) ||
        selectedFilter === 'Data Science' && project.techStack.some(tech => ['Python', 'Pandas', 'NumPy', 'BeautifulSoup', 'Requests', 'Spotify API'].includes(tech)) ||
        selectedFilter === 'Full Stack' && project.techStack.some(tech => ['React', 'Node.js', 'Express', 'MongoDB', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL'].includes(tech)) ||
        selectedFilter === 'Frontend (React / Next.js)' && project.techStack.some(tech => ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'].includes(tech)) ||
        selectedFilter === 'Backend & APIs' && project.techStack.some(tech => ['Node.js', 'Express', 'Java', 'Spring Boot', 'Flask', 'FastAPI', 'MongoDB', 'MySQL', 'PostgreSQL'].includes(tech)) ||
        selectedFilter === 'Computer Vision' && project.techStack.some(tech => ['OpenCV', 'Python'].includes(tech)) ||
        selectedFilter === 'NLP (Natural Language Processing)' && project.techStack.some(tech => ['NLTK', 'Transformers', 'Python'].includes(tech)) ||
        selectedFilter === 'Utilities & Tools' && project.techStack.some(tech => ['Python', 'Java', 'Swing', 'Weather API', 'Stripe API'].includes(tech))
      )

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* GitHub-style Header with gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Code className="w-8 h-8 text-orange-500 mr-3" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              My Projects
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, machine learning, and full-stack development through innovative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Filter Section */}
          <motion.section
            variants={itemVariants}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground mr-2" />
              {[
                'All',
                'Web Development',
                'Java Projects',
                'Python Projects',
                'AI & Machine Learning',
                'Data Science',
                'Full Stack',
                'Frontend (React / Next.js)',
                'Backend & APIs',
                'Computer Vision',
                'NLP (Natural Language Processing)',
                'Utilities & Tools'
              ].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    selectedFilter === filter
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Projects Grid */}
          <motion.section
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Github className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.techStack[0] || 'Project'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground text-sm rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 border border-border text-sm rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Interested in Collaboration?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects.
              Let's connect and explore how we can create innovative solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
            >
              Get In Touch
            </motion.a>
          </motion.section>

          {/* GitHub-style footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="text-center pt-8"
          >
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
