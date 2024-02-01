'use client'

import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/shared/Navbar'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Footer from '@/components/shared/Footer'

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark') // Initial theme for server-side rendering

  // ;('use client')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', theme)
  }

  useEffect(() => {
    const element = document.documentElement
    element.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // AOS Init
  useEffect(() => {
    AOS.init({
      offsets: 100,
      durations: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="">
      <Navbar theme={theme} setTheme={handleThemeToggle} />
      
      <main className="">{children}</main>
      <Footer />
    </div>
  )
}
