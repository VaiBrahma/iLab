import React from 'react'
import './Error.css'
import Lottie from 'lottie-react';
import animationData from '../../../public/lottie-animation/error.json';


const Error = () => {

    const handleClick = () => {
        window.localStorage.setItem("isLoggedIn", true);
        console.log(window.localStorage.getItem("isLoggedIn"));
        const p = window.location.origin;
        window.location.href = p;
      };

  return (
    <div className='absolute top-0 right-0 h-screen w-screen z-1000 bg-white'>
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <Lottie animationData={animationData} className='h-[30rem]'/>
        <div className="message">404! NO DATA FOUND</div>
        <button onClick={handleClick} className=' bg-[#ffffff] px-4 h-10  font-bold rounded-md text-sm hover:bg-[#0000000d] active:scale-110 transition-all m-1 text-[black] p-1 border-[#00000040] border-[1px] shadow-md' >Get Another Report</button>
        
    </div>
    </div>
  )
}

export default Error