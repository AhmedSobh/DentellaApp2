import React, { useEffect } from "react";
import Customer from "./../../assets/customer.svg";
import Chair from "../../assets/chair.svg";
import Star from "../../assets/star.svg";
import HeadPhone from "../../assets/headphone.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const featureData = [
    {
        id: 1,
        image: Customer,
        heading: "Free Consultation",
        description: "We offer flexible appointment scheduling and free to accommodate your busy life"
    },
    {
        id: 2,
        image: HeadPhone,
        heading: "Expert Dentist",
        description: "Our team of experienced dentists and dental professionals boasts years of expertise in various areas of dentistry"
    },
    {
        id: 3,
        image: Star,
        heading: "High User Rating",
        description: "We offer the latest techniques and materials for restoring damaged teeth, ensuring your dental health is fully optimized"
    },
    {
        id: 4,
        image: Chair,
        heading: "Best Equipment",
        description: "Our compassionate team is dedicated to making your dental experience as comfortable and stress-free as possible"
    }
]
const Features = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const animationDelayFactor = 200;
    return (
        <div className='flex items-center justify-center gap-8 flex-wrap mb-12'>
            {featureData.map((feature, i) => (
                <div data-aos="fade-up"
                    data-aos-delay={i * animationDelayFactor} key={feature.id} className="flex flex-col items-start gap-3 w-[300px] shadow-xl rounded-xl p-5  h-[400px]" style={{
                        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                    }}>
                    <img src={feature.image} alt="feature_image" />
                    <h3 className='text-lg font-bold text-[#1E1E1E]'>{feature.heading}</h3>
                    <p className='text-[#1E1E1E] opacity-60 text-lg'>{feature.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Features