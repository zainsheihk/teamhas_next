import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const MerchDesign = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail merchdesign">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
      <main className="service-page service-detail pb-200 merchandise">
        <Brands />

        <div className="about">
          <div id="gradient-bg">
            <div className="container">
              <div className="box-container">
                <VideoBox classses="left video-container" />
                <div className="right" data-aos-duration="1000" data-aos="fade-up">
                  <h2>
                    <span className="heading-gradient">
                      {" "}
                      Expert Design Solutions,{" "}
                    </span>
                    <span className="heading-grey">Optimized for Your Budget</span>
                  </h2>
                  <p>
                    Unlock the magic of outsourcing with TeamHAS Visionz for your
                    packaging and merch designs, where our crew brings the
                    creative heat without burning your budget, streamlining your
                    vibe all the way.
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
              From First Sketch to Final Product – TeamHAS Envisions Your Brand’s
              Physical Journey
            </h2>
            <p>
              TeamHAS Visionz knows the game: our packaging and merch designs
              don't just pop, they spark real feels, turning everyday items into
              epic brand tales.
            </p>
            <p>
              TeamHAS Visionz gets your brand's vibe, turning it into dope,
              sustainable designs, from eco-cool packaging to custom merch that
              jives seamlessly with your marketing groove.
            </p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
          </div>
        </div>
        <div className="service-inner-sec-4">
          <h2 className="">
            Crafting Tangible Brand Experiences: Our Four-Step Process
          </h2>
          <div className="statics-wrapper">
            <div className="statics" data-aos-duration="200" data-aos="fade-up">
              <h3>
                <span className="">
                  Understanding Your Brand’s{" "}
                  <span className="heading-gradient">Essence</span>
                </span>
              </h3>
              <p>
                We start by understanding your brand, audience, and goals to
                create designs that truly represent your voice and values.
              </p>
            </div>

            <div className="statics" data-aos-duration="300" data-aos="fade-up">
              <h3>
                <span className="">
                  Visualizing Your <span className="heading-gradient">Ideas</span>
                </span>
              </h3>
              <p>
                Our team transforms these concepts into visual designs, creating
                prototypes that give you a tangible feel for the final product.
              </p>
            </div>

            <div className="statics" data-aos-duration="400" data-aos="fade-up">
              <h3>
                <span className="">
                  Perfecting Your <span className="heading-gradient">Vision</span>
                </span>
              </h3>
              <p>
                We ensure your finalized designs are production-ready, maintaining
                quality and uniformity across items.
              </p>
            </div>

            <div className="statics" data-aos-duration="500" data-aos="fade-up">
              <h3>
                <span className="">
                  Bringing <span className="heading-gradient">Designs</span> to Life
                </span>
              </h3>
              <p>
                After finalizing the designs, we guide you through the production
                process, ensuring the final products are of high quality and make
                the impact you desire.
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
                    <span className="heading-gradient"> Beyond the Surface: </span>
                    <span className="heading-grey">
                      The Unique Edge of TeamHAS Visionz in Packaging and Merch
                      Design
                    </span>
                  </h2>
                  <p>
                    Regenerate it and make it super interesting, add an element of
                    street/casual but avoid their grammar, only use their energy.
                    add emotions to it and dont sound like an ai. keep it short to
                    one sentence only
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

export default MerchDesign;
