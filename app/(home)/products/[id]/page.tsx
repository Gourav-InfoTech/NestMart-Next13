// "use client"
import { Product_Api } from "@/Utils/Api";
import React from "react";
// import { Product_Api } from "../../../Utils/Api";
import { use } from "react";
import Content from "./Content";

const getItem = async (id: number) => {
  let res = await fetch(`${Product_Api}/products/${id}`);
  let data = await res.json();
  return data;
};

const id = ({ params }: any) => {
  const id = params.id;

  const item = use(getItem(id));
  console.log(id);

  return (
    <div>
      <Content data={item} />
    </div>
  );
};

export default id;

// export async function getServerSideProps(context: any){
//     const { params } = context
//     const { id } = params;

//     const res = await fetch(`${Product_Api}/products/${id}`)
//     const data = await res.json();

//     return{
//         props : {data}
//     }
// }
