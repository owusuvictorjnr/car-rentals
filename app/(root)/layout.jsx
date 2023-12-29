'use client'

import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/shared/Navbar'
import React, { useEffect, useState } from 'react'

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
  return (
    <div className="">
      <Navbar theme={theme} setTheme={handleThemeToggle} />
      <Hero/>
      <main className="">{children}</main>
    </div>
  )
}
