import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const Comics = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail comics">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
    <main className="service-page service-detail pb-200 comics ">
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
                    {" "}
                    Professional Comic Artistry{" "}
                  </span>
                  <span className="heading-grey">at Competitive Rates</span>
                </h2>
                <p>
                  Why contend with the high costs and complexities of in-house
                  comic production when TeamHAS Visionz offers a seamless,
                  economical solution? Our team provides expert comic art
                  services, encompassing everything from character design to
                  full-fledged comic creation, all tailored to meet your budget
                  and artistic vision.
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
            From Single Panels to Epic Sagas – TeamHAS Weaves Your Graphic Tales
          </h2>
          <p>
            In the art of comic creation, every panel tells a story. Our
            approach at TeamHAS Visionz is to blend narrative and art in a way
            that each page becomes a journey. We work with you to develop
            characters, plotlines, and settings that not only tell your story
            but also captivate your audience’s imagination.
          </p>
          <p>
            Our team is skilled in various comic styles, from traditional ink
            and pen to digital art, allowing us to cater to diverse artistic
            preferences. Whether you're looking to create a superhero saga, a
            heartfelt graphic novel, or a humorous strip, our artists bring your
            story to life with a distinctive flair that's uniquely yours.
          </p>
        </div>

        <div className="right" data-aos="fade-left">
        <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
        </div>
      </div>
      <div className="service-inner-sec-4">
        <h2 className="">
          Illustrating Your Narrative: Our Four-Step Comic Creation Process
        </h2>
        <div className="statics-wrapper">
          <div className="statics" data-aos-duration="200" data-aos="fade-up">
            <h3>
              <span className="">
                Crafting the <span className="heading-gradient">Narrative</span>{" "}
              </span>
            </h3>
            <p>
              We begin by fleshing out your story idea. This involves
              scriptwriting, plot development, and storyboard creation, laying
              down a solid narrative foundation for your comic.
            </p>
          </div>

          <div className="statics" data-aos-duration="300" data-aos="fade-up">
            <h3>
              <span className="">
                <span className="heading-gradient">Visualizing</span> the Cast and
                Setting
              </span>
            </h3>
            <p>
              Once the story is set, our artists design the characters and
              environments, ensuring they align with the narrative and are
              visually compelling and unique.
            </p>
          </div>

          <div className="statics" data-aos-duration="400" data-aos="fade-up">
            <h3>
              <span className="">
                Bringing the <span className="heading-gradient">Story</span> to Life
              </span>
            </h3>
            <p>
              With the designs approved, our comic artists illustrate the story,
              frame by frame, infusing each panel with detail, emotion, and
              movement.
            </p>
          </div>

          <div className="statics" data-aos-duration="500" data-aos="fade-up">
            <h3>
              <span className="">
                Polishing the <span className="heading-gradient">Masterpiece</span>
              </span>
            </h3>
            <p>
              The final stage involves editing, lettering, and putting together
              the comic. We fine-tune the art and narrative, ensuring the final
              product is a polished piece ready for publication.
            </p>
          </div>
        </div>
      </div>
      <div className="about service-inner-sec-5 ">
        <div id="">
          <div className="container">
            <div className="box-container">
              <div className="left" data-aos="fade-left">
              <Image src="/imgs/service-illus-2.png" alt="service-illus2" width={600} height={600} />
              </div>
              <div className="right" data-aos-duration="1000" data-aos="fade-up">
                <h2>
                  <span className="heading-grey"></span>
                  <span className="heading-gradient">Unleashing Imagination: </span>
                  <span className="heading-grey">
                    Why Choose TeamHAS Visionz for Comic Art
                  </span>
                </h2>
                <p>
                  What sets TeamHAS Visionz apart in the realm of comic creation
                  is our passion for storytelling and our dedication to artistic
                  excellence. Our team doesn’t just draw comics; we create
                  worlds. We take pride in crafting stories that engage,
                  entertain, and leave a lasting impact. With our blend of
                  imaginative storytelling and artistic prowess, your comic
                  project is not just a service – it's a journey into the heart
                  of creativity. Let's turn your vision into a comic reality
                  that stands the test of time.
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

export default Comics;
