import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div className="">
            <Image
              src="/assets/car3.jpg"
              alt="car 3"
              height={1000}
              width={1000}
              className="h-[25rem] w-[30rem] rounded"
            />
          </div>
          <div className="">
            <div className="">
              <h1 className="text-3xl sm:text-4xl font-bold capitalize">
                about us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
