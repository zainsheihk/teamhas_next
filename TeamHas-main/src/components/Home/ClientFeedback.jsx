"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { ICONS } from '@/utils/geticon';

const ClientFeedback = () => {

    const FEEDBACKS = [
        {
            name: `Alicia Rodriguez - Marketing Director`,
            avatar: `/imgs/aliciarodriguez.jpg`,
            designation: "FreshFoods Co.",
            feedback: `The team at TeamHAS Visionz transformed our ideas into a
                        visually stunning reality. Their dedication to capturing
                        the essence of our brand was evident in every design.
                        Highly recommended for any brand looking to make an
                        impact.`
        },
        {
            name: `Michael Chen - Founder`,
            avatar: `/imgs/Michealchen.jpeg`,
            designation: "StartUp Launchpad",
            feedback: `From concept to final execution, TeamHAS Visionz was
            phenomenal. Their attention to detail and commitment to our
            vision was unmatched. Our startups branding has never looked
            better.`
        },
        {
            name: `Emily Patel - Creative Head`,
            avatar: `/imgs/emilypatel.jpg`,
            designation: `GreenEarth Activewear`,
            feedback: `TeamHAS Visionz’s work is nothing short of inspirational.
            The illustrations and packaging designs they created for us
            were both beautiful and effective, elevating our brand to
            new heights.`
        }, {
            name: `Sophia Martinez - Product Manager`,
            avatar: `/imgs/derekjohnson.jpg`,
            designation: ``,
            feedback: `The 3D mockups TeamHAS Visionz produced for our product
            launch were incredibly realistic and detailed. Their work
            helped us visualize our products better and made our
            marketing campaign a resounding success.`
        },
        {
            name: `Jonathan Smith - CEO,`,
            avatar: `/imgs/jonathansmith.jpg`,
            designation: `Tech Innovate`,
            feedback: ` Partnering with TeamHAS Visionz was a game-changer for our
            digital presence. Their creative genius not only enhanced
            our brand’s visibility but also deeply resonated with our
            audience. A true masterclass in design excellence.`
        },
    ]

    return (
        <>
            <div className="feed-backs">
                <h2 data-aos="fade-up">
                    <span className="heading-grey" >
                        What Our
                    </span>
                    <span className="heading-gradient"> Clients </span>
                    <span className="heading-grey">Say</span>
                </h2>


                <Swiper
                    className="mySwiper swiper client-slider"
                    loop={true}
                    // centeredSlides={true}
                    Infinity={true}
                    breakpoints={
                        {
                          // when window width is >= 320px
                          320: {
                            slidesPerView: 1,
                            spaceBetween:20,

                          },
                          560: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          // when window width is >= 480px
                          860: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                          },
                          // when window width is >= 1200px
                          1200: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          1400: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                          // when window width is >= 640px
                        }
                    }
                >
                    <div className="card-wrapper swiper-wrapper">
                        {FEEDBACKS.map((item, index) => (
                            <SwiperSlide key={"card_" + index} className='client-card bg-grad-animation swiper-slide'>
                                <div>
                                    <img src="/imgs/mdi_comma.png" className="comma" />
                                    <div className="rating-wrapper">
                                        {ICONS.star}
                                        {ICONS.star}
                                        {ICONS.star}
                                        {ICONS.star}
                                        {ICONS.star}
                                    </div>
                                    <p className="client-desc">
                                        {item.feedback}
                                    </p>

                                    <div className="client-dets">
                                        <Image width={150} height={100} src={item.avatar} alt="" />
                                        <div className="name">
                                            <p>{item.name}</p>
                                            <p>{item.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>

            </div>
        </>
    )
}

export default ClientFeedback