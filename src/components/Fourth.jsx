import React, { useState } from 'react';
import vr2 from '../images/game.jpg';
import videoicon from '../images/video.png';
import video from '../images/Witcher .mp4';

function Fourth() {
  const questions = [
    {
      "question": "What Does Metaverse Mean?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum numquam voluptate magnam tenetur obcaecati sapiente, tempora fugit asperiores eligendi!"
    },
    {
      "question": "What is a Metaverse Company?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum numquam voluptate magnam tenetur obcaecati sapiente, tempora fugit asperiores eligendi!"
    },
    {
      "question": "What Can I Do With Metaverse?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum numquam voluptate magnam tenetur obcaecati sapiente, tempora fugit asperiores eligendi!"
    },
    {
      "question": "When Does New Metaverse ?",
      "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolorum numquam voluptate magnam tenetur obcaecati sapiente, tempora fugit asperiores eligendi!"
    }
  ];

  const [showBackground, setShowBackground] = useState(true);
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const handlePlayClick = () => {
    setShowBackground(false);
    setShowPlayIcon(false);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedItem(selectedItem === index ? null : index);
  };

  return (
    <div className=''>
      <div className='bg-indigo-950 flex flex-col items-center justify-center p-5 pt-20 md:pt-20 md:p-10  lg:p-40 relative'>
        {showBackground && (
          <img src={vr2} alt="" className="w-full h-full object-cover z-10" />
        )}

        {showPlayIcon && (
          <div onClick={handlePlayClick} className="absolute top-[60%] md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white text-6xl z-20" >
            <img src={videoicon} className='w-[50px] md:w-[90px] hover:opacity-70 border rounded-full bg-white' alt="" />
          </div>
        )}

        {!showBackground && (
          <video autoPlay controls className="md:w-full w-[300px] h-full object-cover z-30" onEnded={() => setShowBackground(true)} >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className='bg-gradient-to-tl from-pink-950 via-indigo-950 to-indigo-950 flex w-full flex-col md:flex-col lg:flex-row justify-between md:pt-32 p-5 md:pl-40 md:pr-40 h-full gap-10 items-center'>
        <div className="flex items-center md:full lg:w-[45%]  w-full flex-col gap-10 cursor-pointer">
          <h1 className="text-3xl md:text-5xl text-center md:text-center lg:text-start lg:text-6xl font-semibold text-white">Frequently Asked <br />Questions</h1>
          <h2 className='text-sm text-center md:text-center lg:text-start text-white'>Lorem, ipsum Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Praesentium, blanditiis. dolor sit amet  .</h2>
          <button className='bg-yellow-400 text-sm md:text-lg hover:bg-yellow-200 w-full md:w-1/3 h-[50px] rounded-md font-semibold'>Add More</button>
        </div>

        <div className='w-full md:w-full lg:w-[60%] flex flex-col gap-10'>
          <div className='flex flex-col gap-10 p-7 cursor-pointer'>
            {questions.map((question, index) => (
              <div key={index} className='flex rounded-xl justify-between border p-8 gap-5'>
                {selectedItem === index ? (
                  <div className='flex flex-col rounded-xl justify-between gap-5'>
                    <h1 className='text-white hover:text-gray-400 text md:text-3xl text-xl'>{question.question}</h1>
                    <p className='text-xl text-gray-500'>{question.answer}</p>
                  </div>
                ) : (
                  <h1 className='text-white text md:text-3xl text-xl hover:text-gray-400' onClick={() => handleAnswerClick(index)}>
                    {question.question}
                  </h1>
                )}
                <i className={`fa-solid ${selectedItem === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-white hover:text-gray-400 md:text-3xl text-xl`} onClick={() => handleAnswerClick(index)}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
