import React from 'react'

export default function SmallLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 120 120"
      className="mr-2"
    >
      <defs>
        <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#ffed4a" />
        </linearGradient>
      </defs>
      
      <circle
        cx="60"
        cy="60"
        r="55"
        fill="none"
        stroke="url(#navLogoGradient)"
        strokeWidth="6"
      />
      
      <path
        d="M60 20 L90 60 L60 100 L30 60 Z"
        fill="none"
        stroke="url(#navLogoGradient)"
        strokeWidth="6"
      />
      
      <circle cx="60" cy="20" r="8" fill="url(#navLogoGradient)" />
      <circle cx="90" cy="60" r="8" fill="url(#navLogoGradient)" />
      <circle cx="60" cy="100" r="8" fill="url(#navLogoGradient)" />
      <circle cx="30" cy="60" r="8" fill="url(#navLogoGradient)" />
      
      <circle
        cx="60"
        cy="60"
        r="12"
        fill="url(#navLogoGradient)"
      />
    </svg>
  )
}
