import React from 'react'
import { FaCamera, FaDesktop, FaInstagram, FaPaintBrush, FaWarehouse } from 'react-icons/fa'

export default function Products() {
  return (
    <div className='bg-black bg-opacity-80 w-full py-20 flex justify-center' id="services">
        <div className='w-9/12'>
            <h1 className='text-center text-6xl text-white font-semibold'>WHAT I DO</h1>
            <div className='text-center text-white py-10'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In aliquid nulla asperiores veniam voluptatum expedita repellendus saepe dicta. Alias, odit accusantium. Necessitatibus earum tenetur voluptatem assumenda libero exercitationem veritatis quasi, ratione quis alias maiores, praesentium voluptatibus, et eligendi vitae itaque!
            </div>
            <div className='flex w-full flex-wrap pt-10'>
              <div className='w-full sm:w-1/4 p-2'>
                <div className='w-full text-6xl justify-center text-white flex'>
                  <FaDesktop />
                </div>
                <div className='text-white p-5 text-center'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsum?
                </div>
              </div>
              <div className='w-full sm:w-1/4 p-2'>
                <div className='w-full text-6xl justify-center text-white flex'>
                  <FaCamera />
                </div>
                <div className='text-white p-5 text-center'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsum?
                </div>
              </div>
              <div className='w-full sm:w-1/4 p-2'>
                <div className='w-full text-6xl justify-center text-white flex'>
                  <FaPaintBrush />
                </div>
                <div className='text-white p-5 text-center'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsum?
                </div>
              </div>
              <div className='w-full sm:w-1/4 p-2'>
                <div className='w-full text-6xl justify-center text-white flex'>
                  <FaWarehouse />
                </div>
                <div className='text-white p-5 text-center'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsum?
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
