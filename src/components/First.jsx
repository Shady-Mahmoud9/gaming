import React from 'react'
import manvr from '../images/man vr.jpg'


function First() {
  return (
    <div className='bg-gradient-to-tl from-pink-950 via-indigo-950 to-indigo-950'>
      <div className='w-full flex gap-10 justify-center items-center flex-col md:flex-row '>
      <div className='bg-blue-800 p-6 gap-3 items-center md:items-start rounded-lg w-4/5 md:w-1/4 h-full flex flex-col mt-10 md:-mt-28'>
      <i className="text-5xl text-white  fa-solid fa-circle-nodes"></i>
      <h1 className='text-2xl md:text-3xl text-white'>Connectivity</h1>
      <h1 className='text-base text-white text-center md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium rerum dolorem incidunt quae repellat inventore?</h1>
      </div>

      <div className='bg-pink-600 p-6 gap-3 items-center md:items-start rounded-lg w-4/5 md:w-1/4 h-full flex flex-col mt-10 md:-mt-28'>
      <i className="text-5xl text-white  fa-solid fa-lock"></i>
      <h1 className='text-2xl md:text-3xl text-white'>Security</h1>
      <h1 className='text-base text-white text-center md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium rerum dolorem incidunt quae repellat inventore?</h1>
      </div>

      <div className='bg-yellow-400 p-6 gap-3 items-center md:items-start rounded-lg w-4/5 md:w-1/4 h-full flex flex-col mt-10 md:-mt-28'>
      <i className="text-5xl text-black  fa-solid fa-vr-cardboard"></i>
      
      <h1 className='text-2xl md:text-3xl text-black'>Use VR</h1>
      <h1 className='text-base text-black text-center md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium rerum dolorem incidunt quae repellat inventore?</h1>
      </div>
      </div>


      <div className='mt-32 flex flex-col w-full md:flex-col lg:flex-row justify-center items-center gap-10 md:gap-32 p-10'>
        <div className= 'w-full md:w-full lg:w-1/2'>
          <img src={manvr} className='w-full rounded-xl' alt="" />
        </div>

        <div className='w-full md:w-full '>
          <h1 className='text-4xl text-center md:text-center lg:text-start font-semibold text-white'>The Opportunity ofour VR  <br />That we offer So Far</h1>
          <div className='flex flex-col items-center mt-20 md:mt-5 gap-16 md:gap-16'>
            
            <div className='flex flex-col w-full md:w-2/3 md:flex-col lg:flex-row gap-7 items-center'>
              <div className='flex p-4 items-center bg-blue-800 rounded-full'>
                <i className="text-4xl text-white  fa-solid fa-vr-cardboard"></i>
              </div>
              <div className='w-full  text-center md:gap-10 lg:gap-2 gap-10 flex flex-col md:text-center lg:text-start md:w-2/3 text-white'>
                <h1 className='text-5xl '>virtual reality</h1>
                <h1 className='text-2xl'>Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Amet, pariatur?</h1>
              </div>
            </div>

            <div className='flex flex-col  w-full md:w-2/3 md:flex-col lg:flex-row gap-7 items-center'>
              <div className='flex p-4 items-center bg-pink-600 rounded-full'>
                <i className="text-4xl text-white  fa-solid fa-microchip"></i>
              </div>
              <div className='w-full  text-center md:gap-10 lg:gap-2 gap-10 flex flex-col md:text-center lg:text-start md:w-2/3 text-white'>
                <h1 className='text-5xl '>Augemented reality</h1>
                <h1 className='text-2xl'>Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Amet, pariatur?</h1>
             
              </div>
            </div>
            
            <div className='flex flex-col  w-full md:w-2/3 md:flex-col lg:flex-row gap-7 items-center'>
              <div className='flex p-4 items-center bg-yellow-400 rounded-full'>
                <i className="text-4xl text-black  fa-solid fa-hands-holding"></i>
              </div>
              <div className='w-full  text-center md:gap-10 lg:gap-2 gap-10 flex flex-col md:text-center lg:text-start md:w-2/3 text-white'>
                <h1 className='text-5xl '>Best Experience </h1>
                <h1 className='text-2xl'>Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Amet, pariatur?</h1>
             
              </div>
            </div>
            
            <button className='bg-yellow-400  text-sm  md:text-lg  hover:bg-yellow-300 w-full  md:w-1/3 h-[50px] rounded-md font-semibold'>Get It Now</button>


          </div>
        </div>
      </div>

    </div>
  )
}

export default First