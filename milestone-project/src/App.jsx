import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Category from './Components/Category'
import Category2 from './Components/Category2'
import Service from './Components/Service'
import Banner from './Components/Banner'
import Partners from './Components/Partners'
import  headphone from "./assets/category/headphone.png"
import Products from './Components/Products'
import Smartwatch from "../src/assets/category/smartwatch2.png"
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Popup from './Components/Popup'
import AOS from "aos";
import "aos/dist/aos.css"
const BannerData ={
  discount: "30% OFF",
  title: "Fine Smile",
  date:"16 May to 1 June 2024",
  Image:headphone,
  title2: "Air Solo Bass",
  title3: "Onetime Sale",
  title4:  "The headphones should be able to last for many days to come",
  bgColor: "#f42c37",
}
const BannerData2 ={
  discount: "30% OFF",
  title: "Time Flies",
  date:"20 May to 5 June 2024",
  Image:Smartwatch,
  title2: "Smart watch",
  title3: "Green Sale",
  title4:  "The smart watch is one of a kind only available at TServices",
  bgColor: "#2dcc6f",
}
const App = () => {
  const [OrderPopup,setOrderPopup] =React.useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!OrderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration:2000,
        easing:"ease-in-sine",
        delay:100,
        offset:100,
      }
    );
    AOS.refresh();
  }, [])
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Service/>
      <Banner data={BannerData}/>
      <Products handleOrderPopup={handleOrderPopup}/>
    
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup OrderPopup={OrderPopup}
      handleOrderPopup={handleOrderPopup}/>
      </div>
  )
}

export default App
