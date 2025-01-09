import React from 'react'
import { motion } from 'framer-motion'
import { FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-yellow-500/20 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h3 className="text-xl font-semibold gradient-text">Contact Us</h3>
          
          <div className="flex justify-center items-center space-x-8">
            <motion.a
              href="https://x.com/sadlinnyxo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="text-2xl group-hover:text-yellow-500 transition-colors" />
              <span className="font-medium">@sadlinnyxo</span>
            </motion.a>

            <motion.a
              href="mailto:findr@world.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-500 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-2xl group-hover:text-yellow-500 transition-colors" />
              <span className="font-medium">findr@world.com</span>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
