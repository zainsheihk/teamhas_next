import React from 'react'
import Counter from './Counter'
import TeamSlider from './TeamSlider';
import Link from 'next/link';
import Brands from '../Common/Brands';
import WorkEmailComp from '../Common/WorkEmailComp';

const CareerComp = () => {
  return (
    <main className="about-page career-page" id='gradient-bg-3'>
      <div className="container">
        <div className="container  ">
          {/* <!-- <h1 data-aos="fade-up">
                <span className="heading-gradient">Our Services</span>
              </h1>
              All --> */}
          <section className="banner banner-2">
            <div className="container">
              <div className="">
                <div className="main-content">
                  <h1 data-aos-duration="200" data-aos="fade-up">
                    <span className="heading-gradient">Careers</span>
                  </h1>
                  <h2 data-aos-duration="400" data-aos="fade-up">
                    Welcome to Our World
                  </h2>
                  <p data-aos-duration="600" data-aos="fade-up">
                    At TeamHAS Visionz, we don't just offer jobs; we offer
                    journeys. We believe in nurturing talent and fostering an
                    environment where creativity and innovation flourish. Join
                    us, and become part of a dynamic team that's reshaping the
                    landscape of digital design.
                  </p>
                  {/* <!-- <a href="#" className="btn btn-primary myBtnCareer"><span>Join us</span></a> --> */}
                </div>
                <WorkEmailComp classess={"check-flex"} btnText={"Join us"} redirect={"/applynow"} />
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
        <div className="statics-wrapper">
          <Counter
            headText={"People at TeamHAS"}
            initialValue={0}
            targetValue={150}
            bottomText={"Innovative Minds"}
            duration={1500}
          />
          <Counter
            headText={"Number of Countries"}
            initialValue={0}
            targetValue={15}
            bottomText={"Present in 15+ Countries"}
            duration={1500}
          />
          <Counter
            headText={"Amount of Timezones"}
            initialValue={0}
            targetValue={10}
            bottomText={"Spanning Over 10 Timezones"}
            duration={1500}
          />
          <Counter
            headText={"Amount of Customers"}
            initialValue={0}
            targetValue={5000}
            bottomText={"Delighting 5000+ Customers Worldwide"}
            duration={300}
          />
        </div>
      </div>

      <div className="career-inner">
        <div className="container">
          <div className="remote-company">
            <div className="left" data-aos="fade-right">
              <h2>Embrace the Freedom of a Remote-First Workplace</h2>
              <p>
                TeamHAS Visionz is a native remote company, and we've mastered
                the art of virtual collaboration. Here, you'll find the
                flexibility to work from anywhere, balanced with a deep
                connection to a global team. We value autonomy, but never at the
                expense of teamwork and shared success.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <img src="/imgs/career-01.png" alt="" />
            </div>
          </div>
          <div className="remote-company">
            <div className="left" data-aos="fade-right">
              <h2>Innovate, Grow, and Excel with Us</h2>
              <p>
                We are committed to your professional and personal growth. At
                TeamHAS Visionz, you'll have opportunities to work on diverse
                projects, enhance your skills with continuous learning, and
                collaborate with some of the brightest minds in the industry.
              </p>
            </div>

            <div className="right" data-aos="fade-left">
              <img src="/imgs/career-involve-02.png" alt="" />
            </div>
          </div>
          <div className="team">
            <h2 data-aos="fade-up">
              Meet <span className="heading-gradient">our team</span>
            </h2>
            <p data-aos="fade-up">
              Our team is the heartbeat of TeamHAS Visionz. Meet the creative
              minds and strategic thinkers who make the magic happen:
            </p>



            <div className="team-card-wrapper">
              <div className="swiper career-swiper">
                <div className="swiper-wrapper">
                  <TeamSlider />
                </div>
              </div>
              {/* <TeamSlider/> */}
            </div>

            <div className="services">
              <h2 data-aos="fade-up">
                What Kind of
                <span className="heading-gradient"> Creative Talent</span> We're
                Looking For
              </h2>
              <div className="services-wrapper">
                <div className="service-card bg-grad-animation smm-media-thmb">
                  <img src="imgs/Vector.png" alt="" />
                  <h2>Social Media Creative</h2>
                  <br />
                  <p>
                    We need innovators who can craft compelling social media
                    content that resonates and engages. Your designs should tell
                    stories, evoke emotions, and drive engagement.
                  </p>
                </div>

                <div className="service-card bg-grad-animation pr-media-thmb">
                  <img src="imgs/vector2.png" alt="" />
                  <h2>Promotional Post Designer</h2>
                  <br />
                  <p>
                    Seeking creative minds that can conceptualize and execute
                    stunning promotional posts. Your designs should not only
                    attract attention but also convey the brand's message
                    powerfully.
                  </p>
                </div>

                <div className="service-card bg-grad-animation comic-media-thmb">
                  <img src="imgs/Vector 3.png" alt="" />
                  <h2>Comic Artist</h2>
                  <br />
                  <p>
                    If you can bring stories to life through captivating comic
                    art, we want you. Your ability to create engaging narratives
                    through illustrations is what we’re looking for.
                  </p>
                </div>

                <div className="service-card bg-grad-animation learning-media-thmb">
                  <img src="imgs/vector4.png" alt="" />
                  <h2>E-Learning Design Specialist</h2>
                  <br />
                  <p>
                    We're looking for creators who can design interactive and
                    educational e-learning experiences. Your designs should
                    simplify complex information and make learning enjoyable.
                  </p>
                </div>

                <div className="service-card bg-grad-animation pack-media-thmb">
                  <img src="imgs/vector5.png" alt="" />
                  <h2>Packaging Designer</h2>
                  <br />
                  <p>
                    We need visionaries who understand that packaging is part of
                    the product experience. Your innovative designs should make
                    products stand out and speak to consumers.
                  </p>
                </div>

                <div className="service-card bg-grad-animation model-media-thmb">
                  <img src="imgs/Vector6.png" alt="" />
                  <h2> 3D Model Creator</h2>
                  <br />
                  <p>
                    If you excel in creating detailed and lifelike 3D Models,
                    join us. Your skills will bring concepts and products to
                    life in a way that captivates and impresses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <div className="open-position" data-aos="fade-up">
              <div className="left">
                <p>Explore <span className="heading-gradient">Opportunities</span> at TeamHAS Visionz</p>
                <h2>
                  For all current openings, reach out to us at

                  <span className="heading-gradient"> careers@teamhas.net</span>
                </h2>
                <p>
                  Don't see a role that fits? We're always on the lookout for
                  exceptional talent. Drop us your portfolio and let us know how
                  you can make a difference at TeamHAS Visionz.
                </p>
                <a href="/applynow" className="btn btn-primary "
                  ><span>Apply now</span></a
                >
              </div>
              <div className="right">
                <img src="/imgs/before footer-01.png" alt="" />
              </div>
            </div> --> */}
        </div>
        <div className="subscribe-container mb-200">
          <div className="subs-text">
            <h2>
              <span className="heading-gradient">Explore </span>
              <span>Opportunities at TeamHAS Visionz </span>
              {/* <!--<span className="heading-gradient">plan </span>--> */}
              <span>
                {" "}
                For all current openings, reach out to us at careers@teamhas.net
              </span>
            </h2>
            <p>
              {" "}
              Don't see a role that fits? We're always on the lookout for
              exceptional talent. Drop us your portfolio and let us know how you
              can make a difference at TeamHAS Visionz.
            </p>
          </div>
          <div className="subs-btn">
            <Link href="/applynow" className="btn btn-primary ">
              <span>Apply now</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CareerComp