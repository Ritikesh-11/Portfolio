'use client'

import { motion } from 'framer-motion'
import { Award, Trophy, Medal, Star, Cloud, Database, Code, BookOpen, ExternalLink, CheckCircle, Calendar, MapPin, ChevronDown, ChevronRight, Filter, Github, Eye, X, Zap } from 'lucide-react'
import { useState } from 'react'



const allCertifications = {
  "Cloud & AI": [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "2025",
      description: "Certified in Oracle Cloud Infrastructure AI Foundations, demonstrating knowledge of AI concepts and OCI services.",
      link: "https://drive.google.com/file/d/1UAhrcOmdyA436-HQ8lQVr3YJB3PbR__D/view?usp=sharing",
      status: "verified"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "2024",
      description: "Certified in Salesforce AI fundamentals, demonstrating knowledge of AI concepts and Salesforce AI tools.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7276164269585428480/",
      status: "verified"
    },
    {
      title: "Salesforce Certified AI Specialist",
      issuer: "Salesforce",
      date: "2024",
      description: "Certified as a Salesforce AI Specialist, demonstrating advanced expertise in Salesforce AI solutions and implementation.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7273688816673046528/",
      status: "verified"
    }
  ],
  "Data Science & Analytics": [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      date: "2025",
      description: "Certified in Oracle Cloud Infrastructure Data Science, demonstrating expertise in data science tools and OCI services.",
      link: "https://drive.google.com/file/d/1eaJ93F_OrOhei1pJoVYXySLIb5AyW_7q/view?usp=sharing",
      status: "verified"
    }
  ],
  "Development & Programming": [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
      issuer: "Oracle",
      date: "2025",
      description: "Certified in Oracle Cloud Infrastructure development, demonstrating expertise in OCI development tools and practices.",
      link: "https://drive.google.com/file/d/1B3TlxsyNE5sYM1uJmRoMu3SRqMqgdMSj/view?usp=sharing",
      status: "verified"
    }
  ]
}

const linkedProjects = [
  {
    title: "E-Commerce Platform",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "Full-stack e-commerce solution with payment integration",
    link: "/projects/ecommerce",
    stars: 42,
    language: "JavaScript"
  },
  {
    title: "Cloud-Based Task Manager",
    tech: ["Next.js", "AWS", "DynamoDB", "Lambda"],
    description: "Serverless task management app deployed on AWS",
    link: "/projects/taskmanager",
    stars: 28,
    language: "TypeScript"
  },
  {
    title: "Data Visualization Dashboard",
    tech: ["React", "D3.js", "Python", "Flask"],
    description: "Interactive dashboard for data analysis and visualization",
    link: "/projects/dashboard",
    stars: 35,
    language: "Python"
  }
]

const currentlyLearning = [
  { name: "Salesforce Developer Certification", progress: 50 },
  { name: "Google Cloud Data Engineer", progress: 25 },
  { name: "Advanced React + Next.js", progress: 100 },
  { name: "Machine Learning with TensorFlow", progress: 30 },
  { name: "DevOps & CI/CD Pipelines", progress: 15 }
]



export default function Achievements() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})

  const [selectedFilterCert, setSelectedFilterCert] = useState('All')

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }



  // Flatten certifications for filtering
  const allCertsFlat = Object.entries(allCertifications).flatMap(([category, certs]) =>
    certs.map(cert => ({ ...cert, category }))
  )

  const filteredCertifications = selectedFilterCert === 'All'
    ? allCertsFlat
    : allCertsFlat.filter(cert =>
        selectedFilterCert === 'Cloud' && cert.category === 'Cloud & AI' ||
        selectedFilterCert === 'Data Science' && cert.category === 'Data Science & Analytics' ||
        selectedFilterCert === 'Development' && cert.category === 'Development & Programming'
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
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
              Certifications
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional certifications.
          </p>
        </motion.div>



        {/* All Certifications with filter and card view */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {['All', 'Cloud', 'Data Science', 'Development'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilterCert(filter)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    selectedFilterCert === filter
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground truncate" title={cert.title}>
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </div>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>



        {/* GitHub-style footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-center pt-8"
        >
        </motion.div>
      </div>
    </div>
  )
}
