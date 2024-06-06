'use client'
import { ICONS } from '@/utils/geticon';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'
import { serviceNavList } from '@/utils/navbarListData';
import Loader from './Loader';

const Navbar = ({classes = "p-fixed"}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [emailVal, setEmailVal] = useState("");
    const [isClickLoader,setClickLoaderSelectHome] = useState(false);

    const headerRef = useRef(null);
    const router = useRouter();

    const handleScroll = () => {
        // console.log(window.scrollY,"sss")
        const threshold = 70; // Define your threshold here
        const currentScrollTop = window.scrollY;
        // console.log(currentScrollTop >= threshold,currentScrollTop,threshold,"ccc")
        setIsScrolled(currentScrollTop >= threshold);

        if (headerRef.current) {
            headerRef.current.style.transition = 'transform 0.3s ease-in-out';

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                headerRef.current.style.transform = 'translateY(-100%)';
                // headerRef.current.style.position = 'relative';

            } else {
                // Scrolling up
                headerRef.current.style.transform = 'translateY(0)';

            }

            // Update last scroll top position
            setLastScrollTop(currentScrollTop);
        }
    };

    const handleClick = ()=>{
        setClickLoaderSelectHome(true);
    }

    const handleChange = (e)=> setEmailVal(e.target.value);
    const handleCall = () => {
        if(emailVal){
            router.push(`/bookacall?email=${emailVal}`);
        }
    } 

    useEffect(() => {
        window.scroll({top:0,behavior:"smooth"})

            handleScroll()
        
    }, [])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);



    return (
        <>
    {isClickLoader ? <Loader /> : <></> }
            <header id="fixed-header" className={`${isScrolled  ? 'header-scrolled' : ""} ${classes}`} ref={headerRef}>
                <div className="container">
                    <div className="logo">
                        <Link href="/"><img src="/imgs/logo.png" alt="" /></Link>
                    </div>
                    <nav>
                        <ul className="nav-list">
                            <li className="active"><Link href="/" onClick={()=> handleClick()}>Home</Link></li>
                            <li className='nav_service-cls'>
                                <Link href="#" className="service-cls">Services
                                    {ICONS.angleDown}
                                </Link>

                                <div className="drop-down service-cls">
                                    <div className="square"></div>
                                    <div className=" drop-large">
                                        <div className="drop-services">
                                            <div className="drop-heading">
                                                <h2>Services</h2>
                                            </div>
                                            <div className="drop-list">
                                                <div>
                                                    <ul>
                                                        {serviceNavList?.slice(0, 6)?.map((data, ind) => (
                                                            <li key={ind}>
                                                                <img src={data?.img} alt="" />
                                                                <Link href={data?.path}  onClick={()=> handleClick()}>

                                                                    <h4>{data?.name}</h4>
                                                                    <p>{data?.desc}</p>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul>
                                                        {serviceNavList?.slice(6, 12)?.map((data, ind) => (
                                                            <li key={ind}>
                                                                <img src={data?.img} alt="" />
                                                                <Link href={data?.path}  onClick={()=> handleClick()}>

                                                                    <h4>{data?.name}</h4>
                                                                    <p>{data?.desc}</p>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul>

                                                        {serviceNavList?.slice(12, 14)?.map((data, ind) => (
                                                            <li key={ind}>
                                                                <img src={data?.img} alt="" />
                                                                <Link href={data?.path}  onClick={()=> handleClick()}>

                                                                    <h4>{data?.name}</h4>
                                                                    <p>{data?.desc}</p>
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="drop-btn">
                                                <Link href="/services" id="" className="btn" onClick={()=> handleClick()}><span>View All</span></Link>
                                            </div>
                                        </div>
                                        <div className="drop-newsletter topLeft-gradient">
                                            <div className="drop-img"> <img src="/imgs/servicespopup.png" alt="" /></div>
                                            <div className="drop-text">
                                                <p>Book Link call</p>
                                                <h3>Want to know if TeamHas good fit?</h3>
                                                <p>Book Link demo and let us answer your all you questions!</p>
                                                <div className="drop-form">
                                                    <input className="form-control" placeholder="You Work Email" name='email' value={emailVal} onChange={handleChange} />
                                                    <button className="btn" type='button' onClick={handleCall}><span>Get Started</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <Link href="/portfolio" onClick={()=> handleClick()}>Our Work
                                </Link>

                            </li>
                            <li><Link href="/pricing" onClick={()=> handleClick()}>Pricing</Link></li>
                            <li className='nav_about-cls'>
                                <Link href="#" className="about-cls">About
                                    {ICONS.angleDown}

                                </Link>
                                <div className="drop-down about-cls">
                                    <div className="about-square"></div>
                                    <div className=" drop-large about-drop">
                                        <div className="drop-services">
                                            <div className="drop-list">

                                                <div className="left">
                                                    <ul>
                                                        <li onClick={()=> handleClick()}>
                                                            <img src="/imgs/aboutlogo.png" alt="" />

                                                            <Link href="/about">
                                                                <h4>About us</h4>
                                                            </Link>
                                                        </li>
                                                        <li onClick={()=> handleClick()}>
                                                            <img src="/imgs/careerlogo.png" alt="" />

                                                            <Link href="/career">
                                                                <h4>Career</h4>
                                                            </Link>
                                                        </li>
                                                        <li onClick={()=> handleClick()}>
                                                            <img src="/imgs/contactuslogo.png" alt="" />

                                                            <Link href="/contact">
                                                                <h4>Contact us</h4>
                                                            </Link>
                                                        </li>


                                                    </ul>
                                                    <div className="drop-form">
                                                        <input className="form-control" placeholder="You Work Email" name='email' value={emailVal} onChange={handleChange} />
                                                        <button className="btn" type='button' onClick={handleCall}><span>Get Started</span></button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="drop-newsletter topLeft-gradient">
                                            <div className="drop-img"> <img src="/imgs/About Us pop up illustration-01.png" alt="" /></div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <Link href="/bookacall"  onClick={()=> handleClick()} className="btn btn-primary cls-mobile"><span>Talk to Us</span></Link>
                        </ul>
                    </nav>

                    {/*===========================================
                                    Mobile Nav
                    =========================================== */}

                    <nav role="navigation" className="mobile-nav">
                        <div id="menuToggle">
                            {/* <!-- A fake / hidden checkbox is used as click reciever,so you can use the :checked selector on i --> */}
                            <input type="checkbox" />

                            {/* <!--Some spans to act as Link hamburger. They are acting like Link real hamburger,not that McDonalds stuff.--> */}
                            <span></span>
                            <span></span>
                            <span></span>


                            <ul id="menu">
                                <li><Link href="/">Home</Link></li>
                                {/* <!-- <li><Link href="service">Services</Link></li> --> */}
                                <li className="">
                                    <div tabIndex="0" className="onclick-menu">
                                        <div>
                                            <Link href="/services">Service</Link>
                                            {ICONS.upArrow}
                                        </div>

                                        <ul className="onclick-menu-content">
                                            {serviceNavList?.map((data, ind) => (
                                                <li key={ind}>
                                                    <img src={data?.img} alt="" />
                                                    <Link href={data?.path}>

                                                        <h4>{data?.name}</h4>
                                                        <p>{data?.desc}</p>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/services" id="" className="btn-view-all">View All  &gt;</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </li>
                                <li className="">
                                    <Link href="/portfolio">Our Work</Link>
                                </li>
                                <li><Link href="/pricing">Pricing</Link></li>
                                <li className="">
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li className="">
                                    <Link href="/career">Career</Link>
                                </li>
                                <li className="">
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>


        </>
    )
}

export default Navbar