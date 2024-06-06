"use client"
import { ICONS } from '@/utils/geticon'
import { footerLinks } from '@/utils/navbarListData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { subscribeEmail } from '@/utils/api_handler'
import { toast } from 'react-toastify'
import { ToastError } from '@/utils/ToastShow'

const Footer = ({ isFooterBanner = true, isVirtualization = false }) => {
    const [isChecked, setIsChecked] = useState(false)
    const [showFooter, setShowFooter] = useState(false);
    const [selectServices, setSelectServices] = useState(false);
    const [selectHome, setSelectHome] = useState(false);
    const [isClickLoader, setClickLoaderSelectHome] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")




    const handleScroll = () => {

        const position = window.scrollY;
        const pageHeight = document.body.clientHeight;
        const halfwayPoint = pageHeight / 2.5;
        setShowFooter(position > (halfwayPoint));
    };

    useEffect(() => {
        if (isVirtualization) {

            window.addEventListener('scroll', handleScroll);
        } else {
            setShowFooter(true)
        }

        return () => {
            window?.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleClick = () => {
        setClickLoaderSelectHome(true);
    }

    const submitEmail = async () => {
        // console.log("Submit Email")
        setLoading(true)
        try {
            const promise = subscribeEmail({ email });
            // Call the API only once
            const promiseToastId = toast.promise(promise, {
                pending: 'Submitting',
                success: 'Email Sent Successfully',
                error: 'Error in Submitting Form',
            });

            const response = await promise;
            // Wait for the promise to resolve
            if (response?.status) {
                toast.update(promiseToastId, {
                    render: 'success',
                    autoClose: 3000, // Close the toast automatically after 3 seconds
                });
                setEmail("")
                setIsChecked(false)
            } else {
                toast.update(promiseToastId, {
                    render: 'error',
                    autoClose: 3000, // Close the toast automatically after 3 seconds
                });
            }

        } catch (err) {
            console.log(err, "error on submit email")
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if pre request is pending to return null
        if (loading) {
            return ""
        }

        if (!email) {
            ToastError("Email are required!")
            return ""
        }
        if (!isChecked) {
            ToastError("Please agree to subscribe TeamHAS updates!")
            return ""

        }

        submitEmail()


    }



    return (
        <>
            {isClickLoader ? <Loader /> : <></>}
            <footer style={{ paddingTop: `${isFooterBanner ? "" : "50px"}` }}>
                <div className="container">
                    {showFooter ? <>
                        {isFooterBanner && <div className="f-popup " id="">
                            <div className="f-popup-bg">
                                <img width="300px" className="f-popup-mobile-bg" src="/imgs/footer-right.png" />
                                <div>
                                    <p className="journey-p">20X FASTER THAN HIRING</p>
                                    <h2 className='text-white'>Efficient. Scalable. Reliable</h2>
                                    <a href="bookacall"><button className="btn btn-primary myBtn"><span>Start Journey</span></button></a>
                                </div>
                            </div>
                        </div>}
                        <div className="wrapper">
                            <div className="left">
                                <Link href="/">
                                    <Image
                                        className="logo"
                                        data-aos-duration="1000"
                                        data-aos="fade-down"
                                        src="/imgs/logo.png" alt=""
                                        width={400}
                                        height={60}
                                    />
                                </Link>

                                <ul data-aos-duration="1000" data-aos="fade-left">
                                    <li>
                                        {ICONS.envolope}
                                        <div> <Link href="mailto:hello@teamhas.net">
                                            hello@teamhas.net</Link></div>
                                    </li>
                                    <li>
                                        {ICONS.phone}
                                        <div>
                                            <Link href="phone:">+16149656823</Link>
                                            <Link href="phone:">+44 7883170476</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="social" data-aos="fade-down">
                                    <Link
                                        className="social-icon"
                                        href="https://www.facebook.com/teamhasvisions"
                                        target='_blank'
                                    >
                                        {ICONS.facebook}
                                    </Link>
                                    <Link
                                        className="social-icon"
                                        href="https://instagram.com/hasvisions"
                                        target='_blank'
                                    >
                                        {ICONS.instagram}
                                    </Link>
                                    <Link
                                        className="social-icon"
                                        href="https://www.linkedin.com/company/teamhas-visionz"
                                        target='_blank'
                                    >
                                        {ICONS.linkedin}
                                    </Link>
                                    <Link
                                        className="social-icon"
                                        href="https://x.com/hasvisionz"
                                        target='_blank'
                                    >
                                        {ICONS.twitter}
                                    </Link>
                                </div>
                            </div>

                            <div className="right">
                                <div className="ser mobile-menu" data-aos="fade-up">
                                    <button id="servicesToggle" onClick={() => setSelectServices(!selectServices)}>Services <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></button>
                                    <ul id="servicesList" className={`${selectServices ? "activeList" : ""}`}>
                                        {footerLinks?.slice(0, 15)?.map((data, ind) => (
                                            <li key={ind}><Link href={data?.path} onClick={() => handleClick()}>{data?.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="ser desktop-menu" data-aos="fade-up">
                                    <ul>
                                        {footerLinks?.slice(0, 9)?.map((data, ind) => (
                                            <li key={ind}><Link href={data?.path} onClick={() => handleClick()}>{data?.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="home desktop-menu" data-aos="fade-up">
                                    <ul>
                                        {footerLinks?.slice(9, 15)?.map((data, ind) => (
                                            <li key={ind}><Link href={data?.path} onClick={() => handleClick()}>{data?.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="ser mobile-menu" data-aos="fade-up">
                                    <button id="homeToggle" onClick={() => setSelectHome(!selectHome)}>TeamHAS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 1 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg></button>

                                    <ul id="servicesList" className={`${selectHome ? "activeList" : ""}`}>
                                        {footerLinks?.slice(15, 23)?.map((data, ind) => (
                                            <li key={ind}><Link href={data?.path} onClick={() => handleClick()}>{data?.name}</Link></li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="contact desktop-menu" data-aos="fade-up">
                                    <ul>
                                        {footerLinks?.slice(15, 23)?.map((data, ind) => (
                                            <li key={ind}><Link href={data?.path} onClick={() => handleClick()}>{data?.name}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="news-letter">
                                    <div className="form-control">
                                        <span>{ICONS.envolope}</span>

                                        <span><input type="email" placeholder="Whats Your Email?" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)} /></span>
                                        <button className="submit-btn" onClick={(e) => handleSubmit(e)} disabled={loading}>Submit</button>
                                    </div>

                                    <div>
                                        <input type="checkbox" id='myCheckbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> {" "}
                                        <label htmlFor="myCheckbox"> I also want to subscribe TeamHAS for updates</label>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bottom-bar">
                            <p>&copy; 2024 TeamHas. All rights reserved</p>
                            <ul>
                                <li><Link className='border-bottom-g' href="/terms">terms</Link></li>
                                <li>
                                    <Link className='border-bottom-g' href="/privacy">privacy</Link>
                                </li>
                                <li><Link className='border-bottom-g' href="/about">about</Link></li>
                            </ul>
                        </div>
                    </> : ""}

                </div>
            </footer>
        </>
    )
}

export default Footer