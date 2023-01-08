import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Hero() {
  return (
    <div className='flex bg-gray-100 w-full h-screen' id="home" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/06/17/09/54/woman-1462986_1280.jpg)',backgroundSize:'cover'}}>
      <div className='fixed w-full py-2 sticky-top bg-black bg-opacity-50'>
        <div className='w-10/12 m-auto flex  justify-between items-center'>
          <div className='text-white'>
            <h1 className='text-3xl'>AD</h1>
          </div>
          <div className='hidden sm:block w-6/12'>
            <ul className='flex w-full justify-between text-white'>
              <a href="#home"><li>Home</li></a>
              <a href="#about"><li>About</li></a>
              <a href="#services"><li>Services</li></a>
              <a href="#home"><li>Products</li></a>
              <a href="#blog"><li>Blog</li></a>
              <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
          <div className='sm:hidden'>
            <FaBars className='text-white text-2xl' />
          </div>
        </div>
      </div>
      <div className='relative w-8/12 m-auto'>
        <div className='flex w-36 sm:w-56 h-36 sm:h-56 border border-white border-4 m-auto rounded-full my-5 sm:my-10'>
          <h1 className='text-7xl sm:text-9xl m-auto text-white'>AD</h1>
        </div>
        <div className='w-full'>
          <h1 className='text-4xl sm:text-6xl font-semibold text-white text-center'>WELCOME TO ABIGAILS DESIGNS</h1>
        </div>
        <div className='w-full text-center text-lg sm:text-xl text-white py-5 sm:py-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum obcaecati dolor unde facere esse nesciunt voluptatem, delectus aspernatur pariatur! Voluptatem corrupti eaque delectus eveniet perspiciatis nemo libero id illo voluptatibus!
        </div>
        <div className='justify-center w-full flex'>
          <a href="#contact"><button className='border px-5 border-white text-white py-2'>CONTACT ME</button></a>
        </div>
      </div>
    </div>
  )
}
