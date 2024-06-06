import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="loader-wrap">
                <div className='loader-box'>
                    <img src={"/imgs/loader-2.gif"} width={200} height={200}  alt="loader"/>
                </div>
            </div>
        </>
    )
}

export default Loader