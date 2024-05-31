import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import Contact from '@/components/AboutContent/Contact';

const page = () => {
  return (
    <main>
        <div id="gradient-bg">

      <Navbar />
        <Contact/>
        </div>
      <Footer />
    </main>
  )
}

export default page