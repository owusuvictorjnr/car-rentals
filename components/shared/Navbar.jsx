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
const Navbar = () => {
  const pathname = usePathname()
  return (
    <>
      <nav className="shadow-sm">
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
                      className={`${isActive && 'text-blue-500'} capitalize`}
                    >
                      <Link
                        href={data.link}
                        className="inline-block py-2 hover:border-b-2 hover:text-amber-400"
                      >
                        {data.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
