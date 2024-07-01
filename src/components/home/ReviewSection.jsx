import React from 'react';
import Map from "../../assets/map.png";
import MapMan from "../../assets/mapMan.png"
const ReviewSection = () => {
    return (
        <div
            className='  flex  items-center justify-center h-[750px] my-12 z-0 relative rounded-xl '
            style={{ backgroundImage: `url(${Map})`, backgroundSize: 'cover' }}
        >
            <OverLayLayer />
            <div className='z-20 flex flex-col items-center justify-between'>
                <Title />
                <Content />
            </div>
        </div>
    );
};

const OverLayLayer = () => {
    return (
        <div className='z-10 absolute bg-[#DFF7EA] opacity-40 top-0 right-0 bottom-0 left-0 rounded-xl'></div>
    )
}
const Title = () => {
    return (
        <div className='flex flex-col items-center justify-center text-[#1E1E1E] font-bold mb-12'>
            <h4 className=' text-lg md:text-xl lg:text-2xl'>TestimonialsSay</h4>
            <h2 className='py-1 text-xl md:text-2xl lg:text-3xl font-extrabold '>What People Say About Us</h2>
        </div>
    )
}

const Content = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-y-6'>
            <img src={MapMan} alt="Map_Man" className='rounded-full w-32 h-32 object-cover' />
            <p className='py-1 text-xl lg:text-2xl font-extrabold w-[90%] lg:w-[70%] xl:w-[50%] leading-10'>
                "In an emergency situation, I was amazed by how quickly they accommodated me. The dentist's skill and compassion were evident. I'm grateful for their prompt care."
            </p>
            <div className='flex flex-col justify-center items-center'>
                <h5 className='text-2xl font-extrabold'>Ahmed El Hossiny</h5>
                <span className=''>Mansoura, Egypt</span>
            </div>
        </div>
    )
}
export default ReviewSection;
