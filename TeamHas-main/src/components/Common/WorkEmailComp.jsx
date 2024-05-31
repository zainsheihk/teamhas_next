"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const WorkEmailComp = ({ placeholder, btnText, redirect, classess="" }) => {
    const [value, setValue] = useState("");
    const router = useRouter()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value === "") return null;
        else {
            router.push(`${redirect}?email=${value}`)
        }
    }
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className={`input-container gstd ${classess}`}>
                <div>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="your email here"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="btn btn-primary gstd-btn" type="submit">
                        <span>{btnText}</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default WorkEmailComp