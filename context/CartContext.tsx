import React, { useState, createContext, useContext } from "react";

const contextCart = createContext<{
  cart: any[];
  addToCart: (s: any) => any;
  useCtx: () => any;
  clearCart: () => any;
  removeItem: (s:number)=> any;
}>({
  cart: [],
  addToCart: (s) => {},
  useCtx: () => {},
  clearCart: () => {},
  removeItem: (s)=>{},
});

export const useCtx = () => {
  return useContext(contextCart);
};

const CartContext = ({ children }: any) => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart((prev: any) => [...prev, item]);
  };

  const removeItem = (id: number) => {
    setCart(prev=> prev.filter((el,indx)=> el.id !== id ))
  };

  // const removeItem = (id: number) => {
  //   setCart(cart.filter((i)=>(i.id !== id)))
  // }


  const clearCart = () => {
    setCart([]);
  };

  return (
    <contextCart.Provider value={{ cart, addToCart, removeItem, clearCart, useCtx }}>
      {children}
    </contextCart.Provider>
  );
};

export default CartContext;
