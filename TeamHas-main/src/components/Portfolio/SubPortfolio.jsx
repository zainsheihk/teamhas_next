"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Loader from '../Common/Loader'


const SubPortfolio = ({ slug }) => {

    const [islaoding, setIsLoading] = useState(true)

    const PORTFOLIO = {
        "claro": {
            imgPath: "/imgs/portfolio/claro-case-study-final.png"
        },
        "delice": {
            imgPath: "/imgs/portfolio/delicefinal.png"
        },
        "eli5": {
            imgPath: "/imgs/portfolio/eli5-final.png"
        },
        "frankgreen": {
            imgPath: "/imgs/portfolio/frank-green-final.png"
        },
        "mahalaxmi": {
            imgPath: "/imgs/portfolio/maha-laxmi.png"
        },
        "fummo": {
            imgPath: "/imgs/portfolio/fummu-final.png"
        },
        "goldenduckco": {
            imgPath: "/imgs/portfolio/golden-duckco.png"
        },
        "growtech": {
            imgPath: "/imgs/portfolio/grow-tech-final.png"
        },
        "ohayoai": {
            imgPath: "/imgs/portfolio/ohayo-ai-final.png"
        },
        "hyden3d": {
            imgPath: "/imgs/portfolio/hyden-3d-fina.png"
        },
        "shao": {
            imgPath: "/imgs/portfolio/shao.png"
        },
        "veja": {
            imgPath: "/imgs/portfolio/veja-final.png"
        },
        "vegemite": {
            imgPath: "/imgs/portfolio/vegmite-final.png"
        },
    }


    return (
        <>
            <div>
                {islaoding && <Loader />}
                
                <Image
                    src={PORTFOLIO[slug].imgPath}
                    className='portfolio-cls-main'
                    alt="My Protfolio"
                    width={2000}
                    height={2500}
                    quality={100}
                    priority={true}
                    onLoad={() => setIsLoading(false)}
                />
            </div>
        </>
    )
}

export default SubPortfolio