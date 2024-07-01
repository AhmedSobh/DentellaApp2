import React from 'react'
import { GoArrowDownRight } from "react-icons/go";

import ConsultationImage from "../../assets/Consultation.png"
const Consultation = () => {
    return (
        <div className='overflow-hidden rounded-xl flex flex-col lg:flex-row lg:items-center lg:h-[500px] my-14'
            style={{borderRadius:"50px" , boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}
        >
            <img src={ConsultationImage} alt="ConsultationImage"/>
            <form className='p-8 flex flex-col  gap-10 flex-1'>
                <h3 className='font-extrabold text-3xl text-center'>Consultation</h3>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" className='p-4 rounded-xl border font-bold text-lg ' placeholder='full Name*' />
                    <input type="text" className='p-4 rounded-xl border font-bold text-lg' placeholder='I’m interested in*' />
                    <input type="text" className='p-4 rounded-xl border font-bold text-lg' placeholder='Email*' />
                    <input type="text" className='p-4 rounded-xl border font-bold text-lg' placeholder='Phone Number*' />
                </div>
                <button className='bg-mainColor text-white flex items-center justify-center gap-x-6 rounded-xl p-4 rounded-lg font-bold'>
                    Get a Free Consultation
                    <GoArrowDownRight size={24} />
                </button>
            </form>
        </div>
    )
}

export default Consultation