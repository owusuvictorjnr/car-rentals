import React from 'react'

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
      ></div>
    </div>
  )
}

export default Appstore
