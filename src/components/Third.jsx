import React ,{useEffect} from 'react'
import man1 from '../images/man vr1.jpg'
import man3 from '../images/man vr3.jpg'
import man2 from '../images/man vr2.jpg'
import man4 from '../images/man vr4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Third() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out'
    });
  }, []);
  
  return (
    <div className='  '>
        <div className='pt-32  bg-indigo-950 text-white font-semibold text-center flex flex-col gap-10'>
          <h1 className='text-2xl md:text-4xl '>Our Team Members</h1>
          <h1 className='text-sm md:text-lg '>Lorem, ipsum dolor  adipisicing elit. Nostrum nihil, iusto cumque nam cum placeat <br /> nobis earum excepturi. Molestiae necessitatibus consectetur ut ratione quibusdam culpa velit nemo atque veniam. Neque!</h1>
        </div>
       
        <div  className='bg-gradient-to-tl from-pink-950 via-indigo-950 to-indigo-950 flex flex-col gap-20 items-center justify-center md:flex-col lg:flex-row pt-40 p-5'>
          <div data-aos="fade-up" data-aos-duration="1400" className='bg-white  gap-7 rounded-lg w-full md:w-2/3 lg:w-[35%] h-full flex flex-col '>
          <img src={man1} className='rounded-lg h-[350px] hover:opacity-80 cursor-pointer' alt="" />
          <div className='flex flex-col md:flex-row justify-between p-5 items-start md:items-center'>
            <div className='flex flex-col gap-5'>
                <div >
                <h1 className='text-4xl text-black px-1 md:px-3 font-bold'>Shady Mahmoud</h1>
                <h1 className='text-xl md:text-2xl text-black px-1 md:px-3 w-full'>Pes 2021 Gamer</h1>
                </div>
                <div className='flex justify-start gap-5 px-1 py-5 md:p-5'>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                </div>
       
            </div>
            <div className='cursor-pointer flex flex-row md:flex-col items-center justify-between gap-0 md:gap-2 rounded-lg p-4 bg-blue-950 w-full md:w-[12%] h-full mr-5'>
            <i class="fa-brands fa-facebook text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-twitter text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-linkedin-in text-white hover:text-yellow-500 text-3xl"></i>
            </div>
          </div>
      
      </div>

      <div data-aos="fade-up" data-aos-duration="1400" className='bg-white  gap-7 rounded-lg w-full md:w-2/3 lg:w-[35%] h-full flex flex-col mt-32'>
      <img src={man3} className='rounded-lg h-[350px] hover:opacity-80 cursor-pointer' alt=""  />
      <div className='flex flex-col md:flex-row justify-between p-5 items-start md:items-center'>
            <div className='flex flex-col gap-5'>
                <div >
                <h1 className='text-4xl text-black px-1 md:px-3 font-bold'>Ahmed Yaser</h1>
                <h1 className='text-xl md:text-2xl text-black px-1 md:px-3 w-full'>COD Gamer</h1>
                </div>
                <div className='flex justify-start gap-5 px-1 py-5 md:p-5'>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                </div>
       
            </div>
            <div className='cursor-pointer flex flex-row md:flex-col items-center justify-between gap-0 md:gap-2 rounded-lg p-4 bg-blue-950 w-full md:w-[12%] h-full mr-5'>
            <i class="fa-brands fa-facebook text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-twitter text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-linkedin-in text-white hover:text-yellow-500 text-3xl"></i>
            </div>
          </div>
      </div>
        </div>


        <div className='bg-gradient-to-bl from-pink-950 via-indigo-950 to-indigo-950 flex flex-col gap-20 justify-center items-center  md:flex-col lg:flex-row pt-40 lg:-mt-32 p-5'>
          <div data-aos="fade-up" data-aos-duration="1400" className='bg-white  gap-7 rounded-lg w-full md:w-2/3 lg:w-[35%] h-full flex flex-col '>
          <img src={man2} className='rounded-lg h-[350px] hover:opacity-80 cursor-pointer' alt="" />
          <div className='flex flex-col md:flex-row justify-between p-5 items-start md:items-center'>
            <div className='flex flex-col gap-5'>
                <div >
                <h1 className='text-4xl text-black px-1 md:px-3 font-bold'>Karem Mahmoud</h1>
                <h1 className='text-xl md:text-2xl text-black px-1 md:px-3 w-full'>Pubg Mobile Gamer</h1>
                </div>
                <div className='flex justify-start gap-5 px-1 py-5 md:p-5'>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                </div>
       
            </div>
            <div className='cursor-pointer flex flex-row md:flex-col justify-between items-center gap-0 md:gap-2 rounded-lg p-4 bg-blue-950 w-full md:w-[12%] h-full mr-5'>
            <i class="fa-brands fa-facebook text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-twitter text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-linkedin-in text-white hover:text-yellow-500 text-3xl"></i>
            </div>
          </div>
      
      </div>

      <div data-aos="fade-up" data-aos-duration="1400" className='bg-white  gap-7 rounded-lg w-full md:w-2/3 lg:w-[35%] h-full flex flex-col mt-32'>
      <img src={man4} className='rounded-lg h-[350px] hover:opacity-80 cursor-pointer' alt=""  />
      <div className='flex flex-col md:flex-row justify-between p-5 items-start md:items-center'>
            <div className='flex flex-col gap-5'>
                <div >
                <h1 className='text-4xl text-black px-1 md:px-3 font-bold'>Sa3dolla</h1>
                <h1 className='text-xl md:text-2xl text-black px-1 md:px-3 w-full'>Pubg Mobile Gamer</h1>
                </div>
                <div className='flex justify-start gap-5 px-1 py-5 md:p-5'>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                    <i class="fa-solid fa-star text-yellow-500 text-2xl"></i>
                </div>
       
            </div>
            <div className='cursor-pointer flex flex-row md:flex-col items-center justify-between gap-0 md:gap-2 rounded-lg p-4 bg-blue-950 w-full md:w-[12%] h-full mr-5'>
            <i class="fa-brands fa-facebook text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-twitter text-white hover:text-yellow-500 text-3xl"></i>
            <i class="fa-brands fa-linkedin-in text-white hover:text-yellow-500 text-3xl"></i>
            </div>
          </div>
      </div>
        </div>




    </div>
  )
}

export default Third