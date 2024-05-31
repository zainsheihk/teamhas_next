import CareerComp from "@/components/AboutContent/CareerComp";
import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";

const Page = () => {
  return (
    <main>
      <div id="gradient-bg-3">
        <Navbar />
        <CareerComp />
      </div>
      <Footer />
    </main>
  );
};

export default Page;
