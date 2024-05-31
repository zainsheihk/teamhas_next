"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export const FrequentlyAsk = ({ isVirtualization = false }) => {
    const [accordian, setAccordian] = useState(0)
    const [showAccordian, setShowAccordian] = useState(4)
    const [showAcc, setShowAcc] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY;
        const pageHeight = document.body.clientHeight;
        const halfwayPoint = pageHeight / 2;
        setShowAcc(position > halfwayPoint);
    };

    useEffect(() => {
        if (isVirtualization) {
            window.addEventListener('scroll', handleScroll);
        } else {
            setShowAcc(true)
        }

        return () => {
            window?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleAccordian = (id) => {
        if (id === accordian) {
            setAccordian(0)
            return;
        }

        setAccordian(id)
    }

    const ASK_QUESTION = [
        {
            title: `What is the typical process for starting a new project
            with TeamHAS Visionz?`,
            content: `Slide over to our Contact Us page or hit that Talk to Us
            button. Or you can shoot a message to support@teamhas.net
            and our project manager will swoop in, ready to guide you
            through whats next.`
        },
        {
            title: `How do you handle revisions or changes to a project?`,
            content: `We welcome feedback and understand the importance of
            revisions. Our standard packages include a set number of
            revisions. Additional revisions can be accommodated with
            an understanding of potential adjustments in timelines and
            costs.`
        },
        {
            title: `What is the average turnaround time for a project?`,
            content: ` The turnaround time varies depending on the complexity and
            scope of the project. For most standard projects, we aim
            to deliver initial concepts within 1-2 weeks. We always
            strive to meet any specific deadlines you may have.`
        },
        {
            title: `How does communication work during a project?`,
            content: `Clear and consistent communication is key. We use email,
            phone calls, and video conferences to keep you updated. A
            dedicated project manager will be assigned to be your
            point of contact throughout the project.`
        },
        {
            title: `What are your payment terms?`,
            content: `We generally require a 50% deposit to start a project,
            with the balance due upon completion. For larger projects,
            we may arrange a payment schedule. We accept payments via
            bank transfer, credit card, or PayPal.`
        },
        {
            title: `How do you ensure client satisfaction?`,
            content: `Client satisfaction is our top priority. We achieve this
            through active communication, adhering to project
            timelines, and ensuring that the final deliverables meet
            or exceed your expectations. We also offer post-project
            support to address any concerns.`
        },
        {
            title: `Can TeamHAS Visionz handle rush projects?`,
            content: `Yes, we can accommodate rush projects depending on our
            current workload. Rush projects may incur an additional
            fee to prioritize and allocate the necessary resources.`
        },
        {
            title: `What kind of support do you offer post-completion of a
            project?`,
            content: `Post-project support varies based on the nature of the
            project. Typically, this includes handling any minor
            tweaks or resolving any issues related to the project
            deliverables.`
        }, {
            title: `How do you protect client confidentiality and intellectual
            property?`,
            content: `We take client confidentiality seriously. We are happy to
            sign a non-disclosure agreement (NDA) if required. All
            intellectual property rights of the created material are
            transferred to you upon project completion and final
            payment.`
        }, {
            title: `How can I get a quote for my project?`,
            content: `You can request a quote by contacting us through our
            website, via email, or by phone. Providing us with
            detailed information about your project will help us give
            you a more accurate estimate.`
        },
        {
            title: `How do I choose the right plan for my needs?`,
            content: `Choosing the right plan depends on your requirements.
            Contact us, and we can guide you through the plans,
            discussing features and pricing to ensure the best fit for
            your goals.`
        },

    ]

    const handleLoadMoreAccordian = () => {
        if (showAccordian === 4) {
            setShowAccordian(11)

        } else {
            setShowAccordian(4)

        }
    }

    return (
        <>
            <div id="">
                <div className="faqs">
                    <div className="container">
                        <h2 data-aos="fade-up">
                            <span className="heading-grey text-white">
                                <span className="heading-gradient">Frequently</span>{" "}
                                <span> Asked Questions</span>
                            </span>
                        </h2>
                        <div className='accordian-wrap'>


                            {showAcc ? <>
                                <ul data-aos="fade-in">
                                    {ASK_QUESTION.splice(0, 4).map((item, ind) => (
                                        <li key={"acc_" + ind} className="accordion" >
                                            <div className={`accordion-header ${accordian == ind + 1 ? "active" : ""}`} onClick={() => handleAccordian(ind + 1)}>
                                                <p>
                                                    {item.title}
                                                </p>
                                                <span className='accordian-load-content-btn'>
                                                    <Image width={300} height={300} style={{ width: '100%', height: '100%' }} src="/imgs/iconoir_plus.png" alt="" quality={100} />
                                                </span>                                    </div>
                                            <div className={`content ${accordian == ind + 1 ? "accordian_active" : ""}`} style={{
                                                maxHeight: `${accordian == ind + 1 ? "132px" : "0px"}`,
                                                // maxHeight: 'fit-content'
                                            }}>
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>
                                        </li>
                                    ))}

                                </ul>

                                <ul className={`accordion-hidden ${showAccordian !== 4 ? "active" : ""}`}>
                                    {ASK_QUESTION.splice(4, showAccordian).map((item, ind) => (
                                        <li key={"acc_" + ind} className="accordion" >
                                            <div className={`accordion-header ${accordian == ind + 5 ? "active" : ""}`} onClick={() => handleAccordian(ind + 5)}>
                                                <p>
                                                    {item.title}
                                                </p>
                                                <span className='accordian-load-content-btn'>
                                                    <Image width={300} height={300} style={{ width: '100%', height: '100%' }} src="/imgs/iconoir_plus.png" alt="" quality={100} />
                                                </span>
                                            </div>
                                            <div className={`content ${accordian == ind + 5 ? "accordian_active" : ""}`} style={{
                                                maxHeight: `${accordian == ind + 5 ? "132px" : "0px"}`,
                                                // maxHeight: 'fit-content'
                                            }}>
                                                <p>
                                                    {item.content}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="accordion-more-btn">
                                    <span className='accordian-load-content-btn'>
                                        <Image
                                            width={300}
                                            height={300}
                                            src="/imgs/iconoir_plus.png"
                                            alt=""
                                            quality={100}
                                            style={{ transform: `${showAccordian === 11 ? "rotate(135deg)" : ""}`, width: '100%', height: '100%' }}
                                            onClick={() => handleLoadMoreAccordian()}
                                        />
                                    </span>
                                </div>
                            </> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
