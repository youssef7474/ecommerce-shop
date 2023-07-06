import React from 'react';
import { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext"
import Product from "../components/Product"
import Hero from"../components/Hero" 

const Home = () => {
  const { Products } = useContext(ProductContext)
  

  const filteredProducts =Products.filter((item)=>{
    return(
      item.category==="men's clothing"||item.category==="women's clothing"
    )
  })




  const product = filteredProducts.map((el)=>{
    return(
      <Product key={el.id} el={el}></Product>
    )
  })

  if(Products.length===0)
  {
    return(
      <section className='h-screen flex justify-center items-center'>Loading.....</section>
    )
  }


  
  return(
      <div>
      <Hero></Hero>
        <section className='mt-12'>
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
              {product}
            </div>
          </div>
        </section>
      </div>
  )
};

export default Home;
