"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { videoUrl } from "../../constant/Constant"

const VideoBox = ({ classses = "right" }) => {
    const videoPlayerRef = useRef()
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        console.log(videoUrl,"vv")
        if (videoPlayerRef.current) {
            videoPlayerRef.current.play()
        }
    }, [])

    const handleClick = () => {
        setIsMuted(true)
        if (videoPlayerRef.current) {
            videoPlayerRef.current.muted = isMuted // Set muted property accordingly
            videoPlayerRef.current.currentTime = 0; // Reset video position to start
            videoPlayerRef.current.play(); // Play the video again
        }
    }

    return (
        <>
            <div className={classses} data-aos-duration="1000" data-aos="fade-up">
                {!isMuted && <Image onClick={() => handleClick()} width={100} height={100} src="/imgs/Play button-01-01.png" className="video-play" />}

                {/* <!-- <Image width={100} height={100} src="/imgs/fwGDo73VwcZEgbUfdHCGbcWezo.png.png" alt="" /> --> */}

                <video
                    ref={videoPlayerRef}
                    loop
                    autoplay
                    controls 
                    playsinline                    
                    className="video"
                    controlslist="nodownload"
                    muted={!isMuted} // Set muted based on state
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            </div>
        </>

    )
}

export default VideoBox