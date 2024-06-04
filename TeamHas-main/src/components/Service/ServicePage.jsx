import React from "react";
import Brands from "../Common/Brands";
import VideoBox from "../Common/VideoBox";
import WorkEmailComp from "../Common/WorkEmailComp";

const ServicePage = () => {

  return (
    <main className="service-page our-services pb-200">
      <div id="gradient-bg">
        <div className="container">
          <section className="banner">
            <div className="container">
              <div className="main-heading-container">
                <h1 className="hd-cls" data-aos="fade-up">
                  OUR SERVICES
                </h1>
                <p>
                  Our customized solutions guarantee your message doesn't just
                  land—it strikes a chord, transforming interactions into
                  enduring bonds
                </p>
                <WorkEmailComp classess={"check-flex"} btnText={"Get Started"} redirect={"/bookacall"} />
              </div>
              <div
                className="btn-container"
                data-aos="fade-up"
                data-aos-duration="1000"
              ></div>
            </div>
          </section>
        </div>

        <Brands />
       
        <div className="about home">
          <div id="">
            <div className="container">
              <div className="box-container">
                <div className="left" data-aos="fade-left">
                  <h2>
                    <span className="heading-gradient">Meet TeamHAS Visionz: </span>
                    <span className="heading-grey">
                      Elevating Your Creative Journey
                    </span>
                  </h2>
                  <p>
                    Embark on an innovative voyage with TeamHAS Visionz, your
                    ultimate creative ally. We blend imagination with expertise,
                    transforming your ideas into stunning realities that
                    captivate and inspire. Welcome to a partnership where your
                    vision becomes our mission.
                  </p>
                </div>
                <VideoBox />
              </div>
            </div>
          </div>
        </div>
        <div className="services-wrapper">
          <a href="/services/adcreatives">
            <div className="service-card bg-grad-animation ad-creative-thmb">
              <img src="/imgs/Vector.png" alt="" />
              <h2>Ad Creatives</h2>
              <b>Crafting Captivating Advertisements</b>
              <p>
                Elevate your advertising campaigns with our innovative ad
                creatives. From concept to execution, we ensure every ad tells
                your story and engages your audience.
              </p>
            </div>
          </a>
          <a href="services/socialmediacreative">
            <div className="service-card  bg-grad-animation s-media-thmb">
              <img src="/imgs/vector2.png" alt="" />
              <h2>Social Media creative</h2>
              <b>Energizing Your Social Presence</b>
              <p>
                Our team specializes in creating eye-catching social media
                graphics that resonate with your audience, driving engagement
                and building your online community.
              </p>
            </div>
          </a>
          <a href="services/emaildesign">
            <div className="service-card  bg-grad-animation email-design-thmb">
              <img src="/imgs/vector4.png" alt="" />
              <h2>Email Design</h2>
              <b> Visualization with design </b>
              <p>
                Turn your data into compelling stories with our Email Design. We
                combine data visualization with design expertise to make
                information accessible and engaging.
              </p>
            </div>
          </a>
          <a href="services/presentationdesign">
            <div className="service-card  bg-grad-animation presentation-design-thmb">
              <img src="/imgs/Vector 3.png" alt="" />
              <h2>Presentation Design</h2>
              <b>Amplifying Your Presentation </b>
              <p>
                Our designs are not just visually appealing but also
                strategically aligned with your marketing goals, ensuring
                maximum impact and reach.
              </p>
            </div>
          </a>

          <a href="/services/elearningdesign">
            <div className="service-card  bg-grad-animation e-learning-thmb">
              <img src="/imgs/vector5.png" alt="" />
              <h2>E-learning Graphics</h2>
              <b>Educational, Engaging, Enlightening </b>
              <p>
                Our e-learning designs are tailored to make learning interactive
                and enjoyable. From course layouts to interactive elements, we
                ensure an effective learning experience.
              </p>
            </div>
          </a>
          <a href="services/packagingandmerchdesign">
            <div className="service-card  bg-grad-animation merch-design-thmb">
              <img src="/imgs/Vector6.png" alt="" />
              <h2>Merch & Packaging Design</h2>
              <b>Packaging that Pops </b>
              <p>
                First impressions matter. Our packaging designs not only reflect
                the quality of your product but also resonate with your brand
                identity, making your products stand out on the shelves.
              </p>
            </div>
          </a>

          <a href="services/brandidentity">
            <div className="service-card  bg-grad-animation brand-thmnb">
              <img src="/imgs/Vector7.png" alt="" />
              <h2>Brand Identity</h2>
              <b>Crafting Your Brand's Soul </b>
              <p>
                Your brand identity is your story. We help you tell it through
                compelling logos, color schemes, typography, and brand
                guidelines that capture the essence of your business.
              </p>
            </div>
          </a>

          <a href="services/uianduxdesign">
            <div className="service-card  bg-grad-animation ui-thmnb">
              <img src="/imgs/Vector 8.png" alt="" />
              <h2>UI & UX Design</h2>
              <b>Building Your Digital Front </b>
              <p>
                We design websites that are not only aesthetically pleasing but
                also user-friendly, responsive, and aligned with your brand’s
                voice, ensuring a memorable online presence.
              </p>
            </div>
          </a>

          <a href="services/motiongraphic">
            <div className="service-card  bg-grad-animation motion-thmnb">
              <img src="/imgs/vector10.png" alt="" />
              <h2>Motion Graphics</h2>
              <b>Bringing Stories to Life </b>
              <p>
                Our motion graphics services offer a dynamic way to communicate
                your message. Perfect for explainer videos, digital ads, and
                social media, they capture and retain viewer attention.
              </p>
            </div>
          </a>

          <a href="services/animation">
            <div className="service-card  bg-grad-animation animation-thmnb">
              <img src="/imgs/vector11.png" alt="" />
              <h2>Animations</h2>
              <b>Animating Your Ideas </b>
              <p>
                Our animation services range from 2D animations to complex 3D
                animations, bringing your concepts to life in a vibrant and
                engaging way.
              </p>
            </div>
          </a>
          <a href="services/illustrations">
            <div className="service-card  bg-grad-animation illustration-thmnb">
              <img src="/imgs/vector12.png" alt="" />
              <h2>Illustrations</h2>
              <b>Creating Memorable Illustrations </b>
              <p>
                Our team excels in crafting unique and expressive characters for
                various mediums, each with its own personality and story
              </p>
            </div>
          </a>
          <a href="services/videoproduction">
            <div className="service-card  bg-grad-animation video-pro-thmnb">
              <img src="/imgs/vector13.png" alt="" />
              <h2>Video Production</h2>
              <b>Visualizing Your Narrative </b>
              <p>
                Dive into TeamHAS Visionz, where we turn video frames into
                tales. Our editing transforms footage into cinematic gems,
                ensuring your message resonates.
              </p>
            </div>
          </a>

          <a href="services/3dmodelsandmockups">
            <div className="service-card  bg-grad-animation d-model-thmmnb">
              <img src="/imgs/vector14.png" alt="" />
              <h2> 3D Models & Mockups</h2>
              <b>Visualizing Before Creating </b>
              <p>
                Our 3D Modeling services cater to various industries, providing
                detailed and accurate models for animations, games, product
                visualizations, and more.
              </p>
            </div>
          </a>

          <a href="services/comics">
            <div className="service-card  bg-grad-animation comic-thmnb">
              <img src="/imgs/vector16.png" alt="" />
              <h2>comics</h2>
              <b>Illustrating Stories, One Panel at a Time </b>
              <p>
                Dive into the world of comics with our service. We handle
                everything from character design to the final layout, bringing
                your story to life in vivid detail.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
