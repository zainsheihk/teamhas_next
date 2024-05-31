'use client'
import React, { useEffect, useState } from 'react';

const Counter = ({
    headText,
    initialValue,
    targetValue,
    bottomText,
    duration
}) => {
    const [count, setCount] = useState(initialValue);
    const [startCounting, setStartCounting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {                    
                    setStartCounting(true);
                }
            });
        });

        const target = document.getElementById('statics');
        if (target) {
            observer.observe(target);
        }
        
        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    useEffect(() => {
        let startValue = initialValue;
        const interval = Math.floor(duration / (targetValue - initialValue));

        let counter;
        if (startCounting) {
            counter = setInterval(() => {
                startValue += duration < 800 ? 20 : 1;
                setCount(startValue);
                if (startValue >= targetValue) {
                    clearInterval(counter);
                }
            }, interval);
        }

        return () => {
            clearInterval(counter);
        };
    }, [startCounting]);

    return (
        <div className="statics" id="statics" data-aos-duration={duration} data-aos="fade-up">
            <p>{headText}</p>
            <h2>
                <span className="heading-gradient num" data-count={targetValue}>
                    {count}+
                </span>
            </h2>
            <p>{bottomText}</p>
        </div>
    );
}

export default Counter;
