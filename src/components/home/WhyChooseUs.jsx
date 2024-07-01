import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import WhyChooseUsImage from "../../assets/whychooseus.png"

const WhyChooseUs = () => {
    return (
        <div className='my-12'>
            <Title />
            <div className='flex flex-col lg:flex-row justify-between  '>
                <ListContainer />
                <img src={WhyChooseUsImage} alt='whyChooseUs_image' />
            </div>
        </div>
    )
}

const Title = () => {
    return (
        <div className=''>
            <h6 className='text-mainColor font-semibold h-fit'>why choose us </h6>
            <h3 className='text-[#1E1E1E] font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl '>Comprehensive
                <br />Dental Services</h3>
        </div>
    )
}

const listData = [
    { id: 1, title: "Experienced Professionals:", desc: "Our team consists of highly skilled and knowledgeable dental experts." },
    { id: 2, title: "State-of-the-Art Technology:", desc: "We invest in the latest dental technology to provide the best care." },
    { id: 3, title: "Compassionate Care:", desc: " We treat every patient with empathy and understanding." },
    { id: 4, title: "Patient Education: ", desc: "We believe in educating our patients about their oral health to make informed decisions." },
    { id: 5, title: "Convenient Hours:", desc: " We offer flexible scheduling to accommodate your busy life." }

]
const ListContainer = () => {
    return (
        <ul className='mt-6'>
            {listData.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </ul>
    )
}

const Item = ({ item }) => {
    return (
        <li className='flex my-3  gap-2 '>
            <FaCheckCircle size={22} className='text-[#36CD1C]' />
            {/* <div className='flex items-center'> */}

            <h5 className='font-extrabold text-xl text-nowrap'> {item.title}
                <p className='font-normal text-wrap text-lg '> {item.desc} </p>
            </h5>
            {/* </div> */}
        </li>
    )
}
export default WhyChooseUs