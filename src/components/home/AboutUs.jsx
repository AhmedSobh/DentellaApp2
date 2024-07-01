import React, { useEffect } from "react";
import Patient from "../../assets/patient.png";
import { FiArrowDownRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='flex flex-col lg:flex-row items-start justify-center  gap-12 my-12'>
            <img data-aos="fade-right" src={Patient} alt="patient_image" className=' w-full lg:w-[500px] h-full lg:h-[500px] xl:h-[700px]' />
            <div className="flex flex-col justify-between gap-5 ">
                <Title />
                <p className='text-[#1E1E1E] opacity-80 '>We are dedicated to providing exceptional dental <br className='hidden lg:block' /> care in a warm and welcoming environment. Our team of experienced,<br className='hidden lg:block' /> compassionate, and highly skilled professionals is here <br className='hidden lg:block' /> to ensure your dental experience is comfortable and stress-free.</p>

                <div className="my-6 ">
                    <h3 className='text-[#1E1E1E] font-bold text-lg md:text-xl lg:text-2xl'>Our Mission</h3>
                    <p className='text-[#1E1E1E] opacity-80'>At dentella, our mission is to promote optimal oral health and <br className='hidden lg:block' /> create lasting, confident smiles. </p>
                </div>
                <button className='flex items-center gap-x-2 bg-mainColor text-white font-semibold p-2 rounded-lg w-fit text-center'>
                    Learn More
                    <FiArrowDownRight size={24} />
                </button>
            </div>
        </div>
    )
}
const Title = () => {
    return (
        <div className='flex flex-col   font-bold'>
            <h2 className='text-mainColor py-1 text-xl md:text-2xl lg:text-3xl '>About Us</h2>
            <h4 className='text-[#1E1E1E] text-lg md:text-xl lg:text-2xl'>Patient-Centered Care</h4>
        </div>
    )
}
export default AboutUs