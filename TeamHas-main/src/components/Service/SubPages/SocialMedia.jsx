import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <>
      <div id="gradient-bg">
        <div className="service-detail-banner service-detail socialmedia">
          <Navbar classes={"header_center"} />
          <Banner />
        </div>
        <main className="service-page service-detail pb-200 socialmedia">
          <Brands />

          <div className="about">
            <div id="gradient-bg">
              <div className="container">
                <div className="box-container">
                  <VideoBox classses="left video-container" />
                  <div className="right" data-aos-duration="1000" data-aos="fade-up">
                    <h2>
                      <span className="heading-grey"> Maximize Impact,</span>
                      <span className="heading-gradient"> Minimize Costs </span>
                      <span className="heading-grey">with Our Expert Team</span>
                    </h2>
                    <p>
                      Why expand in-house when you can access a whole team of social
                      media design experts at TeamHAS Visionz? Enjoy the benefits of
                      top-tier talent, innovative designs, and a flexible approach,
                      all while keeping your overheads lean. Our team offers the
                      expertise and creativity of an in-house team at a fraction of
                      the cost.
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
                From Captivating Instagram Visuals to Compelling YouTube Branding –
                TeamHAS Makes It Happen
              </h2>
              <p>
                Social media is an ever-evolving landscape, and we at TeamHAS
                Visionz are adept at navigating its changes. Whether it's crafting
                engaging Instagram stories, designing memorable Facebook posts, or
                creating impactful YouTube channel art, our team brings a fresh
                perspective to every platform.
              </p>
              <p>
                We understand that each social media platform has its unique
                language and audience. Our approach is to create bespoke designs
                that not only fit your brand identity but also speak directly to
                your audience, boosting engagement and building a loyal community.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
            </div>
          </div>
          <div className="service-inner-sec-4">
            <h2 className="">
              <span className="">Bringing Your</span>{" "}
              <span className="heading-gradient"> Social Media </span>{" "}
              <span>Vision to Life</span>
            </h2>
            <div className="statics-wrapper">
              <div className="statics" data-aos-duration="200" data-aos="fade-up">
                <h3>
                  <span className="">
                    <span className="heading-gradient">Understanding</span> Your Brand
                    and Audience
                  </span>
                </h3>
                <p>
                  We start by diving deep into your brand’s ethos and understanding
                  your target audience. This foundational step ensures that our
                  designs align with your brand and appeal to your followers.
                </p>
              </div>

              <div className="statics" data-aos-duration="300" data-aos="fade-up">
                <h3>
                  <span className="">
                    <span className="heading-gradient">Ideas</span> that Resonate
                  </span>
                </h3>
                <p>
                  With strategy in hand, our creative team brainstorms and
                  conceptualizes designs that capture your brand's voice and
                  message, ensuring each post is more than just a graphic—it's a
                  conversation starter.
                </p>
              </div>

              <div className="statics" data-aos-duration="400" data-aos="fade-up">
                <h3>
                  <span className="">
                    <span className="heading-gradient">Crafting</span> the Visuals
                  </span>
                </h3>
                <p>
                  Our designers bring the concepts to life, blending aesthetics with
                  functionality. We iterate based on your feedback, ensuring the
                  final designs are exactly what your social media needs.
                </p>
              </div>

              <div className="statics" data-aos-duration="500" data-aos="fade-up">
                <h3>
                  <span className="">
                    From Design to <span className="heading-gradient">Engagement</span>{" "}
                  </span>
                </h3>
                <p>
                  Once designs are finalized, we guide you in implementing them
                  effectively across your social media channels. Our team is also
                  here to support you in adapting these creatives for ongoing
                  campaigns and updates.
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
                        Transforming Social Media with{" "}
                      </span>
                      <span className="heading-gradient"> TeamHAS Visionz’s</span>
                      <span className="heading-grey"> Unique Touch</span>
                    </h2>
                    <p>
                      What sets TeamHAS Visionz apart in social media design is our
                      blend of creativity, strategy, and understanding of digital
                      trends. We don’t just create; we connect. Our designs are more
                      than just visually appealing—they are strategic tools crafted
                      to increase engagement, build brand awareness, and turn
                      followers into fans. Partner with us, and experience how our
                      innovative approach to social media design can elevate your
                      brand to new heights.
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

export default SocialMedia;
