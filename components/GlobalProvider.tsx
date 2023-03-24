"use client"
import CartContext from '@/context/CartContext';
import React from 'react';

const GlobalProvider = ({children}: any) => {
  return (
    <>
    <CartContext>
    {children}
    </CartContext>
    </>
  )
}

export default GlobalProvider