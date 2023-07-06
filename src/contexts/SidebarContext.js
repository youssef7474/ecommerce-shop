import React from 'react';
import { useState,createContext } from 'react';


export const sidebarContext = createContext();


const SidebarProvider = ({children}) => {


  const [isOpen,setIsOpen]=useState(false)


  const handelClose=()=>{
    setIsOpen(false)
  }


  return <sidebarContext.Provider value={{isOpen,setIsOpen,handelClose}}>{children}</sidebarContext.Provider>
};

export default SidebarProvider;
