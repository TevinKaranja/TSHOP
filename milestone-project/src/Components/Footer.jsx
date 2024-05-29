import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

import { FaFacebook, FaInstagram, FaLocationArrow, FaMobile } from 'react-icons/fa6'

const Footerlinks = [
    {

        title: "Home",
        link: "/#"
    },
    {

        title: "About",
        link: "/#about"
    },
    {

        title: "Contact",
        link: "/#contact"
    },
    {

        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    {/*Company details*/}
                    <div className='py-8 px-4'>
                        <a href="#"
                            className='text-primary 
                    font-semibold tracking-widest
                    text-2xl uppercase sm:text-3xl'

                        >
                            Tservices
                        </a>
                        <p className='text-gray-600 dark:text-white/70  lg:pr-24 pt-3'>
                            We are located at Rongai,and
                            you will be served by our
                            customer care team
                            if you encounter any problem
                        </p>
                        <p className='text-gray-500 mt-4'>Made with love by Tevin Karanja</p>
                        <a
                            href="https://www.youtube.com/@freecodecamp "
                            target='blank'
                            className='inline-block bg-primary/90 text-white 
                         py-2 px-4 mt-4 text-sm rounded-full'>
                            Visit our  youtube channel
                        </a>
                    </div>

                    {/*Footer links*/}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4 '>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>Important links</h1>
                            <ul className='space-y-3'>
                                {
                                    Footerlinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className='text-gray-600 hover:dark:text-white 
                                    hover:text-black
                                    duration-300'>
                                                {data.title}

                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                            <div className='py-8 px-4 '>
                                <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                                <ul className='space-y-3'>
                                    {
                                        Footerlinks.map((data, index) => (
                                            <li key={index}>
                                                <a href={data.link}
                                                    className='text-gray-600 hover:dark:text-white 
                                    hover:text-black
                                    duration-300'>
                                                    {data.title}

                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>


                            {/*Company address*/}

                            <div className='py-8 px-4 col-span-2 sm:col-auto'>


                                <div>
                                    <div className="flex items-center gap-3">
                                        <FaLocationArrow />
                                        <p>Rongai, Nairobi</p>
                                    </div>
                                    <div className='flex items-center gap-3 mt-6 '>
                                        <FaMobile />
                                        <p>+254745874030</p>
                                    </div>


                                </div>
                            
                            {/*Social links*/}
                            <div className='flex items-center gap-3 mt-6 '>
                              
                            <a href="">
                                    <FaInstagram className='text-3xl 
                                    hover:text-primary duration-300'/>
                                </a>
                                <a href="">
                                    <FaFacebook className='text-3xl 
                                    hover:text-primary duration-300'/>
                                </a>
                                <a href="">
                                    <FaLinkedin className='text-3xl 
                                    hover:text-primary duration-300'/>
                                </a>
                            </div>
                            </div>
                        </div>



                    </div>






                </div>
            </div>
        </div>
    )
}

export default Footer