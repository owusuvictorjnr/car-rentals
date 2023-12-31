import React from 'react'
import Image from 'next/image'
import Service from './service/page'

import Link from 'next/link'
import CarList from './carList/pages'
import Testimonial from '@/components/Testimonial/Testimonial'
import Appstore from '@/components/Appstore/Appstore'
import Contact from './contact/page'

const skillsData = [
  {
    name: 'best price',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 duration-300 text-amber-300 text-5xl group-hover:text-black"
      >
        <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
        <path
          fill-rule="evenodd"
          d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    link: '/',
    descrip:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deleniti omnis ab suscipit, est dolorem facilis at ipsa similique nulla.',
    aosDelay: '0',
  },

  {
    name: 'fast and safe',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 duration-300 text-amber-300 text-5xl group-hover:text-black"
      >
        <path
          fill-rule="evenodd"
          d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
    link: '/',
    descrip:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deleniti omnis ab suscipit, est dolorem facilis at ipsa similique nulla.',
    aosDelay: '500',
  },

  {
    name: 'experience drivers',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 duration-500 text-amber-300 text-5xl group-hover:text-black"
      >
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
      </svg>
    ),
    link: '/',
    descrip:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat deleniti omnis ab suscipit, est dolorem facilis at ipsa similique nulla.',
    aosDelay: '1000',
  },
]

export default function Home() {
  return (
    <>
      {/* <About /> */}
      <section>
        <div className="dark:bg-dark px-10 bg-slate-100 dark:text-white duration-300 min-h-[40rem] sm:grid sm:place-items-center">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
              <div
                data-aos="slide-right"
                data-aos-duration="1500"
                data-aos-once="false"
                className=""
              >
                <Image
                  src="/assets/car3.jpg"
                  alt="car 3"
                  height={1000}
                  width={1000}
                  className="h-[20rem] md:w-[25rem] lg:w-[30rem]  rounded sm:scale-105 sm:-translate-x-11 max-h-[300px] "
                />
              </div>
              <div className="">
                <div className="space-y-5 sm:p-16 pb-6">
                  <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl font-bold capitalize"
                  >
                    about us
                  </h1>
                  <p data-aos="fade-up">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis dolor numquam ipsum modi architecto.
                  </p>
                  <p data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ad, voluptatum?
                  </p>

                  <button
                    data-aos="fade-up"
                    className="capitalize duration-700  w-full md:w-56 font-bold button-outline"
                  >
                    read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section>
        <div className="py-14 dark:bg-black dark:text-white sm:min-h-[40rem] sm:grid sm:place-items-center">
          <div className="container">
            <div className="pb-12">
              <h1 className="text-3xl capitalize font-semibold text-center sm:text-4xl">
                why choose us
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skillsData.map((skill) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={skill.aosDelay}
                  key={skill.name}
                  className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-amber-400 duration-500 text-white hover:text-black rounded-xl"
                >
                  <div className="grid place-items-center">{skill.icon}</div>
                  <h1 className="capitalize font-bold text-3xl">
                    {skill.name}
                  </h1>
                  <p>{skill.descrip}</p>
                  <Link href={skill.link} className="capitalize">
                    learn more
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Car Categories */}
      <section>
        <CarList />
      </section>

      {/*Testimonial   */}
      <Testimonial />

      {/* Appstore Banner */}
      <section className="dark:bg-black bg-white dark:text-white">
        <Appstore className="dark:bg-dark" />
      </section>

      {/* Contact us */}
      <section>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="dark:bg-black dark:text-white py-14"
        >
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
              <div className="col-span-2 space-y-3">
                <h1 className=" text-4xl sm:text-5xl font-bold text-white">
                  Imagine the road ahead for our car rental company - ready to
                  hop in?
                </h1>
                <p className=" text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, perspiciatis eaque cumque iure quasi quibusdam?
                </p>
              </div>
              <div className=" grid place-items-center">
                <Link
                  href="/"
                  className=" inline-block py-2 px-6 bg-amber-400 text-white rounded-lg tracking-wider uppercase hover:bg-amber-400/80 duration-300"
                >
                  contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
