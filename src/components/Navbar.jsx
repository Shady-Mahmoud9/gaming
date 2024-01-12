import React, { useState,useEffect } from 'react';
import brand from '../images/brand.png';
import video from '../images/video.png';
import bg from '../images/bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
  const [isNavMenuHidden, setNavMenuHidden] = useState(true);

  const toggleNavMenu = () => {
    setNavMenuHidden(!isNavMenuHidden);
  };

  useEffect(() => {
    AOS.init({
       
      easing: 'ease-in-out'
    });
  }, []);
  

  return (
    <div className='w-full' style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <nav className="w-full gap-10 p-2 flex items-center justify-center">
      <div className="container mx-auto flex items-end justify-between">
        <div className="flex items-center">
          <img src={brand} alt='' className='w-[60px]' />
          <a href="#!" className="text-white text-2xl md:text-3xl ">Shady</a>
        </div>
        {/* Responsive Navigation Toggle */}
        <div className="md:hidden">
          <button id="navToggle" className="text-white text-xl" onClick={toggleNavMenu}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Responsive Navigation Menu */}
      <div id="navMenu" className={`md:hidden ${isNavMenuHidden ? 'hidden' : ''}`}>
        <a href="#!" className="block p-2 text-white text-xl font-bold">Home</a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">About</a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">Menu </a>
        <a href="#!" className="block p-2 text-white text-xl font-bold">Services</a>
        <a href="https://shady-mahmoud.vercel.app/" className="block p-2 text-white text-xl font-bold">Contact</a>
      </div>
      {/* Navigation Links (visible on larger screens) */}
      <div className="hidden md:flex  lg:gap-16 gap-10 md:gap-8 ">
        <a href="#!" className="hover:text-yellow-400 text-white text-xl font-bold ">Home</a>
        <a href="#!" className="hover:text-yellow-400 text-white text-xl font-bold">About</a>
        <a href="#!" className="hover:text-yellow-400 text-white text-xl font-bold ">Menu </a>
        <a href="#!" className="hover:text-yellow-400 text-white text-xl font-bold">Services</a>
        <a href="https://shady-mahmoud.vercel.app/" className="hover:text-yellow-400 text-white text-xl font-bold">Contact</a>
      </div>
      <a href="https://shady-mahmoud.vercel.app/ " className='flex items-center justify-center bg-yellow-400 hover:bg-yellow-200 w-1/2 md:w-1/3 h-[40px] p-5 text-center rounded-md font-semibold'>Contact US</a>
    </nav>

<div className="flex w-full flex-col md:flex-row justify-start md:mt-3 mt-10 p-10 md:Pt-32 md:pb-52 md:px-32 h-full  items-center  ">
  <div data-aos="zoom-in" data-aos-duration="1400" className="flex flex-col gap-5 cursor-pointer">
    
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white">Stay Connected  <br /> To The World OF <br /> Metaverse</h1>
    <h1 className=' text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto aspernatur laboriosam fugiat consequuntur delectus est.</h1>
    <div className="flex flex-col md:flex-row justify-center  md:justify-start   gap-7 mt-5">
    <button className='bg-yellow-400  text-sm  md:text-lg  hover:bg-yellow-200 w-full  md:w-1/3 h-[40px] rounded-md font-semibold'>Buy Now</button>

      <div className='flex  items-center gap-3 w-full md:w-1/3'>
        <img src={video} className='w-[40px] hover:opacity-70' alt="" />
        <h1 className='text-md font-semibold text-white hover:text-gray-400'>Play Demo</h1>
      </div>
    </div>
  </div>
  
</div>


    </div>

);
};
export default Navbar