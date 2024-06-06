import Footer from "@/components/Common/Footer";
import dynamic from 'next/dynamic';

const ThankYou = dynamic(() => import('../../../components/thankyou/ThankYou.jsx'), {
  ssr: false // This ensures the component is only loaded on the client-side
});

const Thankyou = () => {
  return (
    <>

       <ThankYou />
        <Footer />
    </>
  );
};

export default Thankyou;
