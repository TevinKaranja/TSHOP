import React from 'react'
import Image1 from "../assets/category/console.png"
import Image2 from "../assets/category/speaker.png"
import Image3 from "../assets/category/reality.png"
import Button from './Button'
const Category2 = () => {
  return (
    <div className='py-8'>
<div className='container'>
    <div className='grid grid-cols-1 sm:grid-cols-2
    lg:grid-cols-4 gap-8'>
 {/*first col*/}

 <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-brandGreen
        90 to-black/90 text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='space-y-2 mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Speaker</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-brandGreen"}
                    textColor={"text-brandBlue"}
                    />
                </div>
            </div>
            <img src={Image2} alt="" 
            className='w-[120px] absolute top-1/2 -translate-y-1/2 -right-0'/>
        </div>

        {/*second col*/}
        <div className='py-10 pl-5 bg-gradient-to-br from-primary/90
         to-primary text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Glasses</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                    />
                </div>
            </div>
            <img src={Image3} alt="" 
            className='w-[200px] absolute  -right lg:top-[40px]'/>
        </div>
        {/*third col*/}
        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow
        90 to-brandYellow text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Console</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
                    />
                </div>
            </div>
            <img src={Image1} alt="" 
            className='w-[320px] absolute -right lg:top-[40px]'/>
        </div>
     
    </div>
    </div>    
    </div>
  )
}

export default Category2 