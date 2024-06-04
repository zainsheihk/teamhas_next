"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link';
import "../styles/ourWork.css"



const OurWork = () => {

  const OURWORK_ITEM = [
    {
      name: "Claro",
      img: '/imgs/our-work-thumbnail/claro-01.jpg',
      link: "/portfolio/claro",

    },
    {
      name: "Delice",
      img: '/imgs/our-work-thumbnail/delice-01.jpg',
      link: "/portfolio/delice",

    },
    {
      name: "I Am Five",
      img: '/imgs/our-work-thumbnail/explain_like_i_am_five-01.jpg',
      link: "/portfolio/eli5",

    },
    {
      name: "Frank Green",
      img: '/imgs/our-work-thumbnail/frankgreen-01.jpg',
      link: "/portfolio/frankgreen",

    },
    {
      name: "Fummo",
      img: '/imgs/our-work-thumbnail/fummo-01.jpg',
      link: "/portfolio/fummo",

    },
    {
      name: "Golden Duck",
      img: '/imgs/our-work-thumbnail/goldenduck-01.jpg',
      link: "/portfolio/goldenduckco",

    },
    {
      name: "Grow Tech",
      img: '/imgs/our-work-thumbnail/growtech-01.jpg',
      link: "/portfolio/growtech",

    },
    {
      name: "Hayden",
      img: '/imgs/our-work-thumbnail/hayden-01.jpg',
      link: "/portfolio/hyden3d",

    },
    {
      name: "Shadow",
      img: '/imgs/our-work-thumbnail/Shaodow-01.jpg',
      link: "/portfolio/shao",

    },
    {
      name: "Veja",
      img: '/imgs/our-work-thumbnail/vega-01.jpg',
      link: "/portfolio/veja",

    },
    {
      name: "Vegemite",
      img: '/imgs/our-work-thumbnail/vegemite.jpg',
      link: "/portfolio/vegemite",

    },
  ]

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller_ourWork");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner_ourwork");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="our-portfolio home" id="">
        <div className="container">
          <h2 className='our-work-heading'>
            <span className="heading-grey" data-aos="fade-up">
              {" "}
            </span>
            <span className="heading-gradient">Our Work</span>
          </h2>
          <div className='our-work-home-slider' style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexDirection: 'column' }}>

            <div className="scroller_ourWork" data-speed="slow">
              <ul className="our_work_list scroller__inner_ourwork">
                {OURWORK_ITEM.map((item, index) => (
                  <li key={"our_work_card_" + index} className='port-card'>
                    <Link href={item.link}>
                      <Image
                        src={item.img}
                        alt=""
                        width={500}
                        height={500}
                        sizes='100vw'
                        quality={100}
                        style={{ width: "100%", height: "auto" }}
                        priority={true}
                      />
                      <div className="port-card-overlay">
                        <h2 className="heading-gradient">{item.name}</h2>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurWork