import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const MotionGraphic = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail motiongraphic">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main className="service-page service-detail pb-200 motiongraphic">
      <Brands />
      <div className="about">
        <div id="gradient-bg">
          <div className="container">
            <div className="box-container">
            <VideoBox classses="left video-container" />
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey"></span>
                  <span className="heading-gradient"> Animating Your Vision </span>
                  <span className="heading-grey">
                    {" "}
                    without the In-House Expense
                  </span>
                </h2>
                <p>
                  Get the benefit of having a full-scale motion graphics team at
                  your disposal without the overheads of an in-house unit.
                  TeamHAS Visionz offers premium motion graphics services at
                  competitive rates, providing you with innovative animations
                  that fit your budget and exceed your expectations.
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
            From Explainer Videos to Animated Branding – TeamHAS Sets It in
            Motion
          </h2>
          <p>
            In today’s fast-paced digital landscape, motion graphics are a key
            player in storytelling and brand representation. At TeamHAS Visionz,
            we create everything from explainer videos and product animations to
            animated logos and social media content, ensuring each frame is
            crafted to perfection.
          </p>
          <p>
            Our approach is tailored to your needs, blending artistic design
            with strategic messaging. We leverage the latest tools and trends in
            animation to produce motion graphics that are not just visually
            stunning but also aligned with your marketing goals, enhancing
            engagement and comprehension.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">Animating Your Ideas: Our Step-by-Step Approach</h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                Laying the <span className="heading-gradient">Narrative</span>{" "}
                Groundwork
              </span>
            </h3>
            <p>
              We start by understanding your vision and objectives. This initial
              phase involves brainstorming ideas and developing a narrative that
              will form the backbone of your motion graphics.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                Bringing the <span className="heading-gradient">Concept</span> to
                Life
              </span>
            </h3>
            <p>
              Our talented designers and animators take the helm, transforming
              concepts into engaging animations. We focus on creating fluid,
              eye-catching graphics that communicate your message effectively.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Refining for <span className="heading-gradient">Impact</span>
              </span>
            </h3>
            <p>
              Collaboration is key to perfection. We work closely with you,
              fine-tuning the animations based on your feedback to ensure the
              final product aligns perfectly with your vision.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                Your Story, <span className="heading-gradient">Ready</span> to Share
              </span>
            </h3>
            <p>
              Upon completion, we deliver the motion graphics in your preferred
              format, ready for use across various platforms. We also provide
              ongoing support for any future adaptations or enhancements.
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
                    Dynamic, Distinct, TeamHAS: 
                  </span>
                  <span> </span>
                  <span className="heading-grey">
                    Why Our Motion Graphics Shine
                  </span>
                </h2>
                <p>
                  What makes TeamHAS Visionz's motion graphics services stand
                  out is our fusion of art and technology with storytelling. We
                  don’t just animate; we create visual narratives that resonate
                  with audiences. Our commitment to cutting-edge design and
                  attention to detail ensures that every animation is a
                  masterpiece in motion. With TeamHAS Visionz, you’re not just
                  getting motion graphics; you're investing in a visual story
                  that elevates your brand and captivates your audience.
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

export default MotionGraphic;
