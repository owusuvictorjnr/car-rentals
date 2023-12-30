import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CarListData = [
  {
    name: 'benz',
    price: 1000,
    image: '/assets/car5.jpg',
    aosDelay: '0',
  },

  {
    name: 'volvo',
    price: 2500,
    image: '/assets/car2.jpg',
    aosDelay: '500',
  },

  {
    name: 'kantanka',
    price: 6700,
    image: '/assets/car6.jpg',
    aosDelay: '1000',
  },
]

const CarList = () => {
  return (
    <div className="pb-24 bg-white pt-12 dark:bg-dark dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold mb-3 capitalize"
        >
          categories
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          officiis pariatur quibusdam enim, nesciunt ipsam, assumenda incidunt
          nihil odit, accusantium rerum laborum in. Maiores, placeat.
        </p>

        {/* Car Categories Card */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-16">
            {CarListData.map((car) => (
              <div key={car.name} className="flex justify-center">
                <div
                  data-aos="fade-up"
                  data-aos-duration={car.aosDelay}
                  className="space-y-2 border-2 w-[13rem] lg:w-[15rem] border-gray-300 hover:border-amber-400 p-3 rounded-xl relative group"
                >
                  <div className="h-[20rem] w-[10rem] md:h-[20rem] lg:w-[18rem]">
                    <Image
                      src={car.image}
                      alt="car List"
                      height={1000}
                      width={1000}
                      className="rounded h-[15rem] w-[15rem]  object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                    />
                    <div className="space-y-2">
                      <h1 className="text-amber-400 font-semibold capitalize">
                        {car.name}
                      </h1>
                      <div className="flex justify-between text-sm items-center md:text-lg lg:flex-none lg:justify-normal lg:gap-10  font-semibold">
                        <p>&#8373; {car.price}/Day</p>
                        <Link href="/details" className="capitalize">
                          details
                        </Link>
                      </div>
                    </div>
                    <p className="top-0 text-xl font-semibold absolute left-3">
                      15 Km
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* button */}
        <div className="grid place-content-center mt-8">
          <button
            data-aos="fade-up"
            className="button-outline capitalize font-semibold"
          >
            see more cars
          </button>
        </div>
      </div>
    </div>
  )
}

export default CarList
