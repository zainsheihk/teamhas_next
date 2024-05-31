"use client"
import React, { useEffect, useState } from 'react'
import Loader from '../Common/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const AnimationProvider = ({ children }) => {
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setIsloading(false)
        }, 500)


    }, []);

    return (
        <>
            <ToastContainer limit={2} />
            {isLoading && <Loader />}
            {children}
        </>
    )
}
