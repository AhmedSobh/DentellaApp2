import React from 'react'
import Footer from '../components/footer/Footer'
import Logo from "../assets/logo.svg"
const BookNow = () => {
    return (
        <div className='mt-4'>
            <div className='w-[90%] lg:w-[85%] mx-auto mb-12'>
                <img src={Logo} alt='logo' />
            </div>
            <div className='my-8 '>
                <Title />

                <BookNowFrom />
            </div>
            <Footer />
        </div>
    )
}


const Title = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h2 className='font-extrabold text-[#1E1E1E] text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Book Now</h2>
            <p className='text-[#1E1E1E] opacity-[54%] text-center lg:text-xl font-semibold'>Aenean sit amet magna vel magna fringilla fermentum. <br className='hidden md:block' /> Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.</p>
        </div>
    )   
}

const BookNowFrom = () => {
    return (
        <form className='flex items-center justify-center flex-col gap-7 w-[80%] lg:w-[60%] mx-auto my-8 '>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 w-full'>
                <Input placeholder={"Name"} />
                <Input placeholder={"Your Email"} />
                <Input placeholder={"Phone Number"} />
                <Input placeholder={"service"} />
                <textarea className='border-b-2 border-b-[#03ACF2] outline-none text-xl placeholder:text-[#03ACF2] col-span-2 row-span-2' placeholder='Note'></textarea>
            </div >
            <button className='text-white bg-mainColor text-lg font-semibold w-32 text-center rounded-md p-2 '>Confirm</button>

        </form >
    )
}


const Input = ({ placeholder, onChange }) => {
    return (
        <input placeholder={placeholder} className='border-b-2 border-b-[#03ACF2] outline-none text-xl placeholder:text-[#03ACF2]' />
    )
}
export default BookNow