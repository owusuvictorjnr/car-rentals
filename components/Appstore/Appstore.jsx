import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const bannerImg = {
  backgroundImage: `url(/play_appstore/pattern.jpeg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
}

const Appstore = () => {
  return (
    <div className="container pb-14">
      <div
        className="text-black dark:bg-dark py-10 sm:min-h-[20rem] sm:grid sm:place-items-center rounded-xl "
        style={bannerImg}
      >
        <div className="">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-semibold capitalize"
            >
              download our mobile apps
            </h1>

            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              esse pariatur non dolores
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <Link href="/">
                <Image
                  src="/play_appstore/play_store.png"
                  alt="PLay Store"
                  height={1000}
                  width={1000}
                  className=" max-w-[15rem] sm:max-w-[20rem] md:max-w-[22rem]"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/play_appstore/app_store.png"
                  alt="PLay Store"
                  height={1000}
                  width={1000}
                  className="max-w-[15rem] sm:max-w-[20rem] md:max-w-[22rem]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appstore
