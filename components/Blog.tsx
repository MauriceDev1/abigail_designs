import React from 'react'

export default function Blog() {
  return (
    <div className='bg-gray-50 w-full py-20 flex justify-between' id="blog">
        <div className='w-9/12 m-auto'>
            <h1 className='text-center text-6xl text-gray-500 font-semibold'>My BLOG</h1>
            <div className='flex w-full pt-10'>
              <div className='w-1/4 p-2'>
                <div className='w-full bg-gray-300 h-72'>
                  
                </div>
              </div>
              <div className='w-1/4 p-2'>
                <div className='w-full bg-gray-300 h-72'>
                  
                </div>
              </div>
              <div className='w-1/4 p-2'>
                <div className='w-full bg-gray-300 h-72'>
                  
                </div>
              </div>
              <div className='w-1/4 p-2'>
                <div className='w-full bg-gray-300 h-72'>
                  
                </div>
              </div>
            </div>
            <div className='w-full flex justify-center pt-10'>
                <button className='border border-red-500 px-5 py-1 text-red-500'>READ OUR BLOG</button>
            </div>
        </div>
    </div>
  )
}
