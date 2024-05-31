import React from 'react'
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import AboutComp from '@/components/AboutContent/AboutComp';

const page = () => {
  return (
    <main>
      <div id="gradient-bg-3">
      <Navbar />
      <AboutComp />
      </div>
      <Footer />
    </main>
  )
}

export default page