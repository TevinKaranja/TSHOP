import React from 'react'
import Heading from './Heading'
import ProductCard from './ProductCard'

import Img1 from "../../src/assets/Products/p-1.jpg"
import Img2 from "../../src/assets/Products/p-2.jpg"
import Img3 from "../../src/assets/Products/p-3.jpg"
import Img4 from "../../src/assets/Products/p-4.jpg"
import Img5 from "../../src/assets/Products/p-5.jpg"
import Img6 from "../../src/assets/Products/p-7.jpg"
import Img7 from "../../src/assets/Products/p-9.jpg"
  
const ProductsData =[
{
 id:1, 
 img: Img1,
title: "Samsung Headphone",
price: "150",
aosDelay: "0",
},
{
id:2, 
img: Img2,
title: "Iphone Watch",
price: "500",
aosDelay: "200",
},
{
    id:3, 
    img: Img3,
    title: "Infinix Goggles",
    price: "120",
    aosDelay: "400",
    },
    {
        id:4, 
        img: Img4,
        title: "Printed",
        price: "120",
        aosDelay: "600",
        },





]
const ProductsData2 =[
  {
   id:1, 
   img: Img5,
  title: "Samsung Headphone",
  price: "150",
  aosDelay: "0",
  },
  {
  id:2, 
  img: Img6,
  title: "Bass Boosted",
  price: "500",
  aosDelay: "200",
  },
  {
      id:3, 
      img: Img7,
      title: "Xiamo Headphones",
      price: "120",
      aosDelay: "400",
      },
      {
          id:4, 
          img: Img4,
          title: "Printed",
          price: "120",
          aosDelay: "600",
          },
  
  
  
  
  
  ]
const Products = () => {
  return (
    <div>
        <div className="container">
            {/*Header section*/}
            <Heading title="Our Products"
            subtitle={"Explore our Products"}/>
              {/*Body section*/}
              <ProductCard data={ProductsData} />
              <ProductCard data={ProductsData2}/>
            

            
        </div>
    </div>
  )
}

export default Products