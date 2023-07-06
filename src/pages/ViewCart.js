import React, { useContext } from 'react';
import {CartContext} from "../contexts/CartContext"
import ItemsCart from "../components/ItemsCart"
import { FiTrash } from 'react-icons/fi';

const ViewCart = () => {
    const {cart,total,clearCart} =useContext(CartContext)
  

    if(cart.length===0)
    {
      return(
        <section className='h-screen flex justify-center items-center uppercase'>no product yet</section>
      )
    }
  

 

    const cartsItems= cart.map((el)=>{
        return(
            <ItemsCart el={el} key={el.id}></ItemsCart>
        )
    })


  return (
    <section className='mt-20'>
        <h1 className='flex items-center justify-center mb-8 text-[70px] leading-[1.1]   uppercase text-sm  font-semibold'>my cart</h1>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                {cartsItems}
            </div>
            

            <div className=' flex flex-col gap-y-3 py-4 mt-4'>
            <div className=' flex w-full justify-between items-center'>
              <div className='uppercase font-semibold'>
                <span className='mr-2'>total:</span>{parseFloat(total).toFixed(2)}$
              </div>
    
    
              <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                <FiTrash></FiTrash>
              </div>
    
    
            </div>
    
            
    
          
          </div>



        </div>
    </section>
  );
}

export default ViewCart;
