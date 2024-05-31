"use client"
import { useState, useEffect, Suspense } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const LoaderProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 500)

        // if (Router.events) {
        //     Router.events.on('routeChangeStart', startLoading);
        //     Router.events.on('routeChangeComplete', stopLoading);
        //     Router.events.on('routeChangeError', stopLoading);

        //     return () => {
        //         Router.events.off('routeChangeStart', startLoading);
        //         Router.events.off('routeChangeComplete', stopLoading);
        //         Router.events.off('routeChangeError', stopLoading);
        //     };
        // }
    }, []);



    return (
        <>
            {loading &&
                <div className="loader">
                    <Image src={"/imgs/loader-2.gif"} width={300} height={300} alt="loader" />
                </div>
            }
        
            {children}
        </>
    );
};

export default LoaderProvider;
