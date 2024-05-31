import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const Mockup = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail models">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main id="gradient-bg" className="service-page service-detail pb-200 models">
      <Brands />

      <div className="about">
        <div id="gradient-bg">
          <div className="container">
            <div className="box-container">
            <VideoBox classses="left video-container" />
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey"> Expert</span>
                  <span className="heading-gradient"> Mockup Designs </span>
                  <span className="heading-grey">at a Competitive Edge,</span>
                </h2>
                <p>
                  Why settle for the overhead costs of in-house mockup designers
                  when TeamHAS Visionz offers superior services at a fraction of
                  the cost? Our dedicated team of designers provides
                  high-quality, detailed mockups that save you time and
                  resources, allowing you to focus on what you do best – growing
                  your business.
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
            From Product Concepts to Digital Interfaces – TeamHAS Perfects Your
            Preview
          </h2>
          <p>
            At TeamHAS Visionz, we understand the power of a well-crafted
            mockup. Whether it's for a new product, a mobile app, or a website
            redesign, our mockups are meticulously created to reflect the final
            product's look, feel, and function. We help you pitch ideas, secure
            stakeholder buy-in, and refine your designs with precision.
          </p>
          <p>
            Our approach blends technical accuracy with creative flair. We
            tailor each mockup to your specific needs, ensuring they not only
            look good but also serve their purpose – to validate, demonstrate,
            and inspire. Our mockups are tools for communication, facilitating
            clear understanding and feedback from clients, teams, and users.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">Crafting Your Vision: Our Four-Step Mockup Process</h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                <span className="heading-gradient">Setting </span> the Stage
              </span>
            </h3>
            <p>
              We start by diving deep into your project requirements,
              understanding the goals and specifications to ensure our mockups
              align perfectly with your vision.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                {" "}
                Bringing
                <span className="heading-gradient">Ideas </span> to Life
              </span>
            </h3>
            <p>
              Our team creates detailed mockups, using the latest tools and
              techniques. We focus on realism, ensuring that every aspect of the
              mockup is as close to the real thing as possible.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Fine-Tuning to <span className="heading-gradient">Perfection </span>
              </span>
            </h3>
            <p>
              Your input is invaluable. We refine our mockups based on your
              feedback, ensuring that each iteration moves closer to the ideal
              realization of your concept.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                From Vision to <span className="heading-gradient">Reality </span>{" "}
              </span>
            </h3>
            <p>
              Once the mockup meets your satisfaction, we deliver high-quality
              visuals in the formats you need. We also offer continued support
              for any further modifications or versions you may require.
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
                  <span className="heading-grey">Why </span>
                  <span className="heading-gradient">Beyond Visualization: </span>
                  <span className="heading-grey">
                    Why TeamHAS Visionz’s Mockup Designs Stand Out
                  </span>
                </h2>
                <p>
                  What sets TeamHAS Visionz apart in mockup design is our
                  commitment to accuracy, detail, and client vision. We don’t
                  just create mockups; we create a visual dialogue between your
                  idea and its future reality. Our team’s expertise in various
                  design disciplines ensures that our mockups are not only
                  visually appealing but also technically sound and
                  market-ready. Choose TeamHAS Visionz, and experience how our
                  mockup designs can streamline your development process and
                  enhance your presentations.
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

export default Mockup;
