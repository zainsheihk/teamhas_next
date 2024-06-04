"use client";
import Footer from "@/components/Common/Footer";
import SubServicePage from "@/components/Service/SubServicePage";
import Error from "next/error";
import { useParams } from "next/navigation";

const SubServices = () => {
  const { slug } = useParams();
  const pageSlugs = [
    "adcreatives",
    "socialmediacreative",
    "emaildesign",
    "presentationdesign",
    "elearningdesign",
    "packagingandmerchdesign",
    "brandidentity",
    "uianduxdesign",
    "motiongraphic",
    "animation",
    "videoproduction",
    "illustrations",
    "3dmodelsandmockups",
    "comics",
  ];

  if (pageSlugs.includes(slug)) {
    return (
      <>
        <SubServicePage slug={slug} />
        <Footer />
      </>
    );
  } else {
    return <Error statusCode={400} />;
  }
};

export default SubServices;
