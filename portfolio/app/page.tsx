'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink, Github, Linkedin, Code, Database, Cloud, Award, Wrench, Cpu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import SkillBadge from '@/components/SkillBadge'
import skillsData from '@/data/skills.json'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* GitHub-style Header with gradient background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="h-24"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Hero Section */}
          <motion.section
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image
                src="/avatar.jpg"
                alt="Ritikesh Shankar Machhewar"
                width={160}
                height={160}
                className="w-full h-full rounded-full object-cover border-4 border-accent"
              />
            </div>

            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg"
              >
                Ritikesh Shankar Machhewar
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground drop-shadow-md"
              >
                AI & Data Science Enthusiast
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground max-w-2xl mx-auto drop-shadow-md"
              >
                Passionate about leveraging artificial intelligence and data science to solve complex problems
                and build innovative solutions.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Ritikesh Shankar Machhewar.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200 shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200 shadow-lg"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="flex items-center justify-center mb-8">
              <Database className="w-5 h-5 text-green-500 mr-2" />
              <h2 className="text-3xl font-bold text-foreground">Skills & Technologies</h2>
            </div>
            <p className="text-muted-foreground text-center">Technologies I work with</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((category, index) => (
                <motion.div
                  key={category.category}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mr-3">
                      {category.category === 'Programming Languages' && <Code className="w-5 h-5 text-muted-foreground" />}
                      {category.category === 'Machine Learning & AI' && <Cpu className="w-5 h-5 text-muted-foreground" />}
                      {category.category === 'Web Development' && <Github className="w-5 h-5 text-muted-foreground" />}
                      {category.category === 'Cloud & DevOps' && <Cloud className="w-5 h-5 text-muted-foreground" />}
                      {category.category === 'Databases' && <Database className="w-5 h-5 text-muted-foreground" />}
                      {category.category === 'Tools & Frameworks' && <Wrench className="w-5 h-5 text-muted-foreground" />}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {category.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always excited to work on challenging projects and collaborate with like-minded individuals.
              Let's connect and explore how we can create innovative solutions.
            </p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
                >
                  View My Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
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
