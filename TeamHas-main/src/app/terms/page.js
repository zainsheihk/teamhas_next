import React from 'react'
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import Terms from '@/components/Terms&Policy/Terms';

const Page = () => {
  return (
    <main>
      <div id="gradient-bg-3">
        <Navbar classes='header_center'  />
        <Terms />
      </div>
      <Footer />
    </main>
  );
}

export default Page