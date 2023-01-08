import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

export default function About() {
  return (
    <div className='flex w-full py-20 justify-center' id="about">
        <div className='w-10/12'>
            <h1 className='text-center text-6xl text-gray-500 font-semibold'>WHO AM I</h1>
            <div className='flex w-6/12 py-10 justify-between m-auto'>
                <div className='w-40 h-40 rounded-full border border-gray-400'>
                    
                </div>
                <div className='w-40 h-40 rounded-full border border-gray-400'>
                    
                </div>
                <div className='w-40 h-40 rounded-full border border-gray-400'>
                    
                </div>
            </div>
            <div className='w-10/12 text-center m-auto text-gray-500'>
            
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &#34;de Finibus Bonorum et Malorum&#34; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &#34;Lorem ipsum dolor sit amet..&#34;, comes from a line in section 1.10.32.

            </div>
            <div className='flex w-10/12 sm:w-[16vw] pt-10 m-auto justify-between'>
                <div className='w-8 sm:w-10 flex h-8 sm:h-10 rounded-full border border-pink-400'>
                    <div className='m-auto text-pink-400'>
                       <FaFacebookF />   
                    </div>
                </div>
                <div className='w-8 sm:w-10 flex h-8 sm:h-10 rounded-full border border-pink-400'>
                    <div className='m-auto text-pink-400'>
                       <FaTwitter />   
                    </div>
                </div>
                <div className='w-8 sm:w-10 flex h-8 sm:h-10 rounded-full border border-pink-400'>
                    <div className='m-auto text-pink-400'>
                       <FaInstagram />   
                    </div>
                </div>
                <div className='w-8 sm:w-10 flex h-8 sm:h-10 rounded-full border border-pink-400'>
                    <div className='m-auto text-pink-400'>
                       <FaTiktok />   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
