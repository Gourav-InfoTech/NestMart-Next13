import Link from "next/link";
import React from "react";

const page = () => {

  const arr = [
    {
      id: 1,
    },
    {
      id: 2
    },
    {
      id: 3
    },
  ]

  return <div className="common_width section_padding"> 
    <h4>
      blog ( different layout )
      </h4>
      {
        arr.map((e,i)=>{
          return <Link href={`/blog/${e.id}`}><li><button>Blog no.{e.id}</button></li></Link>
        })
      }
    </div>
};

export default page;
