import React from "react";
import Banner from "../Common/Banner";
import AddCreative from "./SubPages/AddCreative";
import SocialMedia from "./SubPages/SocialMedia";
import EmailDesign from "./SubPages/EmailDesign";
import PresentationDesign from "./SubPages/PresentationDesign";
import ELearningDesign from "./SubPages/ELearningDesign";
import MerchDesign from "./SubPages/MerchDesign";
import BrandIdentity from "./SubPages/BrandIdentity";
import WebDesign from "./SubPages/WebDesign";
import MotionGraphic from "./SubPages/MotionGraphic";
import Animation from "./SubPages/Animation";
import StoryBoarding from "./SubPages/StoryBoarding";
import CharacterDesign from "./SubPages/CharacterDesign";
import Mockup from "./SubPages/Mockup";
import Comics from "./SubPages/Comics";

const SubServicePage = ({slug}) => {
  return (
    <>
      {slug === "adcreatives" ? (
        <AddCreative />
      ) : slug === "socialmediacreative" ? (
        <SocialMedia />
      ) : slug === "emaildesign" ? (
        <EmailDesign  />
      ) : slug === "presentationdesign" ? (
        <PresentationDesign/>
      ) : slug === "elearningdesign" ? (
        <ELearningDesign />
      ) : slug === "packagingandmerchdesign" ? (
        <MerchDesign />
      ) : slug === "brandidentity" ? (
        <BrandIdentity />
      ) : slug === "uianduxdesign" ? (
        <WebDesign />
      ) : slug === "motiongraphic" ? (
        <MotionGraphic />
      ) : slug === "animation" ? (
        <Animation />
      ) : slug === "videoproduction" ? (
        <StoryBoarding />
      ) : slug === "illustrations" ? (
        <CharacterDesign />
      ) : slug === "3dmodelsandmockups" ? (
        <Mockup />
      ) : slug === "comics" ? (
        <Comics />
      ) : (
        <></>
      )}
    </>
  );
};

export default SubServicePage;
