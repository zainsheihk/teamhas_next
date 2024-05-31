import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const PresentationDesign = () => {
  return (
    <>
      <div id="gradient-bg">
        <div className="service-detail-banner service-detail presentationdesign">
          <Navbar classes={"header_center"} />
          <Banner />
        </div>
        <main className="service-page service-detail pb-200 promotional">
          <Brands />

          <div className="about">
            <div id="gradient-bg">
              <div className="container">
                <div className="box-container">
                  <VideoBox classses="left video-container" />
                  <div className="right" data-aos-duration="1000" data-aos="fade-up">
                    <h2>
                      <span className="heading-grey"></span>
                      <span className="heading-gradient">Superior Creativity,</span>
                      <span className="heading-grey"> Fraction of In-House Costs</span>
                    </h2>
                    <p>
                      Gain the edge in promotional content without the overheads of
                      an in-house design team. TeamHAS Visionz offers you access to
                      a pool of creative talent, delivering high-impact promotional
                      posts at a cost that's kinder to your budget. Experience the
                      efficiency of external expertise with the commitment of an
                      in-house team.
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
                Elevate Your Brand, Transform Your Posts - TeamHAS Visionz It.
              </h2>
              <p>
                In the dynamic world of digital marketing, versatility is key. Our
                team at TeamHAS Visionz specializes in creating a range of
                promotional posts, from the quick charm of Instagram stories to the
                comprehensive branding of YouTube videos. We understand the language
                of each platform, ensuring your message hits the mark every time.
              </p>
              <p>
                Our approach blends creative flair with strategic thinking,
                resulting in promotional posts that do more than just look good—they
                work. By combining engaging visuals with targeted messaging, we
                ensure that your promotional efforts yield tangible results, from
                increased engagement to boosted sales.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
            </div>
          </div>
          <div className="service-inner-sec-4">
            <h2 className="">
              Crafting Your Promotional{" "}
              <span className="heading-gradient">Success</span> Step by Step
            </h2>
            <div className="statics-wrapper">
              <div className="statics" data-aos-duration="200" data-aos="fade-up">
                <h3>
                  <span className="">
                    Laying the <span className="heading-gradient">Groundwork</span>
                  </span>
                </h3>
                <p>
                  Every successful post begins with a plan. We start by
                  understanding your brand's goals and target audience to craft a
                  strategy that guides our creative process.
                </p>
              </div>

              <div className="statics" data-aos-duration="300" data-aos="fade-up">
                <h3>
                  <span className="">
                    Bringing <span className="heading-gradient">Ideas</span> to Life
                  </span>
                </h3>
                <p>
                  Our designers translate strategy into visually appealing designs,
                  using their expertise to create promotional posts that resonate
                  with your audience and reflect your brand identity.
                </p>
              </div>

              <div className="statics" data-aos-duration="400" data-aos="fade-up">
                <h3>
                  <span className="">
                    Refining to <span className="heading-gradient">Perfection</span>
                  </span>
                </h3>
                <p>
                  Your input is invaluable. We collaborate closely with you,
                  incorporating your feedback to fine-tune the designs, ensuring
                  they align perfectly with your vision and objectives.
                </p>
              </div>

              <div className="statics" data-aos-duration="500" data-aos="fade-up">
                <h3>
                  <span className="">
                    Making an <span className="heading-gradient">Impact</span>
                  </span>
                </h3>
                <p>
                  With the designs perfected, we prepare your promotional posts for
                  launch. Our team supports you in deploying them effectively across
                  your chosen platforms, maximizing their impact.
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
                      <span className="heading-grey">
                        {" "}
                        Elevating Promotional Posts with the{" "}
                      </span>
                      <span className="heading-gradient"> TeamHAS Visionz Edge</span>
                      <span className="heading-grey"> Unique Touch</span>
                    </h2>
                    <p>
                      At TeamHAS Visionz, we don’t just create promotional posts; we
                      create connections. What sets us apart is our holistic
                      approach, combining cutting-edge design with insightful
                      marketing strategies. Our posts are crafted not just to be
                      seen but to be felt, driving engagement and building lasting
                      relationships between your brand and its audience. Join us,
                      and let's transform your promotional vision into captivating
                      visual stories that not only reach but resonate with your
                      audience.
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
    </>
  );
};

export default PresentationDesign;
