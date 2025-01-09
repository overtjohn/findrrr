import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collective of passionate developers and blockchain experts pushing the boundaries of Web3 innovation
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-yellow-500">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded by a group of seasoned developers with over a decade of combined experience in Web3 and blockchain technology, Findr emerged from a shared vision to revolutionize the intersection of AI and cryptocurrency.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team brings together expertise from leading blockchain projects, Silicon Valley tech companies, and decentralized finance platforms. With backgrounds spanning smart contract development, AI integration, and full-stack engineering, we've contributed to numerous successful Web3 projects.
            </p>
          </div>

          {/* Expertise Section */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-yellow-500">Our Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Web3 Development</h3>
                <p className="text-gray-400">Smart contracts, DeFi protocols, and blockchain integration</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">AI Integration</h3>
                <p className="text-gray-400">Machine learning models and AI-powered solutions</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Full-Stack Development</h3>
                <p className="text-gray-400">Modern web applications and scalable architectures</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Blockchain Security</h3>
                <p className="text-gray-400">Audit-grade security practices and implementations</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-yellow-500">Get in Touch</h2>
            <p className="text-gray-300">
              Have questions or want to learn more about Findr?
            </p>
            <a 
              href="mailto:findr@world.com"
              className="inline-flex items-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope />
              <span>findr@world.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
