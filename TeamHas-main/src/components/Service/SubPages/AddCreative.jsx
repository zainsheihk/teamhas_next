import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const AddCreative = () => {
  return (
    <>
      <div id="gradient-bg">
        <div className="service-detail-banner service-detail adcreatives">
          <Navbar classes={"header_center"} />
          <Banner />
        </div>

        <main className="service-page service-detail pb-200 adcreatives">
          <Brands />

          <div className="about">
            <div id="gradient-bg">
              <div className="container">
                <div className="box-container">
                  <VideoBox classses="left video-container" />
                  <div className="right">
                    <h2>
                      <span className="heading-grey"> Achieving More,</span>
                      <span className="heading-gradient"> Spending Less </span>
                      <span className="heading-grey">
                        with Our In-House Expertise
                      </span>
                    </h2>
                    <p>
                      Why spend a fortune on in-house designers when you can have
                      the best of TeamHAS Visionz at a fraction of the cost? Our
                      team offers not just exceptional talent but also affordability
                      and flexibility. By partnering with us, you gain access to
                      top-tier ad creative expertise without the overhead costs
                      associated with full-time employees.
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
                From Singular Vision to A/B Testing Brilliance – TeamHAS You Covered
              </h2>
              <p>
                In the digital age, one size does not fit all. That’s why we
                specialize in creating a variety of ad designs tailored for A/B
                testing. Our approach ensures that you have a diverse array of
                creatives to test in the market, helping you understand what
                resonates best with your audience.
              </p>
              <p>
                With TeamHAS Visionz, you're not just getting creative ads; you're
                getting a strategic partner who understands the nuances of consumer
                responses. Our designs are not only visually appealing but also
                data-driven, ensuring they perform effectively across various
                platforms and audiences.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
            </div>
          </div>

          <div className="service-inner-sec-4">
            <h2 className="">
              How We <span className="heading-gradient">Bring</span> Your Ads to
              Life
            </h2>
            <div className="statics-wrapper">
              <div className="statics">
                <h3>
                  <span className="">
                    {" "}
                    <span className="heading-gradient">Ideation</span> and Strategy
                  </span>
                </h3>
                <p>
                  It all starts with an idea. We sit down with you to understand
                  your brand, your goals, and your audience. This phase is all about
                  aligning our creative vision with your marketing objectives.
                </p>
              </div>

              <div className="statics">
                <h3>
                  <span className="">
                    From Sketch to Digital{" "}
                    <span className="heading-gradient">Masterpiece</span>{" "}
                  </span>
                </h3>
                <p>
                  Our designers take the helm, transforming concepts into visually
                  striking designs. Using the latest tools and trends, we ensure
                  that each ad is not just creative but also market-ready.
                </p>
              </div>

              <div className="statics">
                <h3>
                  <span className="">
                    Your Feedback, Our{" "}
                    <span className="heading-gradient">Blueprint</span>
                  </span>
                </h3>
                <p>
                  Your input is crucial. We present our designs and iterate based on
                  your feedback. This collaborative approach ensures the final
                  product is perfectly in tune with your expectations.
                </p>
              </div>

              <div className="statics">
                <h3>
                  <span className="">
                    Launching Your <span className="heading-gradient">Vision</span>
                  </span>
                </h3>
                <p>
                  Once the designs are finalized, we prepare them for deployment.
                  Whether it’s digital or print, we ensure your ads are ready to
                  make an impact in the market.
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
                  <div className="right">
                    <h2>
                      <span className="heading-grey">Why </span>
                      <span className="heading-gradient">
                        TeamHAS Visionz’s Ad Creative Services
                      </span>
                      <span className="heading-grey"> Stand Above the Rest</span>
                    </h2>
                    <p>
                      At TeamHAS Visionz, it’s not just about creating ads; it’s
                      about crafting a narrative that elevates your brand. Our
                      unique blend of artistic talent, marketing acumen, and
                      data-driven strategies sets us apart. We don’t just design; we
                      deliver results. Our commitment to innovation, client
                      collaboration, and measurable outcomes ensures that when you
                      choose TeamHAS, you're choosing a partner dedicated to your
                      success. Let us bring your advertising vision to life, and
                      watch as we turn your goals into achievements.
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

export default AddCreative;
