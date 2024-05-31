"use client"
import React, { useEffect, useRef } from 'react'
import "./maskheading.css"

const MaskHeading = () => {
    const maskTitleOuterRef = useRef(null);

    useEffect(() => {
        const maskTitleOuter = maskTitleOuterRef.current;
        const textMask = maskTitleOuter.querySelector('.mask-title');

        // if (!textMask) return;

        // Clone text element and setup the mask container
        const cloneText = textMask.cloneNode(true);
        cloneText.classList.add('clone-title');
        const cloneOuter = document.createElement('div');
        cloneOuter.classList.add('clone-outer');
        cloneOuter.appendChild(cloneText);
        maskTitleOuter.appendChild(cloneOuter);

        // Event handlers
        const handleMouseMove = (e) => {
            const rect = maskTitleOuter.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            // cloneText.style.transform = `translate(${-x}px, ${-y}px)`;
            // cloneOuter.style.transform = `translate(${x}px, ${y}px)`;
            cloneText.style.left = `-${x}px`;
            cloneText.style.top = `-${y}px`;
            cloneOuter.style.left = `${x}px`;
            cloneOuter.style.top = `${y}px`;
        };

        const handleMouseEnter = () => {
            cloneOuter.style.display = 'block';
        };

        const handleMouseLeave = () => {
            cloneOuter.style.display = 'none';
        };

        // Attach event listeners
        maskTitleOuter.addEventListener('mousemove', handleMouseMove);
        maskTitleOuter.addEventListener('mouseenter', handleMouseEnter);
        maskTitleOuter.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup function
        return () => {
            maskTitleOuter.removeEventListener('mousemove', handleMouseMove);
            maskTitleOuter.removeEventListener('mouseenter', handleMouseEnter);
            maskTitleOuter.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="mask-title-outer" ref={maskTitleOuterRef}>
            <h1 className="main-heading mask-title example2" data-aos="fade-up">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <span className="heading-underline heading-gradient-2 head-thousnad">Thousands</span>
                    <span className="heading-outline">Troubles</span>
                </div>
                <span className="heading-gradient-2 head-one">One</span>
                <span className="heading-underline heading-outline">Solution
                    <img className="heading-ellipse" src="/imgs/heading-ellipse.png" alt="heading-ellipse" />
                </span>
            </h1>
        </div>
    )
}

export default MaskHeading;
