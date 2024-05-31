import React from 'react'
import dynamic from 'next/dynamic';
import { PricingCard } from './PricingCard'
import { FrequentlyAsk } from '../Home/FrequentlyAsk';
import Loader from '../Common/Loader';
import { ICONS } from '@/utils/geticon';
import WorkEmailComp from '../Common/WorkEmailComp';

const DynamicBrands = dynamic(() => import('../Common/Brands'), {
    loading: () => <Loader />,
})

const PricingSection = () => {
    return (
        <>
            <div>
                <div className="pricing-page">
                    <div className="container">
                        <div className="container-pricing ">
                            <section className="banner">
                                <div className="container">
                                    <div className="">
                                        <div className="main-content">
                                            <h1 data-aos="fade-up">
                                                <span className="">Pricing</span>
                                            </h1>
                                            <h2 data-aos-duration="300" data-aos="fade-up" className='text-white'>
                                                Your always-on creativity subscription
                                            </h2>
                                            <p data-aos-duration="700" data-aos="fade-up">
                                                TeamHAS Visionz is where your wildest ideas get the real deal treatment – non-stop, cutting-edge designs ready to roll whenever your muse shouts out.
                                            </p>
                                        </div>
                                        <WorkEmailComp classess={"check-flex"} btnText={"Get Started"} redirect={"/bookacall"} />
                                    </div>
                                    <div className="btn-container" data-aos="fade-up" data-aos-duration="1000"></div>
                                </div>
                            </section>
                        </div>
                        <div className="pricing-brands">



                            <DynamicBrands />

                        </div>
                        <PricingCard />
                    </div>

                    <div className="subscribe-container">
                        <div className="subs-text">
                            <h2 className='text-white'>
                                <span className="heading-gradient">Don't see a perfect fit</span>?{" "}
                                <span>Chat with us and get a custom </span>
                                <span className="heading-gradient">plan </span>
                                <span>according to your needs.</span>

                            </h2>
                            <p>While our plans may appear tailored for large enterprises due to pricing and scope, we also understand the unique challenges faces by creative
                                individuals in realizing their dreams. Whether you need a simple logo or a complete brand overhaul we provide custom, creative, and professional
                                solutions. Reach out to us to discuss a plan that perfectly tailored to your needs.
                            </p>
                        </div>
                        <div className="subs-btn">
                            <button className="btn btn-primary myBtn"><span>Book a call</span></button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="included-plan">
                            <h2>
                                <span className="heading-grey" data-aos="fade-up"
                                >INCLUDED IN ALL PLANS</span
                                >
                            </h2>

                            <ul className="content-list-1" data-aos="fade-up">
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>30% of total hours can be fast turnaround 12 or 24 hour</p>
                                </li>
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>
                                        Dedicated team made of project Manager, Designers,
                                        Creativity Directors and Customer Success Manager
                                    </p>
                                </li>
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>
                                        Unlimited users on the TeamHAS platform, where project
                                        briefling, Collaboration and reviews happen
                                    </p>
                                </li>
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>Support of multiple brands</p>
                                </li>
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>Complete time zone coverage</p>
                                </li>
                                <li>
                                <span className="circle-check">{ICONS.check}</span>
                                    <p>
                                        Personalize onboarding at the start of the relationship as
                                        well as for new users
                                    </p>
                                </li>
                            </ul>


                        </div>
                    </div>
                    <FrequentlyAsk />
                </div>
            </div>
        </>
    )
}

export default PricingSection