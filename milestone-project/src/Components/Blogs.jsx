import React from 'react'
import Heading from './Heading'
import Img1 from "../assets/blogs/blog-1.jpg"
import Img2 from "../assets/blogs/blog-2.jpg"
import Img3 from "../assets/blogs/blog-3.jpg"
const BlogData =[
    {
        title:"How to choose a perfect smartwatch",
        subtitle:
        "Ensure the smartwatch is compatible with your smartphone to ensure seamless integration and functionality.Check if it works with your specific mobile device, whether it's iOS or Android",

        published:"May 19, 2024 by Tevin",
        Image:Img1,
    },
    {
        title:"How to choose a perfect gadget",
        subtitle:
        "Choose an operating system that aligns with your preferences and software requirements. Options include Windows, macOS, and Chrome OS, each offering unique features and compatibility with different applications. Select the OS that best suits your workflow and software needs",
        published:"May 19, 2024 by Tevin",
        Image:Img2,
    },
    {
      title:"How to choose a perfect VR headset",
      subtitle:"Evaluate the display resolution and field of view offered by the VR headset. Higher resolution and wider field of view enhance the immersive experience. Look for headsets with crisp visuals and smooth graphics for a more realistic VR environment",
      published:"May 19, 2024 by Tevin",
      Image:Img3,
    }
]
const Blogs = () => {
  return (
    <div className='my-12'> 
        <div className="container">
              {/*Header section*/}
              <Heading title="Recent News"
            subtitle={"Explore our Blogs"}/>

{/* Blog Section*/}
<div className='grid grid-cols-1 sm:grid-cols-2
md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
    {/*Blog Card*/}
    {
      BlogData.map((data) => (
        <div key={data.title} className='bg-white dark:bg-gray-900'>
          {/*Image Section*/}
          <div className='overflow-hidden rounded-2xl mb-2'>
            <img src={data.Image} alt=""
            className='w-full h-[220px] object-cover
            rounded-2xl hover:scale-105 duration-500'
            />
          </div>
    {/*Content Section*/}
    <div className='space-y-2'>
      <p className='text-xs text-gray-500'>{data.published}</p>
      <p className='font-bold line-clamp-1'>{data.title}</p>
      <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
    </div>
        </div>
      ))
    }

</div>
        </div>
    </div>
  )
}

export default Blogs