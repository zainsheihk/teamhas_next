"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const WorkPreview = () => {
  const [displayImageNo, setDisplayImageNo] = useState(5)

  const WORKS = [
    {
      title: "Claro",
      imgPath: "/imgs/our-work-thumbnail/claro-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/clarocasestudy",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Delice",
      imgPath: "/imgs/our-work-thumbnail/delice-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/delice",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "I Am Five",
      imgPath: "/imgs/our-work-thumbnail/explain_like_i_am_five-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/eli5",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Frank Green",
      imgPath: "/imgs/our-work-thumbnail/frankgreen-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/frankgreen",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Maha Laxmi",
      imgPath: "/imgs/our-work-thumbnail/maha-laxhmi-02.jpg",
      imgWidth: "700",
      imgHeight: "350",
      link: "/portfolio/mahalaxmi",
      className: "port-card col-8 load-more-port"
    },
    {
      title: "Fummo",
      imgPath: "/imgs/our-work-thumbnail/fummo-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/fummo",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Golden Duck",
      imgPath: "/imgs/our-work-thumbnail/goldenduck-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/goldenduckco",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Grow Tech",
      imgPath: "/imgs/our-work-thumbnail/growtech-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/growtech",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Ohayoai",
      imgPath: "/imgs/our-work-thumbnail/ohayo-AI-02.jpg",
      imgWidth: "700",
      imgHeight: "350",
      link: "/portfolio/ohayoai",
      className: "port-card col-8 load-more-port"
    },
    {
      title: "Hayden",
      imgPath: "/imgs/our-work-thumbnail/hayden-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/hyden3d",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Shaodow",
      imgPath: "/imgs/our-work-thumbnail/Shaodow-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/shao",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Veja",
      imgPath: "/imgs/our-work-thumbnail/vega-01.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/veja",
      className: "port-card col-4 load-more-port"

    },
    {
      title: "Vegemite",
      imgPath: "/imgs/our-work-thumbnail/vegemite.jpg",
      imgWidth: "350",
      imgHeight: "350",
      link: "/portfolio/vegemite",
      className: "port-card col-4 load-more-port"

    },
  ]

  const handleLoadMore = () => {
    if (displayImageNo == 5) {
      setDisplayImageNo(10)
    } else if (displayImageNo == 10) {
      setDisplayImageNo(13)
    }else{
      setDisplayImageNo(5)
    }
  }

  return (
    <>
      <div className="card-wrapper portfolio-card row pb-200">


        {WORKS.slice(0, displayImageNo).map((item, ind) => (
          <div className={item.className} key={`works_show_${ind}`} data-aos="fade-up" style={{ width: item.imgWidth+"px", height: item.imgHeight+"px" }}>
            <Link href={item.link}>
              <Image src={item.imgPath} width={800} height={800}  priority={true} fetchPriority='high' alt='Work Images' style={{width:'100%',height:'100%'}}/>
              <div className="port-card-overlay">
                <h2>{item.title}</h2>
              </div>
            </Link>
          </div>
        ))}



        {displayImageNo !== 13 && <button onClick={() => handleLoadMore()} className="btn btn-primary btn-center"><span>Load More</span></button>}
        {displayImageNo === 13 && <button onClick={() => handleLoadMore()} className="btn btn-primary btn-center"><span>Show less</span></button>}
      </div>

    </>
  )
}

export default WorkPreview