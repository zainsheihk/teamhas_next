import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const StoryBoarding = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail storyboarding">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main className="service-page service-detail pb-200 storyboarding">
     <Brands />

      <div className="about">
        <div id="gradient-bg">
          <div className="container">
            <div className="box-container">
            <VideoBox classses="left video-container" />
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey">
                    {" "}
                    Professional Video Edits at{" "}
                  </span>
                  <span className="heading-gradient">Unbeatable Rates</span>
                </h2>
                <p>
                  Boost your vids with TeamHAS Visionz where street vibes meet
                  pro edits, giving you dope visuals that won't break the bank,
                  all while blowing your mind
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
          <h2>TeamHAS Visionz Captures Your Audience</h2>
          <p>
            TeamHAS Visionz transforms your story into epic video content,
            catchy, custom, and cool. Turning heads, winning hearts, and
            flipping viewers into die-hard fans.
          </p>
          <p>
            We're not just cutting clips; we're crafting vibes, from Insta
            stories that pop to YouTube brands that stick, making every frame
            hit just right to get your audience hyped and moving.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">
          <span className="">
            Crafting Your Story, Frame by Frame: Our Four-Step Video Editing
            Process
          </span>{" "}
        </h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                Setting the <span className="heading-gradient">Scene</span>{" "}
              </span>
            </h3>
            <p>
              We first understand your goals, audience, and message to ensure
              our edits match your brand's voice.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                Bringing Your <span className="heading-gradient">Vision</span>to
                Life
              </span>
            </h3>
            <p>
              Our editors carefully select the best footage, enhance visuals,
              and apply dynamic cuts for a compelling story.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Refining the <span className="heading-gradient">Narrative</span>{" "}
              </span>
            </h3>
            <p>
              We seek your feedback on initial edits, ensuring the final product
              aligns with your vision and resonates with your audience.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                Your Story, <span className="heading-gradient"> Ready</span> to
                Share
              </span>
            </h3>
            <p>
              We polish your video narrative and deliver it in optimal formats,
              ready for tweaks or future projects.
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
                  <span className="heading-gradient"> TeamHAS Visionz</span>
                  <span className="heading-grey"> isn't just about edits</span>
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
  );
};

export default StoryBoarding;
