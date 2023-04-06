import React from 'react'
import Appbar from "@/components/Appbar";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar";

const layout = ({children}: any) => {
  return (
    <div>
      <Appbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default layout





