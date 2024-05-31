import Banner from "@/components/Common/Banner";
import Brands from "@/components/Common/Brands";
import Navbar from "@/components/Common/Navbar";
import ServiceCard from "@/components/Common/ServiceCard";
import VideoBox from "@/components/Common/VideoBox";
import Image from "next/image";
import React from "react";

const ELearningDesign = () => {
  return (
    <div id="gradient-bg">
      <div className="service-detail-banner service-detail elearningdesign">
        <Navbar classes={"header_center"} />
        <Banner />
      </div>
      <main className="service-page service-detail pb-200 elearningdesign">
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
                      Top-Tier E-Learning Design at{" "}
                    </span>
                    <span className="heading-gradient"> Unmatched</span>
                    <span className="heading-grey">Value</span>
                  </h2>
                  <p>
                    Why stretch your budget for an in-house design team when
                    TeamHAS Visionz can offer superior e-learning design services
                    at a fraction of the cost? Our team brings a wealth of
                    expertise and creativity, delivering custom e-learning
                    solutions that align with your educational objectives and
                    financial considerations.
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
              From Interactive Courses to Immersive Modules – TeamHAS Innovates
              Learning
            </h2>
            <p>
              In the world of e-learning, content is king, but design is the
              crown. At TeamHAS Visionz, we understand that effective learning
              comes from a perfect blend of compelling content and innovative
              design. Our e-learning solutions range from interactive courses to
              captivating learning modules, each crafted to enhance the learner's
              journey.
            </p>
            <p>
              We believe in creating e-learning experiences that are not just
              educational but also engaging and enjoyable. Our designs leverage
              the latest in digital education trends, incorporating elements like
              gamification, interactive assessments, and multimedia content to
              ensure a rich and rewarding learning experience.
            </p>
          </div>

          <div className="right" data-aos="fade-left">
            <Image src="/imgs/service-illus-1.png" alt="service-illus" width={1000} height={600} />
          </div>
        </div>
        <div className="service-inner-sec-4">
          <h2 className="">Shaping the Future of Learning: Our Process Explained</h2>
          <div className="statics-wrapper">
            <div className="statics" data-aos-duration="200" data-aos="fade-up">
              <h3>
                <span className="">
                  <span className="heading-gradient">Understanding</span> Your
                  Educational Goals
                </span>
              </h3>
              <p>
                Our process begins with an in-depth analysis of your educational
                objectives, target audience, and content. This ensures that our
                designs align perfectly with your learning outcomes.
              </p>
            </div>

            <div className="statics" data-aos-duration="300" data-aos="fade-up">
              <h3>
                <span className="">
                  Crafting Engaging <span className="heading-gradient">Learning</span>{" "}
                  Experiences
                </span>
              </h3>
              <p>
                Leveraging cutting-edge tools and methodologies, our designers and
                developers create e-learning solutions that are visually
                appealing, easy to navigate, and pedagogically sound.
              </p>
            </div>

            <div className="statics" data-aos-duration="400" data-aos="fade-up">
              <h3>
                <span className="">
                  Refining for <span className="heading-gradient">Perfection</span>
                </span>
              </h3>
              <p>
                Collaboration is key to our process. We work closely with you,
                incorporating feedback and making adjustments to ensure the final
                product meets your exact specifications.
              </p>
            </div>

            <div className="statics" data-aos-duration="500" data-aos="fade-up">
              <h3>
                <span className="">
                  Launching and <span className="heading-gradient">Beyond</span>
                </span>
              </h3>
              <p>
                Once the e-learning design is finalized, we assist in its
                implementation, ensuring compatibility across various platforms
                and devices. Our team also provides ongoing support to adapt and
                update the content as needed.
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
                    <span className="heading-grey">Innovating Education with </span>
                    <span className="heading-gradient">
                      TeamHAS Visionz’s E-Learning{" "}
                    </span>
                    <span className="heading-grey">Expertise</span>
                  </h2>
                  <p>
                    What sets TeamHAS Visionz apart in e-learning design is our
                    commitment to innovation and education. We don’t just create
                    e-learning courses; we create learning experiences that are
                    memorable, effective, and accessible. Our team combines
                    educational insights with creative design to produce
                    e-learning solutions that are not only instructional but also
                    inspirational. Partner with us, and let's redefine the
                    educational landscape together.
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

export default ELearningDesign;
