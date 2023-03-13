import BackToTop from "@/components/BackToTop";
import HomeContent from "@/components/HomeContent";
import ShopByCategory from "@/components/ShopByCategory";
import Sidebar from "@/components/sidebar/Sidebar";
import TopProducts from "@/containers/TopProducts";
import { Product_Api } from "@/Utils/Api";
import { use } from "react";
// import styled from "styled-components";
import styles from "./page.module.css";

const productsApi = async ()=>{
  const res = await fetch(Product_Api+"/products");
  const data = await res.json();
  return data
}


export default function Home() {
  const data = use(productsApi())

  return (
    <>
      <div className=" common_width section_padding">
        <div className="flex gap-[20px]">
          <Sidebar />
          <HomeContent data={data} />
        </div>
        <ShopByCategory />
        <TopProducts  data={data}/>
        <BackToTop />
      </div>
    </>
  );
}

// const TopContainer = styled.div`
//   display: flex;
//   gap: 20px;
// `;

