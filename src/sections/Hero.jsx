import React from 'react'
import desktop from '../images/image-hero-desktop.png'
import databiz from "../images/client-databiz.svg"
import meet from "../images/client-meet.svg"
import audiophile from "../images/client-audiophile.svg"
import maker from "../images/client-maker.svg"

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row mt-20 gap-10 md:gap-0 mb-10'>
      {/* for the write up on the side */}
      <div className='flex flex-col gap-10 md:w-1/2 w-full md:pl-20 pl-0 md:mt-20 mt-0 md:mx-8 mx-0'>

        {/* the large heading */}
        <div className='flex justify-center'>
          <h1 className='md:text-8xl text-3xl font-extrabold text-almost-black font-epilogue'>Make remote work</h1>
        </div>
        {/* the write up below */}
        <div className='flex items-center text-center md:text-start md:w-3/4 w-full'>
          <p className='font-epilogue text-medium-gray md:text-xl text-base font-md'>
            Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity soar.
          </p>

        </div>

        {/* button */}
       <div className='md:mt-8 flex justify-center md:justify-normal'>
        <a href="#" className='bg-almost-black text-almost-white font-epilogue text-lg font-bold rounded-xl px-8 py-4 hover:bg-almost-white hover:text-almost-black hover:border-almost-black hover:border-2 transition duration-200 hover:font-bold'>Learn More</a>
       </div>
       {/* the logo below */}
       {/* for the logos */}
      <div className='flex flex-row lg:gap-10 gap-5 mx-4 md:mx-0 items-center mt-12 justify-center md:justify-normal'>
        <img src={databiz} alt="databiz" className='w-[20%] md:w-fit' />
        <img src={audiophile} alt="audio" className='w-[20%] md:w-fit' />
        <img src={meet} alt="meet" className='w-[20%] md:w-fit' />
        <img src={maker} alt="maker" className='w-[20%] md:w-fit' />
      </div>

      </div>


      {/* for the image */}
      <div className='lg:w-1/2 w-full flex items-center justify-center'>

      <img src={desktop} alt="image on the side" className='w-[70%] h-[80%]'/>
      </div>
        
    </div>
  )
}

export default Hero