import Footer from "@/components/Common/Footer";
import Navbar from "@/components/Common/Navbar";
import BookacallComp from "@/components/AboutContent/BookacallComp";

const Page = () => {
  return (
    <main>
      <Navbar />
        <BookacallComp/>
      <Footer isFooterBanner={false}/>
    </main>
  )
}

export default Page