import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const Animation = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail animation">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main className="service-page service-detail pb-200 animation">
     <Brands />

      <div className="about">
        <div id="gradient-bg">
          <div className="container">
            <div className="box-container">
            <VideoBox classses="left video-container" />
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey"> </span>
                  <span className="heading-gradient">Top-Tier Animation, </span>
                  <span className="heading-grey">Streamlined Budgets</span>
                </h2>
                <p>
                  Why invest in an expensive in-house team when TeamHAS Visionz
                  offers expert animation services at a fraction of the cost?
                  Our team of skilled animators brings your concepts to life
                  with high-quality animations that fit your budget, ensuring a
                  perfect blend of cost-effectiveness and creative excellence.
                </p>
                <a href="../bookacall" className="btn btn-primary myBtn">
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="remote-company">
        <div className="left" data-aos="fade-right">
          <h2>
            From Explainer Videos to Animated Storytelling – TeamHAS Animates
            Your Vision
          </h2>
          <p>
            Animations have the unique ability to convey complex messages in an
            engaging and easily digestible format. At TeamHAS Visionz, we offer
            a wide range of animation styles, from traditional 2D to
            cutting-edge 3D animations, whiteboard explainers to motion
            graphics. Each style is chosen to best suit your project's needs and
            audience.
          </p>
          <p>
            Our approach to animation is deeply rooted in understanding your
            brand and message. We focus on creating animations that not only
            look great but also effectively communicate your story. Whether it's
            for marketing, education, or entertainment, our animations are
            crafted to leave a lasting impression.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">Crafting Visual Magic: Our Four-Step Animation Process</h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                <span className="heading-gradient">Storytelling</span> Begins Here
              </span>
            </h3>
            <p>
              Every great animation starts with a story. We begin by developing
              a concept that aligns with your goals, crafting a narrative that
              forms the basis of the animation.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                <span className="heading-gradient">Visualizing</span> the Story
              </span>
            </h3>
            <p>
              Once the concept is set, our artists and animators create
              storyboards and designs. This stage involves visualizing the
              narrative, setting the style, and laying out the animation flow.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Bringing the <span className="heading-gradient">Story</span> to Life
              </span>
            </h3>
            <p>
              With the storyboard as our guide, we animate the story, giving
              life to characters and ideas. This phase involves meticulous
              attention to detail, ensuring every motion contributes to the
              narrative.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                <span className="heading-gradient">Perfecting</span> the Tale
              </span>
            </h3>
            <p>
              Collaboration is key. We refine the animation based on your
              feedback, ensuring the final product perfectly encapsulates your
              message and exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
      <div className="about service-inner-sec-5">
        <div id="">
          <div className="container">
            <div className="box-container">
              <div className="left" data-aos="fade-left">
              <Image src="/imgs/service-illus-2.png" alt="service-illus2" width={600} height={600} />
              </div>
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey"></span>
                  <span className="heading-gradient">
                    Where Art Meets Innovation:{" "}
                  </span>
                  <span className="heading-grey">
                    TeamHAS Visionz’s Animation Mastery
                  </span>
                </h2>
                <p>
                  What sets TeamHAS Visionz apart in the world of animation is
                  our blend of artistic talent and technical innovation. We
                  don’t just animate; we create visual stories that resonate.
                  Our team's dedication to quality, attention to detail, and
                  understanding of the latest animation trends ensures that
                  every project we undertake is a masterpiece. Partner with us,
                  and let's bring your ideas to life with animations that
                  inform, engage, and enchant.
                </p>
                <a href="../bookacall" className="btn btn-primary myBtn">
                  <span>Talk to Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceCard />
    </main>
    </div>
  );
};

export default Animation;
