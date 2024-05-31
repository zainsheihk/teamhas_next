import React from "react";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import WorkSection from "@/components/Portfolio/WorkSection";

const page = () => {
  return (
    <>
      <div id="gradient-bg-3">
        <Navbar />
        <WorkSection/>
        <Footer />
      </div>
    </>
  );
};

export default page;
