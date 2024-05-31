"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const TeamSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: false,
        }}
        loop
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/emmajohnson.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  Creative Director, TeamHAS Visionz I lead a team rich in
                  designers and creatives ready to embrace the challenges of
                  serving innovative global tech brands. Our mission for
                  creative excellence continues to lead us to explore the
                  frontiers of design. You will engage in partnership with all
                  areas of the business, in a highly creative environment with
                  skilled, supportive colleagues, in directing our creative
                  direction. The role is a unique opportunity to shape digital
                  design in a creativity-valued environment.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Emma Johnson</h3>
                <p>Creative Director</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/liam smith.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  One of the leading UI/UX designs at TeamHAS Visionz, where my
                  work lies in directing a talented team to develop remarkable
                  user experiences for top global tech brands. Focused on design
                  excellence, we push the boundaries and create intuitive,
                  visually appealing interfaces. Working with some of the most
                  talented colleagues across the globe, we remain resolute in
                  exceeding our customers' expectations in everything we do,
                  every project being an opportunity for innovation. My position
                  will be to impact the global technology experience, blending
                  creativity with consumer-oriented design.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Liam Smith</h3>
                <p>Head of UI/UX Design</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Sophia lee.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  As a Lead Graphic Designer at TeamHAS Visionz, I work in a
                  creative hub, where creativity direction and ideation are
                  synchronized with a team of talented designers. We together
                  believe in creating a creative masterpiece, with global top
                  tech brands in partnership. The position will enable me to
                  play with creativity, mentor a passionate team, and produce
                  innovative designs that captivate our audience. The supportive
                  environment will instill in me a passion for design, hence
                  just the right place for professional growth.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Sophia Lee</h3>
                <p>Lead Graphic Designer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Mason Brown.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  When I came to know about TeamHAS Visionz, I was over the
                  moon. It really is a hub of creativity and talent. Our team is
                  never far from creative excellence, pushing the limits to
                  animation. We work in alliance with the world's leading tech
                  brands, ultimately bringing out a fusion of art and technology
                  so varied in its form of innovation. Each project is an
                  exciting chance to inspire. It's a privilege to be part of a
                  leading force in digital creativity.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Mason Brown</h3>
                <p>Senior Animator</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Isabella Garcia.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  As a brand strategist with TeamHAS Visionz, one is surrounded
                  with talent par excellence in redefining branding for the top
                  global tech brands. Our creative excellence dedication propels
                  the innovative client strategies that blend analytical and
                  creative thinking. I am inspired on a daily basis by
                  passionate colleagues pushing the boundaries of brand
                  strategy. It's a privilege to work in a company valuing
                  quality and its people, making every challenge rewarding.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Isabella Garcia</h3>
                <p>Brand Strategist</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Ethan Nguyen (2).jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  Leading Web Development at TeamHAS Visionz; where creativity
                  meets technology and crafts clear digital experiences around.
                  Surrounded by designers and creatives, our teams innovate and
                  collaborate at every turn to top global tech brands. It's
                  inspiring when working with such kind of supporting, talented
                  colleagues in our tech projects that enable us to be
                  successful. For each line of code in support of our project, a
                  unique, stunning digital product will be developed.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Ethan Nguyen</h3>
                <p>Head of Web Development</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Guang.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  Working at TeamHAS Visionz as a Senior Illustrator is a dream
                  come true for someone like me. Here, I am surrounded by a
                  vibrant community of creatives who are not only exceptionally
                  talented but also genuinely supportive and kind. Being part of
                  a company that values creative excellence above all and caters
                  to some of the most prestigious global tech brands is an
                  exhilarating experience. At TeamHAS Visionz, I have the
                  freedom to explore my artistic boundaries and collaborate with
                  like-minded individuals. It's a place where innovation meets
                  art, and the opportunity to contribute to such an environment
                  is truly rewarding.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Guang</h3>
                <p>Senior Illustrator</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Alex Sanchez.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  As CMO at TeamHAS Visionz, I'm surrounded by creativity and
                  innovation. Our team, rich in designers and creatives, crafts
                  campaigns that captivate global tech brands. We set a high
                  standard for creative excellence, blending strategic thinking
                  with artistic talent. Leading marketing here, I harness our
                  collective creativity to surpass our goals, redefining
                  brand-audience connections for impactful, future-forward
                  engagements.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Alex Sanchez</h3>
                <p>Chief Marketing Officer</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Ruth Gordon.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  I am an eLearning Specialist at TeamHAS Visionz, blending
                  together education passion and technology to further the cause
                  of creative talents. Our relentless focus on excellence
                  ignites innovative learning solutions that engage and inspire.
                  My collaboration with such talented and supportive colleagues
                  propels me to innovate in digital education, creating
                  transformative content. This is a dream role: contributing
                  meaningfully in e-learning, in a company that actually
                  appreciates creativity and effectiveness in solutions.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Ruth Gordon</h3>
                <p>E-Learning Specialist</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="career-swiper-card">
            <div className="card-image">
              <img src="/imgs/team/Noah Kim.jpg" />
            </div>
            <div className="card-text">
              <div className="desc">
                <p>
                  At TeamHAS Visionz, my role as a 3D Modeling Expert is
                  celebrated in a community of brilliant creatives. We aim for
                  and achieve creative excellence, serving top global tech
                  brands. Here, I push 3D art boundaries, collaborating with
                  supportive, talented individuals. Each project is an
                  opportunity to innovate and redefine digital possibilities,
                  making every day an adventure in creativity and artistry.
                </p>
              </div>
              <div className="title">
                <h3 className="heading-gradient">Noah Kim</h3>
                <p> 3D Modeling Expert</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamSlider;
