'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, FileText, Briefcase, Filter, TrendingUp, Clock, Target } from 'lucide-react'
import { useState } from 'react'
import experienceData from '../../data/experience.json'

export default function Experience() {
  const [selectedFilter, setSelectedFilter] = useState('All')

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

  const filteredExperience = selectedFilter === 'All'
    ? experienceData
    : experienceData.filter(exp =>
        selectedFilter === 'Internship' && exp.title.toLowerCase().includes('intern') ||
        selectedFilter === 'Full-time' && !exp.title.toLowerCase().includes('intern') ||
        selectedFilter === 'Freelance' && exp.company.toLowerCase().includes('freelance')
      )

  // Calculate summary stats
  const totalInternships = experienceData.filter(exp => exp.title.toLowerCase().includes('intern')).length
  const totalExperience = experienceData.reduce((total, exp) => {
    const duration = exp.duration
    if (duration.includes('Jan 2024 – Jun 2024')) return total + 0.5 // 6 months
    if (duration.includes('Apr 2023 – Jun 2023')) return total + 0.25 // 3 months
    if (duration.includes('Dec 2022 – Feb 2023')) return total + 0.25 // 3 months
    return total
  }, 0)

  const focusAreas = ['AI', 'ML', 'Data Science', 'Cloud', 'Python', 'SQL']

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
            <Briefcase className="w-8 h-8 text-green-500 mr-3" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Experience
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in AI, machine learning, and software development through various roles and projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Experience Stats Section */}
          <motion.section
            variants={itemVariants}
            className="bg-card border border-border rounded-lg p-4"
          >
            <div className="flex items-center justify-center space-x-8">
              <motion.div
                whileHover={{ opacity: 0.8 }}
                className="flex items-center space-x-2"
              >
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-sm text-foreground">{totalInternships} Internships</span>
              </motion.div>
              <motion.div
                whileHover={{ opacity: 0.8 }}
                className="flex items-center space-x-2"
              >
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono text-sm text-foreground">{totalExperience.toFixed(1)} Years Experience (Internships)</span>
              </motion.div>
            </div>
          </motion.section>

          {/* Filter Section */}
          <motion.section
            variants={itemVariants}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {['All', 'Internship', 'Full-time', 'Freelance'].map((filter) => (
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

          {/* Experience Timeline */}
          <motion.section
            variants={itemVariants}
            className="space-y-6"
          >
            {filteredExperience.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.05)'
                }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-card-foreground hover:text-accent transition-colors cursor-pointer">
                          {experience.title}
                        </h3>
                        <p className="text-base sm:text-lg text-foreground font-medium">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground ml-15">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="hidden sm:inline">{experience.duration.replace('Jan 2024 – Jun 2024', 'Jan – Jun 2024').replace('Apr 2023 – Jun 2023', 'Apr – Jun 2023').replace('Dec 2022 – Feb 2023', 'Dec 2022 – Feb 2023')}</span>
                        <span className="sm:hidden">{experience.duration.replace('Jan 2024 – Jun 2024', 'Jan-Jun 2024').replace('Apr 2023 – Jun 2023', 'Apr-Jun 2023').replace('Dec 2022 – Feb 2023', 'Dec-Feb 2023')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 ml-15 text-sm sm:text-base">
                  {experience.description}
                </p>

                <div className="mb-4 ml-15">
                  <h4 className="text-lg font-medium text-card-foreground mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        title={
                          tech === 'Python' ? 'High-level programming language for data science and ML' :
                          tech === 'SQL' ? 'Database query language for data manipulation' :
                          tech === 'Pandas' ? 'Data manipulation and analysis library' :
                          tech === 'NumPy' ? 'Numerical computing library' :
                          tech === 'Power BI' ? 'Data visualization and reporting platform' :
                          tech === 'Scikit-learn' ? 'Machine learning library for Python' :
                          tech === 'Matplotlib' ? 'Data visualization library' :
                          tech === 'AWS SageMaker' ? 'Managed machine learning service' :
                          tech === 'TensorFlow' ? 'Open-source machine learning framework' :
                          tech === 'AWS Lambda' ? 'Serverless computing service' :
                          tech === 'Amazon S3' ? 'Object storage service' :
                          tech
                        }
                        className={`px-3 py-1 text-sm rounded-full transition-colors hover:scale-105 border ${
                          tech === 'Python' ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20' :
                          tech === 'SQL' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                          tech === 'Pandas' ? 'bg-green-500/10 text-green-600 border-green-500/20' :
                          tech === 'NumPy' ? 'bg-purple-500/10 text-purple-600 border-purple-500/20' :
                          tech === 'Power BI' ? 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20' :
                          tech === 'Scikit-learn' ? 'bg-red-500/10 text-red-600 border-red-500/20' :
                          tech === 'Matplotlib' ? 'bg-pink-500/10 text-pink-600 border-pink-500/20' :
                          tech === 'AWS SageMaker' || tech === 'AWS Lambda' || tech === 'Amazon S3' ? 'bg-orange-500/10 text-orange-600 border-orange-500/20' :
                          tech === 'TensorFlow' ? 'bg-red-500/10 text-red-600 border-red-500/20' :
                          'bg-accent text-accent-foreground'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ml-15">
                  <h4 className="text-lg font-medium text-card-foreground mb-2 flex items-center gap-2">
                    <Award size={18} />
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                  {experience.certificateUrl && (
                    <div className="flex justify-end mt-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={experience.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
                      >
                        <FileText size={16} />
                        View Certificate
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* CTA Section */}
          <motion.section
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <h2 className="text-3xl font-bold text-foreground">
                Ready for New Challenges
              </h2>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excited to take on new challenges in AI and data science. Let's collaborate to turn ideas into impact.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/80 transition-colors duration-200"
            >
              Let's Connect
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
