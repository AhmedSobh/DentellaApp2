import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react'
import Doc1 from "../../assets/ahmedSobn.png";
import Doc2 from "../../assets/aishaAhmed.png";
import Doc3 from "../../assets/AhmedAli.png";
import Doc4 from "../../assets/OmarAhmed.png";
import Doc5 from "../../assets/YaraAhmed.png";
import Doc6 from "../../assets/MohamedNaxmy.png";
import Doc7 from "../../assets/AshiaAhmed2.png";
import Doc8 from "../../assets/EmanEbrahim.png";
import { Link } from 'react-router-dom';

const OurTeam = () => {
    return (
        <div className='my-12 flex flex-col items-center justify-center gap-8'>
            <Title />
            <CardsContainer />
            <Link to="/doctors" className='text-xl lg:text-2xl font-bold flex items-center gap-x-2'>See All <FaArrowRightLong/>  </Link>
        </div>
    )
}

const Title = () => {
    return (
        <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center'>
            <span className='text-[#1E1E1E]'>Our</span>
            <span className='text-mainColor'>Team</span>

        </h2>
    )
}

const docs = [
    { id: 1, image: Doc1, name: "Ahmed Sobhi", role: "cleaning Specialist" },
    { id: 2, image: Doc2, name: "Aisha Ahmed ", role: "Dentist" },
    { id: 3, image: Doc3, name: "Ahmed Ali", role: "cleaning Specialist" },
    { id: 4, image: Doc4, name: "Omar Ahmed ", role: "cleaning Specialist" },
    { id: 5, image: Doc5, name: "Yara Ahmed ", role: "cleaning Specialist" },
    { id: 6, image: Doc6, name: "Mohamed Nazmy", role: "cleaning Specialist" },
    { id: 7, image: Doc7, name: "Aisha Ahmed", role: "cleaning Specialist" },
    { id: 8, image: Doc8, name: "Eman Ebrahim", role: "cleaning Specialist" },

]
const CardsContainer = () => {
    return (
        <div className='mt-8 flex items-center justify-center gap-8 flex-wrap'>
            {docs.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}

const Card = (card) => {
    return (
        <div className='flex flex-col items-center justify-center p-3 gap-3 w-[290px] h-[300px]'>
            <img src={card.card.image} alt={card.card.name} className='w-[200px] h-[200px] rounded-full' />
            <h3 className='text-[#1E1E1E] font-extrabold text-xl'>{card.card.name}</h3>

            <span className='text-mainColor text-base '>{card.card.role}</span>
        </div>
    )
}
export default OurTeam