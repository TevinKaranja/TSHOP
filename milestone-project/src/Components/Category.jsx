import React from 'react'
import Image1 from "../assets/category/earphone.png"
import Image2 from "../assets/category/watch.png"
import Image3 from "../assets/category/lap.png"
import Button from './Button'
const Category = () => {
  return (
    <div className='py-8'>
<div className='container'>
    <div className='grid grid-cols-1 sm:grid-cols-2
    lg:grid-cols-4 gap-8'>
        {/*first col*/}
        <div className='py-10 pl-5 bg-gradient-to-br from-black
        90 to-black/70 text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Earphone</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    />
                </div>
            </div>
            <img src={Image1} alt="" 
            className='w-[320px] absolute bottom-0'/>
        </div>
        {/*second col*/}
        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow
        90 to-brandYellow text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Watch</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
                    />
                </div>
            </div>
            <img src={Image2} alt="" 
            className='w-[320px] absolute -right lg:top-[40px]'/>
        </div>
        {/*third col*/}

<div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-brandBlue
        90 to-brandBlue/90 text-white rounded-3xl relative h-[320px]
        flex items-end'>
            <div>
                <div className='space-y-2 mb-4'>
                    <p className='mb-[2px] text-white'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                    <p className='text-4xl xl:text-5xl
                    font-bold opacity-20'>Laptop</p>
                    <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandBlue"}
                    />
                </div>
            </div>
            <img src={Image3} alt="" 
            className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0'/>
        </div>


    </div>
    </div>    
    </div>
  )
}

export default Category