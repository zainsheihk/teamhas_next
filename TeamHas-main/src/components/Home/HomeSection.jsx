import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Navbar = dynamic(() => import("../Common/Navbar"));
const Brands = dynamic(() => import("../Common/Brands"));
const VideoBox = dynamic(() => import("../Common/VideoBox"));

import { FrequentlyAsk } from './FrequentlyAsk'
import ClientFeedback from './ClientFeedback'
import { PricingCard } from '../Pricing/PricingCard'
import OurWork from './OurWork'
import MaskHeading from '../Animation/MaskHeading';


export const HomeSection = () => {


    return (
        <>
            <div className="topLeft-gradient home">
                <div className="home-banner-bg">
                    <Navbar />

                    <section className="banner home banner-main">
                        <div className="banner__left banner__left_mobile">
                            <img src="/imgs/home-banner-mobile.png" alt="" />
                        </div>
                        <div className="banner__center banner__center_home">
                            <div className="main-heading-container">

                                <MaskHeading />
                                {/* <h1 className="main-heading" data-aos="fade-up">
                                    <div style={{ display: 'flex',justifyContent:'center' }}>
                                        <span className="heading-underline heading-gradient head-thousnad">Thousands</span>
                                        <span className="heading-outline">Troubles</span>
                                    </div>
                                    <span className="heading-gradient head-one">One</span>
                                    <span className="heading-underline heading-outline">Solution
                                        <img className="heading-ellipse" src="/imgs/heading-ellipse.png" />
                                    </span>
                                </h1> */}
                            </div>
                            <div className="btn-container" data-aos="fade-up" data-aos-duration="1000">
                                <a href="/bookacall" className="btn btn-primary "><span>Talk to Us</span></a>
                                {/* <!-- <a href="#" className="btn btn-primary btn-secondary"><span>How it work</span></a> --> */}
                            </div>
                        </div>
                        <div className="banner__right banner__right_home">
                            <img src="/imgs/home-banner-2.png" alt="" />
                        </div>
                    </section>
                </div>
            </div>
            <section id="gradient-bg">
                <div className="brands home ">
                    <div className="container">
                        <h2 data-aos="fade-up">
                            <span className="heading-gradient">Brands</span>{" "}
                            <span className="heading-grey">That Trust Our Team</span>
                        </h2>
                        <p data-aos="fade-up" data-aos-duration="1000">
                            Trusted Globally Sinces 2017
                        </p>
                    </div>
                    <Brands />
                </div>

                <div className="about home">
                    <div id="">
                        <div className="container">
                            <div className="about-header">
                                <h2 data-aos="fade-up">
                                    <span className="heading-gradient">Crafting</span>
                                    <span className="heading-grey">
                                        {" "}
                                        Visual Masterpiece, One Project at a Time
                                    </span>
                                </h2>
                                <p data-aos-duration="1000" data-aos="fade-up">
                                    Since 2017, TeamHAS Visionz has been killin it in the design
                                    game, turning fresh ideas into dope visuals that dont just
                                    show up, they show off – your story, our art, unforgettable.{" "}
                                </p>
                            </div>

                            <div className="box-container">
                                <div className="left" data-aos="fade-left">
                                    <h2>
                                        <span className="heading-gradient">Meet TeamHAS Visionz:</span>{" "}
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

                <div className="our-team">
                    <div className="container">
                        <div className="" data-aos="fade-up">
                            <div className="home-sec-3">
                                <div className="statics-wrapper">
                                    <div
                                        className="statics"
                                        data-aos-duration="300"
                                        data-aos="fade-up"
                                    >
                                        <div className="image one">
                                            {" "}
                                            <Image width={500} height={330} src="/imgs/no.3-01-01.png" alt="N/A"/>
                                        </div>
                                        <div>
                                            <h3>
                                                <span className="heading-grey">Top 1% of </span>
                                                <span className="heading-gradient">global </span>
                                                <span className="heading-grey"> creative talent</span>
                                            </h3>
                                            <p>
                                                Were not restricted by borders. Top-tier talent from
                                                diverse backgrounds equals consistently high-quality
                                                work for your brand.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="statics"
                                        data-aos-duration="400"
                                        data-aos="fade-up"
                                    >
                                        <div className="image two">
                                            {" "}
                                            <Image width={500} height={330} src="/imgs/no.2-01.png" alt="N/A" />
                                        </div>

                                        <div>
                                            <h3>
                                                <span className="heading-grey">Ultra-fast</span>
                                                <span className="heading-gradient"> turnaround</span>
                                                <span className="heading-grey"> times</span>
                                            </h3>
                                            <p>
                                                With dedicated project managers, collaborative online
                                                tools and expert use of AI, projects can be completed in
                                                as little as 48, 24, or even 12 hours.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="statics"
                                        data-aos-duration="500"
                                        data-aos="fade-up"
                                    >
                                        <div className="image three">
                                            <Image width={500} height={330} src="/imgs/no.1-01.png" alt="N/A"/>
                                        </div>

                                        <div>
                                            <h3>
                                                <span className="heading-grey">Pick a plan that</span>
                                                <span className="heading-gradient"> vibes</span>
                                                <span className="heading-grey"> with your vision </span>
                                            </h3>
                                            <p>
                                                where its all about bangin results, not clocked hours,
                                                making every buck you drop tell your story louder.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="our-plans" id="">
                        <div className="container">
                            <div className="main-content">
                                <h2 data-aos="fade-up">
                                    <span className="heading-grey">Our</span>{" "}
                                    <span className="heading-gradient">Pricing</span>
                                </h2>
                            </div>
                            <PricingCard />
                        </div>
                    </div>
                    <div className="subscribe-container">
                        <div className="subs-text">
                            <h2>
                                <span className="heading-gradient">Don't see a perfect fit?{" "}</span>
                                <span>Chat with us and get a custom </span>
                                {/* <!--<span className="heading-gradient">plan </span>--> */}
                                <span>plan according to your needs.</span>
                            </h2>
                            <p>
                                While our plans may appear tailored for large enterprises due to
                                pricing and scope, we also understand the unique challenges
                                faces by creative individuals in realizing their dreams. Whether
                                you need a simple logo or a complete brand overhaul we provide
                                custom, creative, and professional solutions. Reach out to us to
                                discuss a plan that perfectly tailored to your needs.
                            </p>
                        </div>
                        <div className="subs-btn">
                            <a href="bookacall">
                                <button className="btn btn-primary myBtn">
                                    <span>Book a call</span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <OurWork />

                </div>

                <ClientFeedback />

                <FrequentlyAsk isVirtualization={true} />
            </section>
        </>
    )
}
