import React from 'react'
import Link from 'next/link'
import {
  FaFacebookF,
  FaMobileScreenButton,
  FaLocationArrow,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from 'react-icons/fa6'

const FooterLinks = [
  {
    title: 'Home',
    link: '/',
  },

  {
    title: 'cars',
    link: '/cars',
  },

  {
    title: 'contact',
    link: '/contact',
  },

  {
    title: 'about',
    link: '/about',
  },

  {
    title: 'booking',
    link: '/booking',
  },
]

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 capitalize">
              car rental
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>location: </p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileScreenButton />

              <p>+233598111434</p>
            </div>

            {/* socio */}
            <div className="flex items-center gap-3 mt-6">
              <Link href="">
                <FaFacebookF className=" text-3xl hover:text-amber-400 duration-300" />
              </Link>

              <Link href="">
                <FaInstagram className=" text-3xl hover:text-amber-400 duration-300" />
              </Link>

              <Link href="">
                <FaTiktok className=" text-3xl hover:text-amber-400 duration-300" />
              </Link>

              <Link href="">
                <FaLinkedinIn className=" text-3xl hover:text-amber-400 duration-300" />
              </Link>
            </div>
          </div>

          {/* NavLinks */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="">
                <h1>important links</h1>

                <ul>
                  {FooterLinks.map((data) => {
                    return (
                      <li key={data.link}>
                        <Link href={data.link} className='capitalize'>{data.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
