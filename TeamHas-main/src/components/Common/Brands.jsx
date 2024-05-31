"use client";
import React, { useEffect } from "react";
import "../styles/brands.css";

const Brands = () => {
  const Brands1 = [
    "/imgs/brand1.png",
    "/imgs/brand4.png",
    "/imgs/brand11.png",
    "/imgs/brand21.png",
    "/imgs/brand22.png",
    "/imgs/brand10.png",
  ];

  const Brands2 = [
    "/imgs/brand23.png",
    "/imgs/brand24.png",
    "/imgs/brand25.png",
    "/imgs/brand26.png",
    "/imgs/brand27.png",
    "/imgs/brand28.png",
    "/imgs/brand29.png",
  ];

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
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
  },[]);

  return (
    <div className="brands service-brands">
      <div className="super-container ">
        
        <div style={{ display: "flex", justifyContent: "center",alignItems:'center',flexDirection:'column' }}>
          <div className="scroller" data-speed="slow">
            <ul className="tag-list scroller__inner">
            {Brands1.map((item, ind) => (
              <li key={"img2_loop" + ind}>
                <img src={item} alt="" />
              </li>
            ))}
            </ul>
          </div>

          <div className="scroller" data-speed="slow" data-direction="right">
            <ul className="tag-list scroller__inner">
            {Brands2.map((item, ind) => (
              <li key={"img2_loop" + ind}>
                <img src={item} alt="" />
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
