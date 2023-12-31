'use client'

import React from 'react'
import Image from 'next/image'

const testimonialData = [
  {
    name: 'vitech',
    image: '',
    descrip:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatem?',
    aosDelay: '0',
    stars: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },

  {
    name: 'john',
    image: '',
    descrip:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatem?',
    aosDelay: '300',
  },

  {
    name: 'doe',
    image: '',
    descrip:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatem?',
    aosDelay: '500',
  },

  {
    name: 'josephine',
    image: '',
    descrip:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatem?',
    aosDelay: '1000',
  },

  {
    name: 'rose',
    image: '',
    descrip:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatem?',
    aosDelay: '1500',
  },
]

const Testimonial = () => {
  const renderStars = (rating = 5) => {
    return Array(rating)
      .fill()
      .map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </svg>
      ))
  }

  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">{/* ... headings and text */}</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {testimonialData.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
            >
              <div className="grid place-items-center">
                <Image
                  src={data.image || 'https://picsum.photos/200'} // Use placeholder if image is empty
                  alt={data.name}
                  width={100} // Optimized image dimensions
                  height={100}
                  className="h-20 w-20 rounded-full"
                  // layout="fill" // Ensure proper image display
                  priority
                />
              </div>
              <div className="flex justify-center text-2xl text-amber-400">
                {/*  Render stars based on rating */}
                {renderStars(data.rating || 5)}
              </div>
              <p>{data.descrip}</p>
              <p className="font-semibold text-center capitalize">
                {data.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
