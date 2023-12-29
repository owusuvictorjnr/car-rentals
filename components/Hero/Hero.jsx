import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white duration-300">
        <div className="container min-h-[620px] flex">
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
            <div className="order-2 sm:order-1">
              <Image
                src="/assets/pic1.jpeg"
                alt="hero"
                height="1000"
                width="1000"
                className=""
              />
            </div>
            <div className="">
              <p className="text-amber-400 text-2xl capitalize font-bold">
                home of quality cars
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold capitalize">
                bossu rental
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                nam. Eligendi explicabo eaque eveniet magni quidem, nam
                exercitationem ratione culpa!
              </p>

              <Button className="bg-amber-400 md:text-xl capitalize w-full md:w-56 duration-300">
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
