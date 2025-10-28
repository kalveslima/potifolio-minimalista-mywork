'use client'

import { useState, useEffect } from 'react'

import About from '@/app/about'
import Experience from '@/app/experience'
import Skills from '@/components/skills'
import Contact from '@/components/contatc'
import Footer from '@/components/footer'
import Menu from '@/components/menu'
import Hero from '@/components/hero'
import Skillsh from '@/components/skillsh'
export default function Page() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen w-full bg-white space-y-6 bg-white-400">
      <div className="max-w-3xl mx-auto px-2 py-2 space-y-8 animate-fade-in">
       <Menu/>
       
        
        <About />
        
       
        <Experience />
        {showContent && (
         <div className="max-w-3xl mx-auto px-2 py-2 space-y-8 animate-fade-in">
            
            <Skills />
            <Skillsh/>
            <Contact />
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}
