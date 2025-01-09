import React from 'react'
import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="mx-auto"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ffed4a" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />
      
      {/* Inner geometric pattern */}
      <path
        d="M60 20 L90 60 L60 100 L30 60 Z"
        fill="none"
        stroke="url(#logoGradient)"
        strokeWidth="2"
      />
      
      {/* Connection points */}
      <circle cx="60" cy="20" r="4" fill="url(#logoGradient)" />
      <circle cx="90" cy="60" r="4" fill="url(#logoGradient)" />
      <circle cx="60" cy="100" r="4" fill="url(#logoGradient)" />
      <circle cx="30" cy="60" r="4" fill="url(#logoGradient)" />
      
      {/* Center point with pulse animation */}
      <circle
        cx="60"
        cy="60"
        r="8"
        fill="url(#logoGradient)"
      >
        <animate
          attributeName="r"
          values="8;10;8"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.8;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </motion.svg>
  )
}
