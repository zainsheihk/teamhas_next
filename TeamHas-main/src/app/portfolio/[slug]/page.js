"use client";
import Footer from "@/components/Common/Footer";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import dynamic from "next/dynamic";
import Error from "next/error";
import { useParams } from "next/navigation";

const DynamicSubPortfolio = dynamic(
  () => import("@/components/Portfolio/SubPortfolio"),
  {
    loading: () => <Loader />,
  }
);

const SubPortfolio = () => {
  const { slug } = useParams();
  const pageSlugs = [
    "clarocasestudy",
    "delice",
    "eli5",
    "frankgreen",
    "mahalaxmi",
    "fummo",
    "goldenduckco",
    "growtech",
    "ohayoai",
    "hyden3d",
    "shao",
    "veja",
    "vegemite",
  ];

  if (pageSlugs.includes(slug)) {
    return (
      <div id="gradient-bg-3">
        <Navbar classes="header-scrolled" />
        <DynamicSubPortfolio slug={slug} />
        <Footer isFooterBanner={false} />
      </div>
    );
  } else {
    return <Error statusCode={400} />;
  }
};

export default SubPortfolio;
