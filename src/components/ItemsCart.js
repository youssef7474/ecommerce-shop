import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {CartContext} from "../contexts/CartContext"
import { BsEyeFill  } from 'react-icons/bs';

const ItemsCart = ({el}) => {

    const {removeFromCart,increaseAmount,decreaseAmount} =useContext(CartContext)


    const {id,image,category,title,price,amount}=el

  return (
    <div className='mb-5'>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='p'></img> 
            </div>
        </div>
        

        <div className='absolute top-0   p-2 flex justify-between gap-x-28  '>
        <button onClick={()=>removeFromCart(id)}  >
          <div className='flex justify-center items-center text-white h-12 w-12 bg-red-500'>
            <IoMdClose className='text-3xl'></IoMdClose>
          </div>
        </button>

        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl' >
          <BsEyeFill></BsEyeFill>
        </Link>
      </div>


    </div>


    <div>
    <div className='text-sm capitalize text-gray-500 mb-1' >{category}</div>
    
    <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-1'>{title}</h2>
    </Link>



     <div className=' flex gap-x-2 h-[36px] text-sm'>
            

              <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
              
                <div onClick={()=>decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                  <IoMdRemove></IoMdRemove>
                </div>

                <div className='h-full flex justify-center items-center px-2'>
                  {amount}
                </div>

                <div onClick={()=>increaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
                  <IoMdAdd></IoMdAdd>
                </div>

              </div>

              <div className='flex flex-1 items-center justify-around'>
                <p className='font-semibold'>{price} $</p>
              </div>

              <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                {` ${parseFloat(price*amount).toFixed(2)}`}
                <p className='ml-1 text-green-700'> $</p>
              </div>


            </div>




  </div>


    </div>
  );
}

export default ItemsCart;
