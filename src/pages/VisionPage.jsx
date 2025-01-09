import React from 'react'
import { motion } from 'framer-motion'

export default function VisionPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Vision</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Reconnecting humanity in the digital age
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 p-8 space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                In an era where technology has paradoxically made us more connected yet more isolated than ever, we saw a need for something different. As we spend more time in digital spaces, our real human connections have begun to fade, creating a void in our collective experience.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                Findr was born from a simple observation: while Web3 has revolutionized how we think about ownership and value, it hasn't yet fulfilled its potential to transform how we connect with each other. We believe that blockchain technology, combined with AI, can do more than facilitate transactions – it can rebuild the bridges between people that modern life has slowly eroded.
              </p>

              <blockquote className="border-l-4 border-yellow-500 pl-4 my-8">
                <p className="text-xl text-yellow-500 font-medium italic">
                  "Technology should bring us closer, not push us apart. Web3 isn't just about digital assets – it's about digital belonging."
                </p>
              </blockquote>

              <p className="text-gray-300 leading-relaxed text-lg">
                Our platform is designed to create meaningful connections through shared experiences in the Web3 space. By leveraging AI to understand not just transactions but interactions, we're building a community where every member can find their place, their people, and their purpose.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                We envision a future where blockchain technology serves as a foundation for genuine human connection – where every interaction strengthens the bonds between us, and where technology enhances rather than replaces our fundamental need for community.
              </p>
            </div>

            <div className="pt-8 border-t border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Our Promise</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We're committed to building more than just another platform – we're creating a space where technology serves humanity, where digital interactions lead to real connections, and where no one needs to navigate the future alone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
