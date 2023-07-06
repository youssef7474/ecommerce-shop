import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext, } from 'react';


export const ProductContext=createContext();

const ProductProvider = ({children}) => {

  const [Products,setProducts]=useState([]);

  useEffect(()=>{
    const featchProducts=async()=>{
      const response= await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data)
    }
    featchProducts()
  },[])
  return <ProductContext.Provider value={{ Products }}>
    {children}
  </ProductContext.Provider>;
};

export default ProductProvider;
