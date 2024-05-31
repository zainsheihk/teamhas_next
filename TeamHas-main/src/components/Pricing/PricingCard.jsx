import { ICONS } from "@/utils/geticon";
import Image from "next/image";
import React from "react";

export const PricingCard = () => {
  return (
    <>


      <div className="pricing-wrapper">
        <div
          className="pricing-card"
          data-aos-duration="200"
          data-aos="fade-up"
        >
          {/* <!-- <Image width={100} height={100} src="/imgs/plant.png" alt="" /> --> */}
          <div className="pricing-card-header">
            <div className="pricing-card-title">
              <Image
                width={35}
                height={35}
                quality={100}
                src="/imgs/starter-logo.png"
                alt=""
              />
              <span>
                <h6>Design Essentials</h6>
              </span>
            </div>
            <p>
              <span>Made for your</span>
              <span className="heading-gradient">
                {" "}
                day-to-day design needs
              </span>
            </p>
          </div>

          <p>Starting at $3000 per month</p>
          <p>
            Great for a variety of teams who need design support but not
            deep channel expertise
          </p>

          <ul className="card-list">
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Ad Creatives</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Promotional Post</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Illustration Design</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Brand Identity</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>UI/UX Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p> Presentation Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p> Email Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>Motion Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>3D Models & Mockups</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>Packaging & Merch Design</p>
            </li>
          </ul>

          <a href="../bookacall" className="btn btn-primary myBtn">
            <span>Book a call</span>
          </a>
        </div>

        <div
          className="pricing-card"
          data-aos-duration="200"
          data-aos="fade-up"
        >
          <h3>Most Popular</h3>

          <div className="pricing-card-body">
            {/* <!-- <Image width={100} height={100} src="/imgs/rocket.png" alt="" /> --> */}
            <div className="pricing-card-header">
              <div className="pricing-card-title growth">
                <Image
                  width={35}
                  height={35}
                  src="/imgs/growth-logo.png"
                  alt=""
                  quality={100}
                  sizes="100vw"
                />
                <span>
                  <h6>Complete Creative Package</h6>
                  <small>
                    <p>(Best value for money)</p>
                  </small>
                </span>
              </div>
              <p>
                <span>Full-service plan for</span>{" "}
                <span className="heading-gradient">
                  every creative need
                </span>
              </p>
            </div>

            <p>Starting at $6000 per month</p>
            <p>
              Great for creative teams who enable several marketing and
              brand functions
            </p>

            <ul className="card-list">
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Ad Creatives</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Promotional Post</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Illustration Design</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Brand Identity</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>UI/UX Design</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p> Presentation Design</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p> Email Design</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Motion Design</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>3D Models & Mockups</p>
              </li>
              <li>
                <span className="circle-check">{ICONS.check}</span>
                <p>Packaging & Merch Design</p>
              </li>
            </ul>

            <a href="../bookacall" className="btn btn-primary myBtn">
              <span>Book a call</span>
            </a>
          </div>
        </div>

        <div
          className="pricing-card"
          data-aos-duration="200"
          data-aos="fade-up"
        >
          <div className="pricing-card-header">
            <div className="pricing-card-title growth">
              <Image
                width={35}
                height={35}
                src="/imgs/enterprise-logo.png"
                alt=""
                quality={100}
              />
              <span>
                <h6>Mainstream Needs</h6>
              </span>
            </div>
            <p>
              <span>Powering your</span>
              <span className="heading-gradient">{" "}
                media buying strategy
              </span>
            </p>
          </div>

          <p>Starting at $2500 per month</p>
          <p>
            Ad creative, at scale, for performance marketing, growth and
            social media teams
          </p>

          <ul className="card-list">
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Ad Creatives</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Promotional Post</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p> Motion Design</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>3D Models & Mockups</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p>Email Design</p>
            </li>
            <li>
              <span className="circle-check">{ICONS.check}</span>
              <p> Presentation Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>UI/UX Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>Brand Identity</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>Illustration Design</p>
            </li>
            <li>
              <span className=" cross-mark"> x</span>
              <p>Packaging & Merch Design</p>
            </li>
          </ul>

          <a href="../bookacall" className="btn btn-primary myBtn">
            <span>Book a call</span>
          </a>
        </div>
      </div>


    </>
  );
};
