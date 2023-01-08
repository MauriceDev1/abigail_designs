import React from 'react'
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className='bg-black py-20 bg-opacity-80' id="contact">
        <div className='w-9/12 m-auto'>
            <h1 className='text-center text-6xl text-white font-semibold'>LET&#39;S GET IN TOUCH</h1>
            <div className='text-center text-white py-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aperiam ipsam sint natus fuga perspiciatis illum at, soluta aliquid sequi aut nostrum repellendus facilis voluptate excepturi laboriosam quos deserunt asperiores, ullam nihil odit itaque minima?
            </div>
            <div className='sm:w-7/12 m-auto'>
              <div className='w-full flex'>
                <div className='w-1/3 p-2'>
                  <div className='w-full justify-center flex text-white text-xl'>
                     <FaMapMarker />
                  </div>
                  <div className='text-center text-white'>
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>
                <div className='w-1/3 p-2'>
                  <div className='w-full justify-center flex text-white text-xl'>
                     <FaEnvelope />  
                  </div>
                  <div className='text-center text-white'>
                    Lorem, ipsum dolor.
                  </div>
                </div>
                <div className='w-1/3 p-2'>
                  <div className='w-full justify-center flex text-white text-xl'>
                     <FaPhone />
                  </div>
                  <div className='text-center text-white'>
                    Lorem, ipsum dolor.
                  </div>
                </div>
              </div>
              <div className='gap-3 flex flex-wrap'>
                <input type="text" name="name" className='w-full focus:outline-none p-2 bg-black border-white text-white border-b-2' placeholder='Name'/>
                <input type="email" name="email" className='w-full p-2 focus:outline-none bg-black border-white text-white border-b-2' placeholder='Email'/>
                <textarea name="message" className='w-full p-2 focus:outline-none h-48 bg-black border-white text-white border-b-2' style={{resize:'none'}} />
                <div className='w-full flex justif-center pt-5'>
                  <button className='border px-5 py-1 text-white m-auto'>SUBMIT</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
