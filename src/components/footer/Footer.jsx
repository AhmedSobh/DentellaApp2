import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../../Style.css';

const Footer = () => {
    return (

        <div
            className="py-8 px-8 md:px-16 bg-[#004155] text-white  text-surface/75  lg:text-left footer">

            <h6 className='font-bold text-2xl'>Dentella</h6>

            <div className=" py-10 text-center md:text-left" >
                <div className="  grid gap-8 grid-cols-2 lg:grid-cols-4">

                    <div className="footer-column">
                        <h6
                            className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                            ProducCompanyts
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>Home</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>Services</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>About Us</a>
                        </p>
                        <p>
                            <a href="#!" className='text-lg'>Why Choose Us</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>Testimonials</a>
                        </p>
                        <p>
                            <a href="#!" className='text-lg'>Contact Us</a>
                        </p>
                    </div>

                    <div className="footer-column">
                        <h6
                            className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                            Address
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>123 Dental Avenue City ville,
                                <br /> Mansoura, EGYPT</a>
                        </p>
                        <h6
                            className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                            Inquiries
                        </h6>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>(123) 456-7890</a>
                        </p>
                        <p className="mb-4">
                            <a href="#!" className='text-lg'>nazmy871@gmail.com</a>
                        </p>

                    </div>

                    <div className="footer-column">
                        <h6
                            className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                            Newsletter
                        </h6>
                        <p>Stay Updated with our Latest News</p>


                        <div className='relative w-fit my-5'>
                            <input type="text" className='p-4 rounded-full border font-bold text-lg' placeholder='Your Email' />
                            <button className='absolute right-4 top-[25%] bg-[#004155] px-4 py-2 rounded-2xl'>
                                <FaArrowRightLong />
                            </button>
                        </div>
                        <div className="">
                            <h6
                                className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                                Follow Us
                            </h6>
                            <div className='flex items-center gap-2'>
                                <FaFacebook className='text-xl text-white' />
                                <FaTwitter className='text-xl text-white' />
                                <FaYoutube className='text-xl text-white' />
                                <FaInstagram className='text-xl text-white' />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Footer