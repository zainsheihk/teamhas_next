"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Common/Navbar";
import { useParams } from "next/navigation";
import Confetti from 'react-confetti'

const ThankYou = () => {
  const { slug } = useParams();
  const [size, setSize] = useState({ width: 1024, height: 640 })

  useEffect(() => {
    if (window && window?.innerWidth !== size.width) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      setSize({ height, width })
    }
  }, [window?.innerWidth])

  return (
    <main className="pb-200">
      <div id="gradient-bg">
        <Navbar />
        {slug === "call-confirmed" ? (
          <div className="service-detail-banner service-detail adcreatives">
            <section className="banner home banner-main">
              <div className="banner__left banner__left_mobile">
                <img src="/imgs/home-banner-1.png" alt="" />
              </div>
              <div className="container">
                <div className="main-heading-container">
                  <h2 className="text-white" data-aos="fade-up">
                    Great, your form has been submitted 🎉
                  </h2>
                  <p>
                    We’re excited to chat with you. You should have received a
                    confirmation in your email inbox by now. But hold on, don't
                    go just yet! Take a moment to behold some of our most
                    awe-inspiring work. Trust us, it's going to knock your socks
                    off! 👉
                  </p>
                </div>
                <div
                  className="btn-container"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
              <div className="banner__right banner__right_home">
                <img src="/imgs/home-banner-2.png" alt="" />
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}

        <Confetti
          width={size.width || 1024}
          height={size.height || 720}
          recycle={false}

        />
      </div>
    </main>
  );
};

export default ThankYou;
