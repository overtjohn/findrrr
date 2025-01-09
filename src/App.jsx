import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUpPage from './pages/SignUpPage'
import AboutPage from './pages/AboutPage'
import VisionPage from './pages/VisionPage'
import AIFeaturesPage from './pages/AIFeaturesPage'
import PersonalityTest from './pages/PersonalityTest'
import ParticleBackground from './components/ParticleBackground'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useToast } from './hooks/useToast'
import { useWindowSize } from './hooks/useWindowSize'

export default function App() {
  const location = useLocation()
  const { toast } = useToast()
  const windowSize = useWindowSize()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <ParticleBackground />
      <div className="relative z-10 flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/ai" element={<AIFeaturesPage />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
        </Routes>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}
