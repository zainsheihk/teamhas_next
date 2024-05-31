import React from 'react'
import VideoBox from '../Common/VideoBox';
import dynamic from 'next/dynamic';
import Loader from '../Common/Loader';
import WorkEmailComp from '../Common/WorkEmailComp';
 
const DynamicWorkPreview = dynamic(() => import('./WorkPreview'), {
  loading: () => <Loader/>,
})

const DynamicBrands = dynamic(() => import('../Common/Brands'), {
  loading: () => <Loader/>,
})


const WorkSection = () => {

  return (
    <>
      <div className="portfolio-page">
        <div className="our-portfolio portfolio-pb">
          <div className="container">
            <div className="container-work-preview">

              <section className="banner">
                <div className="container">
                  <div className="main-heading-container">
                    <h1 className="hd-cls text-white" data-aos="fade-up">
                      OUR WORK
                    </h1>
                    <p>
                      A vibrant showcase of how we transform ideas into captivating visual stories that spark conversations
                      and mesmerize audiences globally.
                    </p>
                    <WorkEmailComp classess={"check-flex"} btnText={"Get Started"} redirect={"/bookacall"} />
                  </div>
                  <div className="btn-container" data-aos="fade-up" data-aos-duration="1000"></div>
                </div>
              </section>
            </div>

            <div className="pricing-brands">

              <DynamicBrands/>

            </div>
            <div className="about home">
              <div id="">
                <div className="container">

                  <div className="box-container">
                    <div className="left" data-aos="fade-left">
                      <h2 className="head-cls text-white">
                        <span className="heading-gradient">
                          Meet TeamHAS Visionz: </span>
                        <span className="heading-grey">
                          Elevating Your Creative Journey
                        </span>
                      </h2>
                      <p>
                        Embark on an innovative voyage with TeamHAS Visionz, your ultimate creative ally. We blend
                        imagination
                        with expertise, transforming your ideas into stunning realities that captivate and inspire. Welcome
                        to a
                        partnership where your vision becomes our mission.
                      </p>


                    </div>
                    <VideoBox />
                  </div>
                </div>
              </div>
            </div>
            
            <DynamicWorkPreview />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkSection