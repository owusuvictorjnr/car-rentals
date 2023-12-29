'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = [
  {
    id: '1',
    name: 'home',
    link: '/',
  },

  {
    id: '2',
    name: 'cars',
    link: '/cars',
  },

  {
    id: '3',
    name: 'about',
    link: '/about',
  },

  {
    id: '4',
    name: 'contact',
    link: '/contact',
  },

  {
    id: '5',
    name: 'booking',
    link: '/booking',
  },
]
const Navbar = ({ theme, setTheme }) => {
  const pathname = usePathname()
  return (
    <>
      <nav className="shadow-md bg-white dark:bg-black/70 dark:text-white duration-300">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold capitalize">bossu car rental</h1>

            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {NavLinks.map((data) => {
                  const isActive = pathname === data.link
                  return (
                    <li
                      key={data.link}
                      className={`${
                        isActive && 'text-blue-500'
                      } capitalize py-4`}
                    >
                      <Link
                        href={data.link}
                        className=" py-2 hover:border-b-2 hover:text-amber-400 hover:border-amber-400 transition-colors duration-500 text-lg font-medium"
                      >
                        {data.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Dark and noirmal mode */}
            <div className="">
              {theme === 'dark' ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  onClick={() => setTheme('light')}
                >
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  onClick={() => setTheme('dark')}
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
