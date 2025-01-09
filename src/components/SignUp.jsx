import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your signup logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20"
      >
        <div>
          <h2 className="text-3xl font-bold text-center mb-2 gradient-text">
            Join Findr
          </h2>
          <p className="text-center text-gray-400 text-sm">
            Enter your details to get started
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black/50 border border-yellow-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500/40 text-white"
              placeholder="Confirm your password"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black rounded-lg font-semibold tracking-tight hover:bg-yellow-400 transition-colors"
          >
            Create Account
          </motion.button>
        </form>
        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-yellow-500 hover:text-yellow-400">
            Sign in
          </a>
        </p>
      </motion.div>
    </div>
  )
}
