"use client";
import { useCtx } from "@/context/CartContext";
import { color } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { CgPushLeft } from "react-icons/cg";
import styled from "styled-components";
import Checkout from "./Checkout";

const Cart = () => {
  const { cart,removeItem,clearCart } = useCtx();

  return (
    <>
    <div className="flex gap-10 common_width section_padding"> 
      <CartDiv className="">
        <div className="cart_list">
          <h3 className="text-[48px] font-[700] text-[#253d4e] text-left"> Your Cart </h3>
          <div className="flex justify-between font-[700] text-[#7e7e7e]">
            <p>products in your cart</p>
            <button onClick={clearCart} className="flex items-center text-[#b6b6b6]">
              <AiOutlineDelete />
              <span className="ml-3"> Clear Cart</span>
            </button>
          </div>
        </div>

      <table>
        <thead>
          <tr>
          <td><input type={"checkbox"}/> </td>
            <td>Product</td>
            <td></td>
            <td>Unit Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item,id)=>{
              return(
                <tr key={id}>
                  <td><input type={"checkbox"}/> </td>
                  <td><div className="img_div">
                    <img src={item?.image} alt="pdImage" />
                    </div></td>
                  <td>
                    <div className="titleCell">
                      <p>{item?.title}</p>
                      <p>⭐⭐⭐⭐⭐ {item?.rating.rate}</p>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>Quantity</td>
                  <td>{item.price}</td>
                  <td><button onClick={()=>removeItem(item.id)}><AiOutlineDelete/></button></td>
                </tr>
              )
            })
          }

        </tbody>
      </table>

      <div className="navigation_btns">

        <hr className="m-5"/>

        <Link href={"/"}>
          <button className="flex items-center gap-3 text-white text-sm rounded-md px-6 py-3 font-bold bg-[#3bb77e]">
            <CgPushLeft />
          <span>Continue Shopping</span>
          </button>
          </Link>
      </div>
      </CartDiv>
      <Checkout />
      </div>
    </>
  );
};

export default Cart;

const CartDiv = styled.div`
font-family: "Quicksand";
min-width: 70%;

.cart_list{
  text-align: center;
}

tr{
  border: 2px solid #ececec;
  border-radius: 30px;
}

thead tr td{
  padding: 10px;
}

tbody tr td{
  padding: 30px 20px;
}
  
table{
  width: 100%;
}

table .img_div{
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: auto;
}

.img_div img{
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  border: 1px solid #ececec;
  padding: 10px;
  border-radius: 10px;
}

.titleCell{
  text-align: left;
}
`
