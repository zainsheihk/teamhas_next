import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const EmailDesign = () => {
  return (
    <>
      <div id="gradient-bg">
        <div className="service-detail-banner service-detail infographics">
          <Navbar classes={"header_center"} />
          <Banner />
        </div>
        <main className="service-page service-detail pb-200 infographics">
          <Brands />

          <div className="about">
            <div id="gradient-bg">
              <div className="container">
                <div className="box-container">
                  <VideoBox classses="left video-container" />
                  <div className="right" data-aos-duration="1000" data-aos="fade-up">
                    <h2>
                      <span className="heading-grey">Professional </span>
                      <span className="heading-gradient"> Email Design </span>
                      <span className="heading-grey">at Unbeatable Value </span>
                    </h2>
                    <p>
                      Why hustle with an in-house squad when TeamHAS Visionz
                      delivers top-tier email designs that vibe with your brand and
                      budget, all smooth and cost-effective?
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
                From Newsletters to Promotional Campaigns – TeamHAS Delivers Email
                Excellence
              </h2>
              <p>
                TeamHAS Visionz is where email design meets street smarts slick,
                responsive, and tuned to vibe with your audience, making sure your
                message pops on any device.
              </p>
              <p>
                At TeamHAS Visionz, we craft email designs that scream your brand
                and hustle hard – boosting opens, hooking readers, and turning
                clicks into customers, no matter the campaign.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
            </div>
          </div>
          <div className="service-inner-sec-4">
            <h2 className="">Email Design Mastery: Our Four-Step Approach</h2>
            <div className="statics-wrapper">
              <div className="statics" data-aos-duration="200" data-aos="fade-up">
                <h3>
                  <span className="">
                    {" "}
                    <span className="heading-gradient">Aligning</span> with Your Vision{" "}
                  </span>
                </h3>
                <p>
                  We begin by grasping your brand, audience, and email goals to
                  ensure our designs complement your strategy.
                </p>
              </div>

              <div className="statics" data-aos-duration="300" data-aos="fade-up">
                <h3>
                  <span className="">
                    Crafting Your <span className="heading-gradient">Visual</span> Story
                  </span>
                </h3>
                <p>
                  Our team crafts creative concepts, focusing on layouts, colors,
                  and typography to amplify your message and engage your audience.
                </p>
              </div>

              <div className="statics" data-aos-duration="400" data-aos="fade-up">
                <h3>
                  <span className="">
                    {" "}
                    <span className="heading-gradient">Refining</span> to Perfection
                  </span>
                </h3>
                <p>
                  We refine designs with your input, ensuring each email aligns with
                  your vision and goals.
                </p>
              </div>

              <div className="statics" data-aos-duration="500" data-aos="fade-up">
                <h3>
                  <span className="">
                    Ensuring <span className="heading-gradient">Flawless</span>{" "}
                    Execution
                  </span>
                </h3>
                <p>
                  Once the design is finalized, we assist in the implementation
                  process, ensuring compatibility across various email platforms and
                  devices.
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
                      <span className="heading-grey">Redefining</span>
                      <span className="heading-gradient"> Email Communication </span>
                      <span className="heading-grey">with TeamHAS Visionz </span>
                    </h2>
                    <p>
                      TeamHAS Visionz isn't just about email design; we're in the
                      biz of crafting experiences that catch eyes and sway minds,
                      blending dope visuals with smart strategy to make your emails
                      a powerhouse of persuasion.
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

export default EmailDesign;
