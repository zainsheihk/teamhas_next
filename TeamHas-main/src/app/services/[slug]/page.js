"use client";
import Footer from "@/components/Common/Footer";
import SubServicePage from "@/components/Service/SubServicePage";
import Error from "next/error";
import { useParams } from "next/navigation";

const SubServices = () => {
  const { slug } = useParams();
  const pageSlugs = [
    "adcreatives",
    "socialmedia",
    "infographics",
    "presentationdesign",
    "elearningdesign",
    "merchdesign",
    "brandidentity",
    "webdesign",
    "motiongraphic",
    "animation",
    "storyboarding",
    "characterdesign",
    "2d3dmockup",
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
