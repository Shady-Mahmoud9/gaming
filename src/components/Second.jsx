import React from 'react'
import pes from '../images/pes2023.jpg'
import pubg from '../images/pubg.jpg'
import cod from '../images/cod.jpg'
import vr from '../images/vr.jpg'
import vr2 from '../images/mmm.jpg'

function Second() {

  const games = [{
   "image":pes,
    "title":"Pes 2023",
    "description" : "Lorem  Accusantium rerum dolorem incidunt quae repellat inventore?",
    "price":"$100.00",
    "discound":"$90.00",
  },
  {
   "image":pubg,
    "title":"Pubg Mobile",
    "description" : "Lorem  Accusantium rerum dolorem incidunt quae repellat inventore?",
    "price":"$90.00",
    "discound":"$60.00",
  },
  {
   "image":cod,
    "title":"Call Of Duty",
    "description" : "Lorem  Accusantium rerum dolorem incidunt quae repellat inventore?",
    "price":"$130.00",
    "discound":"$110.00",
  },
]




  return (
    <div  className='bg-gradient-to-bl from-pink-950 via-indigo-950 to-indigo-950 p-5 md:p-16'>
        <div className='text-white text-center flex flex-col gap-5 mt-20'>
            <h1 className='text-5xl font-semibold'>Latest Awesome Games Of 2023</h1>
            <h1 className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat voluptatibus est dolores eaque dolor quaerat illo  possimus labore quibusdam, facere ea <br /> totam amet soluta. Lorem ipsum dolor sit amet consectetur. Ipsam delectus repudiandae ipsum saepe!</h1>
        </div>
    

        <div className='w-full flex  gap-10 justify-center items-center flex-col md:flex-col lg:flex-row '>
      

      {games.map((game)=>( <div className='bg-blue-900 cursor-default gap-7 rounded-lg w-full md:w-2/3 lg:w-1/4 h-full flex flex-col mt-32'>
      <img src={game.image} className='rounded-lg h-[330px] hover:opacity-70 cursor-pointer' alt="" />
      <h1 className='text-4xl text-white px-5 font-bold'>{game.title}</h1>
      <h1 className='text-base text-white px-5'>{game.description}</h1>
      <div className='flex justify-between p-5 cursor-default'>
        <div >
          <h3 className='text-sm text-gray-500 font-semibold line-through'>{game.price}</h3>
          <h1 className='text-2xl text-white font-semibold'>{game.discound}</h1>
        </div>
        <button className='bg-yellow-400  text-sm  md:text-lg  hover:bg-yellow-300 w-1/3 h-[50px] rounded-md font-semibold'>Buy Now</button>

      </div>
      </div>))}
     

      
      </div>
   
      
      <div className='mt-20 flex w-full flex-col md:flex-row justify-between p-5 md:p-10 h-full gap-10 items-center '>
      
       <div  className="flex md:w-[45%] w-full  flex-col gap-10 cursor-pointer">
    
          <h1 className="text-3xl text-center md:text-start md:text-6xl font-semibold text-white">We Are The Best <br />Company</h1>
          <h2 className='text-sm text-center md:text-start text-white'>Lorem, ipsum Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Praesentium, blanditiis. dolor sit amet  <br /> consectetur  laboriosam fugiat consequuntur delectus est.</h2>
    
          <button className='bg-yellow-400  text-sm  md:text-lg  hover:bg-yellow-200 w-full  md:w-1/3 h-[50px] rounded-md font-semibold'>Buy Now</button>

     
      
    
      </div>

      <div style={{background: `url(${vr})`,backgroundRepeat:"no-repeat" , backgroundSize:"cover" }} className="rounded-xl md:w-[45%] w-[90%]   cursor-pointer">
        <img src={vr2} className='w-full rounded-xl md:mt-10 mt-4 -ml-4 md:-ml-10 ' alt="" />
      </div>

      </div>
    </div>
  )
}

export default Second