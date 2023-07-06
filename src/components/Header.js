import React, { useContext } from 'react';
import {sidebarContext} from "../contexts/SidebarContext"
import {CartContext} from "../contexts/CartContext"
import {BsBag} from "react-icons/bs"
import { Link } from 'react-router-dom';
import LOGO from"../img/logo.svg"
import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {

  const [isActive,setISActive]=useState(false)

  const {isOpen,setIsOpen} = useContext(sidebarContext)

  const {itemAmount} = useContext(CartContext)



  useEffect(()=>{
   
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ?setISActive(true):setISActive(false)
    })
    

  })




  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'}  fixed w-full z-10 transition-all `}>
      <div className='container mx-auto flex items-center justify-between h-full'>
      <Link to={"/"}>
        <div>
          <img className='w-[40px]' src={LOGO} alt='p'></img>
        </div>
      </Link>
      <div onClick={()=>setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
        <BsBag className='text-2xl'></BsBag>
        <div className='bg-red-500 absolute -right-2 -bottom-2text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
      </div>
      </div>
    </header>
    );
};

export default Header;
