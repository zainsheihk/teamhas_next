import ApplyNow from "@/components/AboutContent/ApplyNow";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import React from "react";

const Page = () => {
  return (
    <main>
      <div id="gradient-bg">
        <Navbar />
        <ApplyNow />
      </div>
      <Footer isFooterBanner={false} />
    </main>
  );
};

export default Page;
