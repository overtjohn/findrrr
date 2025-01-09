import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center hero-gradient">
      <div className="text-center max-w-4xl px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Welcome to <span className="gradient-text">Findr</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 font-light tracking-wide"
        >
          The next generation social phenomenon
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.a
            href="https://dexscreener.com/solana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors tracking-tight flex items-center"
          >
            <div className="w-6 h-6 mr-2 overflow-hidden rounded-full">
              <img 
                src="https://dexscreener.com/img/dexscreener.png" 
                alt="DEXScreener" 
                className="w-full h-full object-cover"
              />
            </div>
            DEXScreener
          </motion.a>
          <a
            href="https://github.com/findr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500/10 transition-colors flex items-center gap-2 tracking-tight"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href="https://x.com/sadlinnyxo"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500/10 transition-colors flex items-center gap-2 tracking-tight"
          >
            <FaTwitter className="text-xl" />
            Twitter
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <Logo />
      </motion.div>
      <Link to="/personality-test">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 px-12 py-4 rounded-full font-bold text-xl tracking-tight border border-yellow-500/50 transition-all"
        >
          START
        </motion.button>
      </Link>
    </div>
  )
}
