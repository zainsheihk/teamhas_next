import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const WebDesign = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail webdesign">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main className="service-page service-detail pb-200 webdesign">
     <Brands />

      <div className="about">
        <div id="gradient-bg">
          <div className="container">
            <div className="box-container">
            <VideoBox classses="left video-container" />
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-gradient">
                    Stretch your digital reach,
                  </span>
                  <span className="heading-grey"> not your budget </span>
                </h2>
                <p>
                  TeamHAS Visionz mixes in-house creativity with outsourced
                  efficiency in UI/UX design, delivering user experiences that
                  vibe with your brand and goals, all without breaking the bank.
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
            From Concept to Interface – TeamHAS Visionz Elevates Your Digital
            Experience
          </h2>
          <p>
            TeamHAS Visionz rocks UI/UX design by vibing with what users really
            want, blending deep insights with the freshest digital trends to
            make every interaction intuitive, accessible, and straight-up
            enjoyable.
          </p>
          <p>
            We believe in designing digital experiences that are not only
            aesthetically pleasing but also highly functional.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">
          <span className="">
            Designing Excellence: Our Four-Step UI/UX Process
          </span>{" "}
        </h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                Building the <span className="heading-gradient">Foundation</span>{" "}
              </span>
            </h3>
            <p>
              We start with in-depth user research and strategy, making sure our
              designs meet real needs and business goals.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                Bringing <span className="heading-gradient">Ideas</span>to Visual
                Life
              </span>
            </h3>
            <p>
              Our designers craft appealing, intuitive interfaces, then
              prototype to refine the user experience effectively.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Refining for <span className="heading-gradient">Perfection</span>{" "}
              </span>
            </h3>
            <p>
              We iterate based on user tests and client feedback, optimizing the
              design for the best user experience.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                Launch with <span className="heading-gradient"> Confidence</span>
              </span>
            </h3>
            <p>
              After finalizing the design, we help with implementation, ensuring
              seamless UI/UX integration and functionality.
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
                  <span className="heading-grey"> </span>

                  <span className="heading-grey">
                    Redefining <span className="heading-gradient"> Digital</span>{" "}
                    Interactions: Why TeamHAS Visionz’s UI/UX Design Stands Out
                  </span>
                </h2>
                <p>
                  TeamHAS Visionz remixes UI/UX into a vibe, blending artistry
                  with user insights to forge digital journeys that are not just
                  intuitive but wildly engaging and stick in the memory,
                  smashing norms and tuning into user vibes.
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

export default WebDesign;
