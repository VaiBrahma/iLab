import {  NavLink } from 'react-router-dom';
import './header.css'

export default function Headers(){

    const handleClick = ()=>{
      window.localStorage.setItem('isLoggedIn', true);
      console.log(window.localStorage.getItem('isLoggedIn'))
      const p= window.location.origin;
      window.location.href = p;
    }
  return (
    <header className='header-main'>
      <nav class="bg-white border-green-200 px-4 lg:px-6 py-2.5 dark:bg-white-500">
        <div class="flex flex-wrap justify-between items-center mx-auto w-screen  ">
          <a href="https://flowbite.com" class="flex items-center">
            <img src="" class="mr-3 h-6 sm:h-9" alt="" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">iLAB</span>
          </a>
          
          <div class="flex items-center lg:order-2">
            <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 text-[18px] dark:hover:text-white"><button onClick={handleClick}>GetAnotherLabReport</button></a>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to="/" className=" text-[18px] text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-large rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white" >Home</NavLink>
              </li>
              <li>
                <NavLink to="/labreport" className=" text-[18px] text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white">Lab Report</NavLink>
              </li>
              <li>
                <NavLink to="/bodychart" className=" text-[18px] text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white">Body Chart</NavLink>
              </li> 
              <li>
                <NavLink to="/interpreter" className=" text-[18px] text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 dark:hover:text-white">Smart Interpreter</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    )
}