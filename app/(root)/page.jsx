import React from 'react'
import Image from 'next/image'
import Service from './service/page'

export default function Home() {
  return (
    <>
      {/* <About /> */}
      <section>
        <div className="dark:bg-black/10 px-10 bg-slate-100 dark:text-white duration-300 min-h-[40rem] sm:grid sm:place-items-center">
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
        <Service />
      </section>
    </>
  )
}
