import React, { useEffect } from 'react'
import HeroImage from "../../assets/hero.png"
import Video from "../../assets/video.svg"
import TeethImage from "../../assets/tooth.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between'>

            <div className="flex flex-col mt-8 md:mt-0">
                <h1 className='text-mainColor font-extrabold text-2xl lg:text-4xl xl:text-5xl lg:leading-[3rem]'>GET READY FOR YOUR <br className='hidden lg:block' /> BEST EVER DENTAL<br className='hidden md:block' />  EXPERIENCE</h1>
                <p className='text-[#1E1E1E] opacity-60  '>We use only the best quality materials on the <br className='hidden lg:block' /> market in order to provide the best products to our patients,<br /> So don't worry about anything and book yourself,</p>

                <HeroBtns />

                <div className='flex items-center gap-2'>
                    <img src={TeethImage} alt="teeth_image" />
                    <p className='font-bold lg:text-xl '>We are able to restore your <span className='text-mainColor'>dental health issue</span></p>
                </div>

            </div>
            <img data-aos="fade-left" src={HeroImage} alt="hero_image" />

        </div>
    )
}

const HeroBtns = () => {
    return (
        <div className="flex items-center justify-between flex-wrap gap-3 my-8">
           <Link to={"/doctors"}><button className='text-white bg-mainColor text-lg font-semibold w-44 rounded-md p-2 '>Book Now</button></Link>
            <div className='flex items-center gap-2 '>
                <img src={Video} alt="video_image" />
                <p className='text-[#1E1E1E] font-bold lg:text-xl'>see how we work</p>
            </div>
        </div>
    )
}

export default Hero