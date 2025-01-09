import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTwitter } from 'react-icons/fa'

const scenarios = [
  {
    id: 1,
    scenario: "You discover a hidden online community discussing revolutionary AI technology. What's your first move?",
    options: [
      {
        text: "Silently observe and analyze their discussions",
        category: "Virgin",
        nextScenario: 2
      },
      {
        text: "Research and fact-check their claims",
        category: "Crayon Eater",
        nextScenario: 2
      },
      {
        text: "Identify potential opportunities for growth",
        category: "Newsy Johnson",
        nextScenario: 2
      },
      {
        text: "Introduce yourself and establish presence",
        category: "Darwinist",
        nextScenario: 2
      }
    ]
  },
  {
    id: 2,
    scenario: "A controversial debate erupts about quantum consciousness. How do you engage?",
    options: [
      {
        text: "Analyze patterns in the discussion without participating",
        category: "Virgin",
        nextScenario: 3
      },
      {
        text: "Share unconventional perspectives",
        category: "Crayon Eater",
        nextScenario: 3
      },
      {
        text: "Share relevant news and research",
        category: "Newsy Johnson",
        nextScenario: 3
      },
      {
        text: "Challenge others to think beyond conventional wisdom",
        category: "Darwinist",
        nextScenario: 3
      }
    ]
  },
  {
    id: 3,
    scenario: "You notice a pattern in social behavior that others haven't spotted. What do you do?",
    options: [
      {
        text: "Document it privately in your digital journal",
        category: "Virgin",
        nextScenario: 4
      },
      {
        text: "Create a unique theory about it",
        category: "Crayon Eater",
        nextScenario: 4
      },
      {
        text: "Cross-reference it with current events",
        category: "Newsy Johnson",
        nextScenario: 4
      },
      {
        text: "Use it to predict future trends",
        category: "Darwinist",
        nextScenario: 4
      }
    ]
  },
  {
    id: 4,
    scenario: "A powerful AI tool becomes available that could revolutionize social connections. Your approach?",
    options: [
      {
        text: "Experiment with it in private, testing all features",
        category: "Virgin",
        nextScenario: 5
      },
      {
        text: "Use it in unexpected ways",
        category: "Crayon Eater",
        nextScenario: 5
      },
      {
        text: "Analyze its impact on society",
        category: "Newsy Johnson",
        nextScenario: 5
      },
      {
        text: "Leverage it for evolution",
        category: "Darwinist",
        nextScenario: 5
      }
    ]
  },
  {
    id: 5,
    scenario: "Your actions have created ripples in the digital sphere. How do you handle the attention?",
    options: [
      {
        text: "Maintain anonymity while continuing your work",
        category: "Virgin",
        nextScenario: 6
      },
      {
        text: "Share your unique perspective",
        category: "Crayon Eater",
        nextScenario: 6
      },
      {
        text: "Publish detailed analysis",
        category: "Newsy Johnson",
        nextScenario: 6
      },
      {
        text: "Transform it into opportunities",
        category: "Darwinist",
        nextScenario: 6
      }
    ]
  },
  {
    id: 6,
    scenario: "You've gained unique insights into human connection. What's your final move?",
    options: [
      {
        text: "Create an anonymous platform for like-minded individuals",
        category: "Virgin",
        nextScenario: "final"
      },
      {
        text: "Start a revolutionary movement",
        category: "Crayon Eater",
        nextScenario: "final"
      },
      {
        text: "Launch an information network",
        category: "Newsy Johnson",
        nextScenario: "final"
      },
      {
        text: "Develop a framework for social evolution",
        category: "Darwinist",
        nextScenario: "final"
      }
    ]
  }
]

const categoryDescriptions = {
  "Virgin": {
    title: "Digital Observer",
    description: "Master of digital realms and virtual connections. Your power lies in understanding the deepest layers of online consciousness. You navigate the virtual world with unmatched insight, seeing patterns and possibilities others miss.",
    quote: "In silence, you've found your voice; in observation, your strength."
  },
  "Crayon Eater": {
    title: "Chaos Innovator",
    description: "Unconventional thinker with unique perspectives. Your strength comes from seeing the world differently, finding solutions where others see confusion. You turn chaos into creativity.",
    quote: "Sometimes the most colorful paths lead to the brightest insights."
  },
  "Newsy Johnson": {
    title: "Information Sovereign",
    description: "Guardian of knowledge and current events. Your strength comes from understanding the complex web of information that shapes our world. You build bridges between facts and understanding.",
    quote: "Through knowledge flows power; through understanding, wisdom."
  },
  "Darwinist": {
    title: "Evolution Pioneer",
    description: "Champion of adaptation and growth. You see beyond current limitations, pushing the boundaries of what's possible. Your adaptive intelligence and competitive spirit drive personal and collective growth.",
    quote: "In the game of evolution, you've become the catalyst."
  },
  "Onchain Savant": {
    title: "Blockchain Oracle",
    description: "Master of the digital ledger. Your intuitive understanding of blockchain technology and onchain dynamics sets you apart. You see the patterns in the data that others miss.",
    quote: "Every transaction tells a story; you read them all."
  },
  "Vexbolts Follower": {
    title: "Community Vanguard",
    description: "Part of an elite digital collective. You understand the power of community and shared vision. Your connection to forward-thinking groups puts you at the forefront of social evolution.",
    quote: "Together we build, divided we fall."
  }
}

function PersonalityTest() {
  const [currentScenario, setCurrentScenario] = useState(scenarios[0])
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option.category]
    setAnswers(newAnswers)

    if (option.nextScenario === "final") {
      const counts = newAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
      }, {})
      const result = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
      setResult(result)
      setShowResult(true)
    } else {
      const nextScenario = scenarios.find(s => s.id === option.nextScenario)
      setCurrentScenario(nextScenario)
    }
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`I used findr and discovered I'm a ${categoryDescriptions[result].title}! Join the quantum social revolution. #findr`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="scenario"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl w-full space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold gradient-text mb-2">
                Quantum Social Analysis
              </h2>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-center text-white mb-8">
                {currentScenario.scenario}
              </h3>

              <div className="grid gap-4">
                {currentScenario.options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 bg-black/30 border border-yellow-500/20 rounded-lg text-left hover:bg-yellow-500/10 transition-colors"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full space-y-8 p-8 bg-black/50 backdrop-blur-lg rounded-2xl border border-yellow-500/20 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center"
            >
              <span className="text-4xl">✨</span>
            </motion.div>

            <h2 className="text-3xl font-bold gradient-text mb-4">
              {categoryDescriptions[result].title}
            </h2>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {categoryDescriptions[result].description}
              </p>
              
              <blockquote className="border-l-4 border-yellow-500 pl-4 my-8 italic text-yellow-500">
                {categoryDescriptions[result].quote}
              </blockquote>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={shareOnTwitter}
              className="mt-8 px-8 py-3 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white rounded-full font-semibold flex items-center justify-center gap-2 mx-auto"
            >
              <FaTwitter className="text-xl" />
              Share Your Result
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t border-yellow-500/20 mt-6"
            >
              <p className="text-yellow-500">
                Your quantum social journey has just begun
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PersonalityTest
