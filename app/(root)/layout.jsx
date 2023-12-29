'use client'

import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/shared/Navbar'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Cars from '@/app/(root)/cars/page'

export default function RootLayout({ children }) {
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', theme)
  }
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  const element = document.documentElement
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [element.classList, theme])

  // AOS Init
  React.useEffect(() => {
    AOS.init({
      offsets: 100,
      durations: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  })
  return (
    <div className="">
      <Navbar theme={theme} setTheme={handleThemeToggle} />
      <Hero theme={theme} />
      <main className="">{children}</main>
    </div>
  )
}
