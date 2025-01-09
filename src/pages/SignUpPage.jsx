import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [stage, setStage] = useState('form') // 'form' | 'thanks' | 'beta'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStage('thanks')
    setTimeout(() => setStage('beta'), 2000) // Show beta confirmation after 2 seconds
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const renderStage = () => {
    switch (stage) {
      case 'form':
        return (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md w-full space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20"
          >
            <div>
              <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
                Join Findr
              </h2>
              <p className="text-center text-gray-400">
                Enter your details to get started
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
                  placeholder="Create a password"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Sign Up
              </motion.button>
            </form>
          </motion.div>
        )

      case 'thanks':
        return (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-md w-full space-y-6 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6"
            >
              <svg viewBox="0 0 24 24" className="w-full h-full fill-yellow-500">
                <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.83,9.83-6.5,6.5a1,1,0,0,1-1.42,0l-3.5-3.5a1,1,0,0,1,1.42-1.42L10.5,14.1l5.75-5.75a1,1,0,0,1,1.42,1.42Z"/>
              </svg>
            </motion.div>
            
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Thank You!
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              We'll be reading your kind words as we sip our coffees ☕️
            </p>
          </motion.div>
        )

      case 'beta':
        return (
          <motion.div
            key="beta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full space-y-6 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-24 h-24 mx-auto mb-6"
            >
              {/* Beta Badge */}
              <div className="absolute inset-0 bg-yellow-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute inset-2 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-yellow-500 font-bold text-xl">BETA</span>
              </div>
            </motion.div>

            <h2 className="text-3xl font-bold gradient-text mb-4">
              Welcome to the Future!
            </h2>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                You're now on the exclusive beta list for
              </p>
              <p className="text-2xl font-bold gradient-text">
                findrAI
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 mt-4"
              >
                <p className="mb-2">Position secured! 🎉</p>
                <p className="text-sm">We'll notify you when the beta launches.</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-yellow-500/20 mt-6"
            >
              <p className="text-yellow-500 font-medium">
                #{Math.floor(1000 + Math.random() * 9000)} in line
              </p>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <AnimatePresence mode="wait">
        {renderStage()}
      </AnimatePresence>
    </div>
  )
}
