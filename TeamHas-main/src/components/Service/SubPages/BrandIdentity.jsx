import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const BrandIdentity = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail brandidentity">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
      <main className="service-page service-detail pb-200 brandidentity">
        <Brands />

        <div className="about">
          <div id="gradient-bg">
            <div className="container">
              <div className="box-container">
                <VideoBox classses="left video-container" />
                <div className="right" data-aos-duration="1000" data-aos="fade-up">
                  <h2>
                    <span className="heading-grey">Expert </span>
                    <span className="heading-gradient">Brand Identity Design </span>
                    <span className="heading-grey">
                      at a Fraction of In-House Costs
                    </span>
                  </h2>
                  <p>
                    Elevate your brand without straining your resources. TeamHAS
                    Visionz provides expert brand identity design services at
                    rates more economical than maintaining an in-house team.
                    Benefit from our pool of talented designers and strategists
                    who bring a wealth of experience and fresh perspectives, all
                    within your budget.
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
              From Core Values to Visual Impact – TeamHAS Envisions Your Identity
            </h2>
            <p>
              A strong brand identity is the cornerstone of business success. At
              TeamHAS Visionz, we delve into the heart of your business,
              extracting and refining your core values, mission, and vision. Our
              process is designed to transform these elements into a visual
              language that communicates your brand's essence to the world.
            </p>
            <p>
              Our approach combines artistic flair with market insights, ensuring
              your brand identity not only looks exceptional but also aligns
              perfectly with your business strategy. From logos to color palettes,
              typography to visual styles, we create a cohesive and captivating
              brand identity that sets the tone for your entire brand experience.
            </p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
          </div>
        </div>
        <div className="service-inner-sec-4">
          <h2 className="">
            Building Your Brand Identity: Our Step-by-Step Approach
          </h2>
          <div className="statics-wrapper">
            <div className="statics" data-aos-duration="200" data-aos="fade-up">
              <h3>
                <span className="">
                  Laying the <span className="heading-gradient">Foundation</span>
                </span>
              </h3>
              <p>
                Understanding your business is our first step. We explore your
                brand's ethos, audience, and market position to develop a
                strategic foundation for the design process.
              </p>
            </div>

            <div className="statics" data-aos-duration="300" data-aos="fade-up">
              <h3>
                <span className="">
                  Bringing Your <span className="heading-gradient">Brand</span> to
                  Life
                </span>
              </h3>
              <p>
                With a strategy in place, our creative team starts the design
                process, crafting visual elements that are both unique and
                reflective of your brand's character.
              </p>
            </div>

            <div className="statics" data-aos-duration="400" data-aos="fade-up">
              <h3>
                <span className="">
                  <span className="heading-gradient">Perfecting</span> Your Brand’s
                  Voice
                </span>
              </h3>
              <p>
                We believe in the power of collaboration. Your feedback is
                integral as we refine and perfect each aspect of your brand
                identity to ensure it resonates with you and your audience.
              </p>
            </div>

            <div className="statics" data-aos-duration="500" data-aos="fade-up">
              <h3>
                <span className="">
                  Setting the Stage for{" "}
                  <span className="heading-gradient">Consistency</span>
                </span>
              </h3>
              <p>
                Upon finalizing your brand identity, we provide comprehensive
                brand guidelines. These ensure consistency in how your brand is
                presented across all platforms and touchpoints.
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
                    <span className="heading-grey">Defining Distinction with</span>
                    <span className="heading-gradient">
                      {" "}
                      TeamHAS Visionz’s Brand Identity Services
                    </span>
                    <span className="heading-grey"></span>
                  </h2>
                  <p>
                    What sets TeamHAS Visionz apart in brand identity design is
                    our commitment to understanding and embodying the spirit of
                    your brand. We don't just create logos; we craft legacies. Our
                    team's nuanced approach to design and marketing ensures that
                    your brand identity is not only visually stunning but also
                    strategically positioned for growth and recognition. Partner
                    with us, and let's sculpt an identity that truly encapsulates
                    the essence of your brand.
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

export default BrandIdentity;
