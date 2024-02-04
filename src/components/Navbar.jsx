import { FaBars  } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import brand from '../images/brand.png'
import video from '../images/video.png'
import bg from '../images/bg.png'
import { useState } from "react";


function Navbar() {

const data =[
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
]

  const [toggle ,setToggle] =useState(false)
  const click = ()=>(
    setToggle(!toggle)

  )

  
  return (
    <>
    <div className='w-full' style={{ background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

    <nav className='flex  items-center justify-between p-2'>
        
        <FaBars className={`cursor-pointer text-white hover:text-yellow-500 ${toggle ?'border-white border-2':'border-none'}  text-4xl p-1 mx-2 rounded-md md:hidden flex`} onClick={click} /> {/* Button and onclick function */} 
        <ul className='px-5 md:px-10'>
          <li className='cursor-default  flex justify-center items-center gap-5 text-3xl  text-white hover:text-yellow-500'>
            <img className='w-[60px]' src={brand} alt="" />Shady
          </li>
        </ul>    {/* Barnd  */}

        <ul className="w-full lg:gap[55px] md:gap-7 items-center justify-center md:flex hidden ">
            {
            data.map((item)=>(
                <li className="cursor-pointer font-bold text-lg  text-white hover:text-yellow-500  px-2 p-1 rounded-md"> {item.title}</li>
              ))
            }
        </ul> {/*Menu */}
        <div className="md:flex hidden  mr-5 h-[40px] gap-2">
       <a href="https://portfolio-one-ecru-41.vercel.app/"><button className="bg-yellow-400 hover:bg-yellow-300 text-2xl flex items-center justify-center w-[250px] h-[50px] rounded-md">Contact Us</button></a>
        </div>
    </nav> {/* Normal Menu */}





    <nav className ={`${toggle ?'flex' : 'hidden'} flex-col `}>
        <div className='w-full flex flex-col  items-start justify-start '>
          <ul className={`w-full gap-2 px-2 flex-col items-start justify-start  md:hidden flex mt-4`}>
            {
              data.map((item)=>(
                <li className="cursor-pointer font-bold text-md  text-white hover:text-yellow-500  w-full p-3 rounded-md"> {item.title}</li>
              ))
            }
          </ul>
        </div>
        <div className="flex md:hidden justify-center  h-[40px]  pb-2 gap-2">
       <a href=""><button className="bg-yellow-400 hover:bg-yellow-300 text-2xl flex items-center justify-center w-[250px] h-[50px] rounded-md">Contact Us</button></a>
        </div>
    </nav> {/* responsive Menu */}
    
    <div className="flex w-full flex-col md:flex-row justify-start md:mt-3 mt-10 p-10 md:Pt-32 md:pb-52 md:px-32 h-full  items-center  ">
  <div data-aos="zoom-in" data-aos-duration="1400" className="flex flex-col gap-5 cursor-pointer">
    
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white ">Stay Connected  <br /> To The World OF <br /> Metaverse</h1>
    <h1 className=' text-white '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Iusto aspernatur laboriosam fugiat consequuntur delectus est.</h1>
    <div className="flex flex-col md:flex-row justify-center  md:justify-start   gap-7 mt-5">
    <button className='bg-yellow-400  text-sm  md:text-lg  hover:bg-yellow-200 w-full  md:w-1/3 h-[40px] rounded-md font-semibold'>Buy Now</button>

      <div className='flex  items-center gap-3 w-full md:w-1/3'>
        <img src={video} className='w-[40px] hover:opacity-70' alt="" />
        <h1 className='text-md font-semibold text-white  '>Play Demo</h1>
      </div>
    </div>
  </div>
  
</div>
</div>
    </>
  );
}

export default Navbar;
