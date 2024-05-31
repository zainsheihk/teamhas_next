import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const CharacterDesign = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail characterdesign">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
      <main className="service-page service-detail pb-200 characterdesign">
        <Brands />

        <div className="about">
          <div id="gradient-bg">
            <div className="container">
              <div className="box-container">
                <VideoBox classses="left video-container" />
                <div className="right" data-aos-duration="1000" data-aos="fade-up">
                  <h2>
                    <span className="heading-grey"></span>
                    <span className="heading-gradient">
                      Your Gateway to Affordable,
                    </span>
                    <span className="heading-grey"> Custom Art Brilliance</span>
                  </h2>
                  <p>
                    Our artists cook up custom artwork that's spot-on for your
                    project, serving up that unique visual flair your business
                    craves, all while keeping it budget-friendly for your
                    business.
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
            <h2>From Conceptual to Commercial Art</h2>
            <p>
              In the wild illustration arena, TeamHAS Visionz slays with
              versatility, turning ideas into riveting visual stories for ads,
              editorials, or digital realms. Our art does more than dazzle, it's
              the visual heartbeat of your brand's voice and values.
            </p>
            <p>
              Mixing artistic swagger with your brand's own vibe, TeamHAS Visionz
              crafts illustrations that hit the sweet spot between eye-catching
              cool and strategic punch, whether it's sleek minimalism or lush
              digital art, all to hook your audience and amp up your brand's
              story.
            </p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
          </div>
        </div>
        <div className="service-inner-sec-4">
          <h2 className="">
            Crafting Visual Stories: Our Four-Step Illustration Process
          </h2>
          <div className="statics-wrapper">
            <div className="statics" data-aos-duration="200" data-aos="fade-up">
              <h3>
                <span className="">
                  Laying the Creative{" "}
                  <span className="heading-gradient">Foundation</span>
                </span>
              </h3>
              <p>
                We begin by understanding your vision and objectives, ensuring our
                illustrations align with your brand's story and audience
                preferences.
              </p>
            </div>

            <div className="statics" data-aos-duration="300" data-aos="fade-up">
              <h3>
                <span className="">
                  Sketching Your <span className="heading-gradient">Imaginative</span>{" "}
                  Concepts
                </span>
              </h3>
              <p>
                Our skilled illustrators then translate these ideas into
                preliminary sketches, experimenting with styles and themes to find
                the perfect visual representation.
              </p>
            </div>

            <div className="statics" data-aos-duration="400" data-aos="fade-up">
              <h3>
                <span className="">
                  Fine-Tuning the <span className="heading-gradient">Artwork </span>
                </span>
              </h3>
              <p>
                Your feedback is crucial. We refine our illustrations based on
                your input, ensuring the final artwork resonates with both your
                brand and your audience.
              </p>
            </div>

            <div className="statics" data-aos-duration="500" data-aos="fade-up">
              <h3>
                <span className="">
                  Bringing the <span className="heading-gradient">Illustration</span>{" "}
                  to Completion
                </span>
              </h3>
              <p>
                Upon perfecting the illustration, we prepare the final artwork for
                delivery in the required formats, ensuring it's ready for its
                intended application.
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
                    <span className="heading-gradient"> TeamHAS Visionz </span>
                    <span className="heading-grey">isn't just about drawing</span>
                  </h2>
                  <p>
                    We dive deep into your brand's soul, creating custom
                    illustrations that aren't just visually dope but loaded with
                    meaning, turning your message into art that speaks louder than
                    words.
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

export default CharacterDesign;
