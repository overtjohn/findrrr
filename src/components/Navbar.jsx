import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import SmallLogo from './SmallLogo'
import WalletWidget from './WalletWidget'

export default function Navbar() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavigate = (path) => {
    navigate(path)
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <SmallLogo />
              <span className="text-2xl font-extrabold gradient-text tracking-tighter">FINDR</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavLink to="/about">About</NavLink>
              <NavLink to="/vision">Our Vision</NavLink>
              <NavLink to="/ai">AI Features</NavLink>
              <WalletWidget />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-4 md:hidden">
              <WalletWidget />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-300 hover:text-yellow-500 transition-colors"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/95 backdrop-blur-lg pt-16">
              <div className="flex flex-col items-center space-y-6 p-8">
                <MobileNavLink onClick={() => handleNavigate('/about')}>
                  About
                </MobileNavLink>
                <MobileNavLink onClick={() => handleNavigate('/vision')}>
                  Our Vision
                </MobileNavLink>
                <MobileNavLink onClick={() => handleNavigate('/ai')}>
                  AI Features
                </MobileNavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-medium tracking-tight"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ onClick, children }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-medium tracking-tight text-xl w-full max-w-xs text-center py-3"
    >
      {children}
    </motion.button>
  )
}
