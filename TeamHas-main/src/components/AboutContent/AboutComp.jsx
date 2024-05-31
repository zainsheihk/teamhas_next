import React from 'react'
import { FrequentlyAsk } from '../Home/FrequentlyAsk'
import { ICONS } from '@/utils/geticon'
import WorkEmailComp from '../Common/WorkEmailComp'
import dynamic from 'next/dynamic'
import Loader from '../Common/Loader'

const DynamicBrands = dynamic(() => import('../Common/Brands'), {
    loading: () => <Loader/>,
})

const AboutComp = () => {
  return (
    <main className="about-page pricing-page">
            <div>
                <div className="container">

                    <div className="container  ">
                        {/* <!-- <h1 data-aos="fade-up">
                  <span className="heading-gradient">Our Services</span>
                </h1>
                All --> */}
                        <section className="banner banner-2">
                            <div className="container">
                                <div className="">
                                    <div className="main-content pd-cls about-cls">
                                        <h1 data-aos-duration="200" data-aos="fade-up">
                                            <span className="heading-gradient">About Us</span>
                                        </h1>
                                        <h2 data-aos-duration="300" data-aos="fade-up">
                                            Crafting Visual Narratives That Resonate
                                        </h2>
                                        <p data-aos-duration="500" data-aos="fade-up">
                                            Welcome to TeamHAS Visionz, where creativity meets innovation. Since our inception in 2017, we've been on a relentless pursuit of design perfection, transforming ideas into visual spectacles that captivate and inspire. Our journey is woven with the threads
                                            of passion, dedication, and a deep understanding of the art and science of design. We don't just create; we narrate your story through compelling visuals, leaving a lasting impression.
                                        </p>
                                    </div>
                                    <WorkEmailComp classess={"check-flex"} btnText={"Get Started"} redirect={"/bookacall"} />
                                </div>
                                <div className="btn-container" data-aos="fade-up" data-aos-duration="1000"></div>
                            </div>
                        </section>
                    </div>

                    <div className="pricing-brands">
                        <DynamicBrands/>
                    </div>
                    <div className="mission">
                        <div className="left" data-aos="fade-left">
                            <h2 className='font-cls'>Our Mission</h2>
                            <p>
                                At TeamHAS Visionz, our mission transcends beyond mere design creation. We aim to be the catalyst for businesses to thrive in the digital landscape. Our approach is holistic – we consider every hue, line, and texture to ensure they speak your brand’s
                                language. We are committed to pushing boundaries, challenging norms, and setting new standards in the creative industry. Our mission is not just about delivering outstanding designs; it’s about igniting brand stories that
                                resonate and endure.
                            </p>
                        </div>
                        <div className="right" data-aos="fade-right">
                            <img src="/imgs/career-ourmission.png" alt="img" />
                        </div>
                    </div>
                    <div className="mission">
                        <div className="left" data-aos="fade-left">
                            <h2 className="font-cls">Our Commitments:</h2>
                            <ul className="font-cls">
                                <li>
                                    <span className='circle-check'>{ICONS.check}</span>
                                    <p>
                                        <b>Innovative Excellence:</b> Continually advancing in creativity and technology.
                                    </p>
                                </li>
                                <li>
                                    <span className='circle-check'>{ICONS.check}</span>
                                    <p>
                                        <b>Client-Centric Approach:</b> Tailoring solutions to fit your unique needs.
                                    </p>
                                </li>
                                <li>
                                    <span className='circle-check'>{ICONS.check}</span>
                                    <p>
                                        <b>Quality Assurance:</b> Upholding the highest standards in every project.
                                    </p>
                                </li>
                                <li>
                                    <span className='circle-check'>{ICONS.check}</span>
                                    <p>
                                        <b>Ethical Practices:</b> Maintaining integrity and transparency at all times.
                                    </p>
                                </li>
                                <li>
                                    <span className='circle-check' style={{marginTop:"-40px"}}>{ICONS.check}</span>
                                    <p>
                                    <b>Sustainable Growth:</b> Fostering long-term relationships and environmental consciousness.
                                    </p>
                                </li>
                                {/* <li>
                                    <span className='circle-check'>{ICONS.check}</span>
                                    <p>
                                        <b>Sustainable Growth:</b> Fostering long-term relationships and environmental consciousness.
                                    </p>
                                </li> */}
                            </ul>
                        </div>
                        <div className="right" data-aos="fade-right">
                            <img src="/imgs/career-our-comitment.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="gradient-bg-2 choose-us">
                <div className="container">
                    <h2 className="" data-aos="fade-up">
                        <span className="">Your Studio </span>
                        <span className="heading-gradient">One-Stop </span>
                        <span>for Exceptional  </span>
                        <span className="heading-gradient">Design</span>
                        <span> Solutions</span>
                    </h2>
                    <div className="mission">
                        <div className="left" data-aos="fade-left">
                            <h2>Crafting the Future of Your Brand</h2>
                            <p>
                                Why choose TeamHAS Visionz? Because we understand the power of good design. Our team is not just a group of designers; we are strategists, thinkers, and visionaries. We blend artistic talent with market insights to create designs that do more than just
                                look good – they work. We believe in building partnerships, understanding your journey, and being a part of your success. With us, you're not just getting a service; you're gaining a partner who is invested in your growth
                            </p>
                        </div>
                        <div className="right" data-aos="fade-right">
                            <img src="/imgs/career-Crafting-future.png" alt="" />
                        </div>
                    </div>
                    <h2>Key Reasons to Choose Us:</h2>
                    <ul data-aos="fade-left" className='font-cls'>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>
                                <b>Bespoke Creativity:</b> Tailored solutions that embody your brand's essence.
                            </p>
                        </li>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>
                                <b>Proven Track Record:</b> Years of experience with a portfolio of successful projects.
                            </p>
                        </li>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>
                                <b>Holistic Approach:</b> Combining aesthetics with functionality for impactful results.
                            </p>
                        </li>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>
                                <b> Cutting-Edge Techniques: </b> Utilizing the latest tools and trends in design.
                            </p>
                        </li>
                        <li>
                            <span className='circle-check'>{ICONS.check}</span>
                            <p>
                                <b>Comprehensive Support: </b> From initial concept to final execution and beyond.
                            </p>
                        </li>
                    </ul>
                    <div className="get-started myBtn heading-gradient" data-aos="fade-left">
                        <a href="bookacall"> Get Started Now</a> {ICONS.rightArrow}
                    </div>
                </div>
            </div>
            <div className="gradient-bg-2">
                {/* <div className="faqs">
                    <div className="container">
                        <h2 data-aos="fade-up">
                            <span className="heading-grey"><span className="heading-gradient">Frequently</span> <span> Asked Questions</span></span>
                        </h2>
                        <ul>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>
                                        What is the typical process for starting a new project with TeamHAS Visionz?
                                    </p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Slide over to our 'Contact Us' page or hit that 'Talk to Us' button. Or you can shoot a message to support@teamhas.net and our project manager will swoop in, ready to guide you through what's next.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>How do you handle revisions or changes to a project?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        We welcome feedback and understand the importance of revisions. Our standard packages include a set number of revisions. Additional revisions can be accommodated with an understanding of potential adjustments in timelines and costs.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>What is the average turnaround time for a project?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        The turnaround time varies depending on the complexity and scope of the project. For most standard projects, we aim to deliver initial concepts within 1-2 weeks. We always strive to meet any specific deadlines you may have.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>How does communication work during a project?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Clear and consistent communication is key. We use email, phone calls, and video conferences to keep you updated. A dedicated project manager will be assigned to be your point of contact throughout the project.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>What are your payment terms?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        We generally require a 50% deposit to start a project, with the balance due upon completion. For larger projects, we may arrange a payment schedule. We accept payments via bank transfer, credit card, or PayPal.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>How do you ensure client satisfaction?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Client satisfaction is our top priority. We achieve this through active communication, adhering to project timelines, and ensuring that the final deliverables meet or exceed your expectations. We also offer post-project support to address any concerns.
                                    </p>
                                </div>
                            </li>


                        </ul>
                        <ul className="accordion-hidden">


                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>Can TeamHAS Visionz handle rush projects?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Yes, we can accommodate rush projects depending on our current workload. Rush projects may incur an additional fee to prioritize and allocate the necessary resources.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>
                                        What kind of support do you offer post-completion of a project?
                                    </p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Post-project support varies based on the nature of the project. Typically, this includes handling any minor tweaks or resolving any issues related to the project deliverables.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>
                                        How do you protect client confidentiality and intellectual property?
                                    </p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        We take client confidentiality seriously. We are happy to sign a non-disclosure agreement (NDA) if required. All intellectual property rights of the created material are transferred to you upon project completion and final payment.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>How can I get a quote for my project?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        You can request a quote by contacting us through our website, via email, or by phone. Providing us with detailed information about your project will help us give you a more accurate estimate.
                                    </p>
                                </div>
                            </li>
                            <li className="accordion" data-aos="fade-up">
                                <div className="accordion-header">
                                    <p>How do I choose the right plan for my needs?</p>
                                    <img src="/imgs/iconoir_plus.png" alt="" />
                                </div>
                                <div className="content">
                                    <p>
                                        Choosing the right plan depends on your requirements. Contact us, and we can guide you through the plans, discussing features and pricing to ensure the best fit for your goals.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="accordion-more-btn">
                            <img className="more-accordion" src="/imgs/iconoir_plus.png" alt="" />
                        </div>

                    </div>
                </div> */}
                <FrequentlyAsk/>
            </div>
        </main>
  )
}

export default AboutComp