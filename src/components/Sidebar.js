import React, { useContext } from 'react';
import {IoMdArrowForward} from "react-icons/io"
import {FiTrash} from "react-icons/fi"
import CartItem from "../components/CartItem"

import {sidebarContext} from "../contexts/SidebarContext"
import {CartContext} from "../contexts/CartContext"
import { Link } from 'react-router-dom';

const Sidebar = () => {


  const {isOpen,handelClose} = useContext(sidebarContext)

  const {cart,clearCart,total,itemAmount} = useContext(CartContext)


  const cartItems= cart.map((el)=>{
    return(
      <div >
        <CartItem el={el}></CartItem>
      </div>

    )
  })



  


  return( 
    <div className={`${isOpen?"right-0":"-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}>
      

      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm  font-semibold'>shopping bag ({itemAmount})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl' onClick={handelClose}></IoMdArrowForward>
        </div>
      </div>
    

      <div className=' flex flex-col gap-y-2 h-[400px]  overflow-y-auto overflow-x-hidden border-b'>
        {cartItems}
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

        

       <Link to={"/Cart"} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium '>view cart</Link>
      
      </div>

      </div>
    );
};

export default Sidebar;
