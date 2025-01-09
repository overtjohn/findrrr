import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AIFeaturesPage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []
    let connections = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    const drawQuantumConnections = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update particle positions with quantum wave motion
      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY + Math.sin(particle.phase + time) * 0.5
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
        
        // Quantum probability cloud effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, 20
        )
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0.2)')
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
        
        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, 20, 0, Math.PI * 2)
        ctx.fill()
      })

      // Quantum entanglement connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 * (1 - distance/100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      time += 0.01
      animationFrameId = requestAnimationFrame(drawQuantumConnections)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    createParticles()
    drawQuantumConnections()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

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
              Quantum <span className="gradient-text">Social Matching</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Where quantum mechanics meets human connection
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 p-8">
            <div className="h-64 mb-8 relative">
              <canvas
                ref={canvasRef}
                className="w-full h-full rounded-lg"
                style={{ background: 'rgba(0,0,0,0.3)' }}
              />
              <div className="absolute top-2 left-2 text-xs text-gray-400">
                Live Quantum Superposition Visualization
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-yellow-500">Understanding Quantum Social Dynamics</h2>
              <p className="text-gray-300 leading-relaxed">
                Just as quantum particles exist in multiple states simultaneously through superposition, human social connections exist in various potential states before they materialize. Our revolutionary AI leverages this quantum principle to understand the complex web of human relationships and potential connections.
              </p>

              <div className="border-l-4 border-yellow-500 pl-4 my-8">
                <p className="text-xl text-yellow-500 font-medium italic">
                  "Like quantum entanglement, human connections can transcend traditional boundaries, creating profound and meaningful relationships across any distance."
                </p>
              </div>

              <h3 className="text-xl font-bold text-yellow-500">Superposition in Social Networks</h3>
              <p className="text-gray-300 leading-relaxed">
                Our AI analyzes social interactions as quantum states, where each person exists in a superposition of potential relationships. By mapping these quantum social states, we can identify compatible connections before they naturally emerge, much like predicting quantum particle behavior.
              </p>

              <h3 className="text-xl font-bold text-yellow-500">Quantum Pattern Recognition</h3>
              <p className="text-gray-300 leading-relaxed">
                Through advanced quantum algorithms, our system identifies patterns in social behavior that mirror quantum mechanical principles. This allows us to understand the probability of meaningful connections forming between individuals, just as quantum physics predicts particle interactions.
              </p>

              <div className="bg-yellow-500/10 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-bold text-yellow-500 mb-4">Key Features</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Quantum Social Mapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Superposition-based Compatibility Analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Entanglement Pattern Recognition
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    Quantum State Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
