"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import WorkEmailComp from "./WorkEmailComp";

const Banner = () => {
  const { slug } = useParams();

  const parahArr = [
    `Welcome to the creative hub of TeamHAS Visionz, where we transform your brand's message into visually stunning ad creatives. Dive into a world where every advertisement is not just a design but a story that speaks directly to your audience, creating a lasting impression and driving meaningful engagement.`,
    `Step into the vibrant world of social media with TeamHAS Visionz. In an arena where every scroll counts, our tailored social media creative services are designed to make your brand not just seen, but remembered. Harness the power of visual storytelling with us and turn your social media channels into a magnet for engagement.`,
    `TeamHAS Visionz flips the script on emails, mixing eye-candy
    designs with smart strategies to amp up your engagement and turn
    your email game into a connection revolution.`,
    `Unlock the potential of your brand with TeamHAS Visionz’s
    promotional post design services. In a world where every scroll
    is a chance to connect, our team crafts promotional content that
    not only stands out but also speaks directly to the heart of
    your audience. Let us help you turn your promotional strategies
    into compelling visual stories.`,
    `Dive into the digital education revolution with TeamHAS Visionz.
    We specialize in creating e-learning designs that are not only
    informative but also engaging and interactive. Transform your
    educational content into immersive learning experiences that
    captivate learners and enhance knowledge retention.`,
    `Dive into TeamHAS Visionz's world, where packaging and merch
    aren't just pretty faces, they're strategic storytellers,
    echoing your brand's vibe in every detail.`,
    `In the symphony of the marketplace, your brand's identity is its
    unique melody. TeamHAS Visionz specializes in creating
    compelling brand identities that echo your values, resonate with
    your audience, and distinguish you from the competition. Our
    approach intertwines creativity with strategy, crafting an
    identity that is not just seen but felt and remembered.`,
    `In the digital kingdom, TeamHAS Visionz reigns with UI/UX
    designs that marry style with function, crafting intuitive
    experiences that don't just dazzle eyes but also make every
    click a breeze for your audience.`,
    `In a world where visual content reigns supreme, motion graphics
    offer a dynamic way to captivate and communicate. TeamHAS
    Visionz specializes in creating bespoke motion graphics that
    capture your brand's essence and convey your message with
    clarity and creativity. Our animations don’t just attract views;
    they create experiences and evoke emotions.`,
    `Elevate your message with the captivating power of animation. At
    TeamHAS Visionz, we specialize in creating custom animations
    that breathe life into your stories. Whether it's a complex idea
    or a simple message, our animations communicate it with clarity,
    creativity, and impact. Let us transform your vision into
    animated narratives that engage and inspire.`,
    `Dive into TeamHAS Visionz, where we turn video frames into
    tales. Our editing transforms footage into cinematic gems,
    ensuring your message resonates.`,
    `It's a storytelling journey, blending everything from digital
    wizardry to classic sketches, all to give your brand's tale that
    extra pop and connect with your crowd on a whole new level.`,
    `In the fast-paced world of design and marketing, mockups are
    essential tools that bridge imagination and reality. TeamHAS
    Visionz excels in creating high-fidelity mockup designs that
    give life to your concepts, allowing you to visualize and refine
    your products before they hit the market. Our mockups are more
    than just images; they are the first tangible step towards
    realizing your vision.`,
    `Dive into the enthralling world of comics with TeamHAS Visionz.
    Our comic creation service is where captivating stories meet
    striking visuals. We specialize in bringing narratives to life
    through the art of comics, creating engaging, vivid, and
    memorable stories that resonate with audiences of all ages.
    Whether it's graphic novels, webcomics, or storyboard art, our
    team of artists and storytellers is here to transform your ideas
    into a visual masterpiece.`
  ]

  if (slug === "adcreatives") {
    return (
      <section className="banner service-banner">
        <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/1-01.png"} alt="image_banner1" width={500} height={485} />
        <BannerDescription heading={"Ad creatives"} parah={parahArr[0]} />
        <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/2-01.png"} alt="image_banner2" width={500} height={400} />
      </section>
    );
  } else if (slug === "socialmediacreative") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/social1.png"} alt="image_banner1" width={500} height={570} />
          <BannerDescription heading={"Social Media creative"} parah={parahArr[1]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/social2.png"} alt="image_banner2" width={500} height={425} />
        </section>
    );
  } else if (slug === "emaildesign") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/email1.png"} alt="image_banner1" width={800} height={338} />
          <BannerDescription heading={"Email Design"} parah={parahArr[2]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/email2.png"} alt="image_banner2s" width={800} height={412} />
        </section>
    );
  } else if (slug === "presentationdesign") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/promotional1.png"} alt="image_banner1" width={800} height={430} />
          <BannerDescription heading={"Presentation Design"} parah={parahArr[3]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/promotional2.png"} alt="image_banner2s" width={1000} height={395} />
        </section>
    );
  } else if (slug === "elearningdesign") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/elearningdesign1.png"} alt="image_banner1" width={1000} height={420} />
          <BannerDescription heading={"E-learning Design"} parah={parahArr[4]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/elearningdesign2.png"} alt="image_banner2s" width={1000} height={420} />
        </section>
    );
  } else if (slug === "packagingandmerchdesign") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/packagingdesign1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Packaging & Merch Design"} parah={parahArr[5]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/packagingdesign2.png"} alt="image_banner2s" width={800} height={420} />
        </section>
    );
  } else if (slug === "brandidentity") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/brandidentity1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Brand identity"} parah={parahArr[6]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/brandidentity2.png"} alt="image_banner2s" width={800} height={420} />
        </section>
    );
  } else if (slug === "uianduxdesign") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/webdesign1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"UI & UX DESIGN"} parah={parahArr[7]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/webdesign2.png"} alt="image_banner2s" width={800} height={420} />
        </section>
    );
  } else if (slug === "motiongraphic") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/motiongraphic1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Motion Graphics"} parah={parahArr[8]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/motiongraphic2.png"} alt="image_banner2s" width={800} height={420} />
        </section>
    );
  } else if (slug === "animation") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/animation1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Animations"} parah={parahArr[9]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/animation2.png"} alt="image_banner2s" width={800} height={420} />
        </section>
    );
  } else if (slug === "videoproduction") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/characterdesign1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Video Production"} parah={parahArr[10]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/characterdesign2.png"} alt="image_banner2" width={800} height={420} />
        </section>
    );
  } else if (slug === "illustrations") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/infographics2.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Illustrations"} parah={parahArr[11]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/infographics1.png"} alt="image_banner2" width={800} height={420} />
        </section>
    );
  } else if (slug === "3dmodelsandmockups") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/models1.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"3D Models & Mockups"} parah={parahArr[12]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/models2.png"} alt="image_banner2" width={800} height={420} />
        </section>
    );
  } else if (slug === "comics") {
    return (
        <section className="banner service-banner">
          <BannerImages classess={"banner__left banner__left_service"} src={"/imgs/servicebanner/comics2.png"} alt="image_banner1" width={800} height={420} />
          <BannerDescription heading={"Comics"} parah={parahArr[13]} />
          <BannerImages classess={"banner__right"} src={"/imgs/servicebanner/comics1.png"} alt="image_banner2" width={800} height={420} />
        </section>
    );
  }  else {
    return null;
  }
};


const BannerImages = ({ classess, src, alt, width, height }) => {
  return (
    <div className={classess}>
      <Image src={src} alt={alt} width={width} height={height} sizes="100vw" />
    </div>
  )
}

const BannerDescription = ({ heading, parah }) => {
  return (
    <div className="container">
      <div className="main-heading-container">
        <h2 className="text-white" data-aos="fade-up">{heading}</h2>
        <p>{parah}</p>
        <WorkEmailComp btnText={"Get Started"} redirect={"/bookacall"} />
      </div>
      <div
        className="btn-container"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
    </div>
  )
}

export default Banner;
