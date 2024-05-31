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
      ) : slug === "socialmedia" ? (
        <SocialMedia />
      ) : slug === "infographics" ? (
        <EmailDesign  />
      ) : slug === "presentationdesign" ? (
        <PresentationDesign/>
      ) : slug === "elearningdesign" ? (
        <ELearningDesign />
      ) : slug === "merchdesign" ? (
        <MerchDesign />
      ) : slug === "brandidentity" ? (
        <BrandIdentity />
      ) : slug === "webdesign" ? (
        <WebDesign />
      ) : slug === "motiongraphic" ? (
        <MotionGraphic />
      ) : slug === "animation" ? (
        <Animation />
      ) : slug === "storyboarding" ? (
        <StoryBoarding />
      ) : slug === "characterdesign" ? (
        <CharacterDesign />
      ) : slug === "2d3dmockup" ? (
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
