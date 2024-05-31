import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import PricingSection from "@/components/Pricing/PricingSection";
import React from "react";

const page = () => {
  return (
    <>
      <div id="gradient-bg-3">
        <Navbar />
        <PricingSection />
        <Footer />
      </div>
    </>
  );
};

export default page;
