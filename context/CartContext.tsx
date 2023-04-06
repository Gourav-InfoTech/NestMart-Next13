import React, { useState, createContext, useContext } from "react";

const contextCart = createContext<{
  cart: any[];
  addToCart: (s: any) => any;
  clearCart: () => any;
  removeItem: (s:number)=> any;
}>({
  cart: [],
  addToCart: (s) => {},
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

  const clearCart = () => {
    setCart([]);
  };

  return (
    <contextCart.Provider value={{ cart, addToCart, removeItem, clearCart }}>
      {children}
    </contextCart.Provider>
  );
};

export default CartContext;
