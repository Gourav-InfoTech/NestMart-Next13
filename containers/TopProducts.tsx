"use client"
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopProductCard from "../components/TopProductCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const topItemVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 100 },
};

const TopProducts = ({ data }: any) => {
  const [topItems, setTopItems] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [women, setWomen] = useState([]);
  const [men, setMen] = useState([]);

  const [TPref, inView] = useInView({
    triggerOnce: true
  });


  useEffect(() => {
    setTopItems(data);
  }, []);

  useEffect(() => {
    setElectronics(topItems.filter((el: any) => el.category === "electronics"));
    setWomen(topItems.filter((el: any) => el.category === "women's clothing"));
    setMen(topItems.filter((el: any) => el.category === "men's clothing"));
  }, [topItems]);

  return (
    <TopProductsDiv
      ref={TPref}
      animate={inView ? "visible" : "hidden"}
      variants={topItemVariant}
      initial="hidden"
      className="flex common_width "
    >
      <TopProductCard title={"Top Selling"} data={electronics} />
      <TopProductCard title={"Trending Products"} data={women} />
      <TopProductCard title={"Recently added"} data={men} />
    </TopProductsDiv>
  );
};

export default TopProducts;

const TopProductsDiv = styled(motion.div)``;


// for complex animation

  // const [toBottom, setToBottom] = useState(true);
  // const scrollY = useRef(0);

  // const pageYscroll = () => {
  //   if (scrollY.current > window.pageYOffset) {
  //     setToBottom(false);
  //   } else {
  //     setToBottom(true);
  //   }
  //   scrollY.current = window.pageYOffset;
  // };

  // useEffect(() => {
  //   window?.addEventListener("scroll", pageYscroll);

  //   return () => {
  //     window?.removeEventListener("scroll", pageYscroll);
  //   };
  // }, []);

  // console.log(toBottom);

  // useEffect(() => {
  //   if (toBottom) {
  //     controls.start("visible");
  //   } else if (!toBottom && !inView) {
  //     controls.start("hidden");
  //   }
  // }, [inView, setToBottom]);
