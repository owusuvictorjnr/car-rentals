import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = ({ theme }) => {
  return (
    <>
      <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
        <div className="container min-h-[620px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="order-1 sm:order-2"
            >
              <Image
                src={`/assets/${theme === 'dark' ? 'car1.jpeg' : 'car2.jpg'}`}
                alt="hero"
                height="1000"
                width="1000"
                className="relative rounded h-[20rem] md:w-[25rem] lg:w-[30rem] -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
              />
            </div>
            <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
              <p
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-amber-400 text-2xl capitalize font-bold"
              >
                best buy construction
              </p>
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                className=" text-sm md:text-2xl lg:text-7xl font-semibold capitalize"
              >
                Building Your Dreams, Block by Block...
              </h1>
              {/* <p data-aos="fade-up" data-aos-delay="1000">
        
              </p> */}

              <Button
                data-aos="fade-up"
                data-aos-duration="1500"
                className="bg-amber-400 font-bold md:text-xl capitalize w-full md:w-56 duration-300"
              >
                get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
