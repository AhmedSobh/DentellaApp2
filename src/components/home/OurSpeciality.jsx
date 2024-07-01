import React from 'react';
import Crowns from "../../assets/crowns.png";
import Cleaning from "../../assets/cleaning.png";
import Implants from "../../assets/implants.png";
import Extractions from "../../assets/extractions.png";
import Orthodontic from "../../assets/orthodontic.png";
import Filling from "../../assets/filling.png"
import { FaArrowRight } from "react-icons/fa6";

const OurSpeciality = () => {
    return (
        <div>
            <Title />
        </div>
    )
}
const Title = () => {
    return (
        <div className='flex flex-col items-center justify-center  font-bold'>
            <h2 className='text-mainColor py-1 text-3xl lg:text-4xl '>Our Speciality</h2>
            <h4 className='text-[#1E1E1E] text-2xl lg:text-3xl'>The best quality service you can get  </h4>

            <CardsContainer />
        </div>
    )
}


const cardsData = [
    { id: 5, image: Cleaning, title: "Cleaning", },
    { id: 6, image: Filling, title: "Filling", route: "learn more" },
    { id: 1, image: Crowns, title: "Crowns" },
    { id: 2, image: Implants, title: "Implants" },
    { id: 3, image: Extractions, title: "Extractions" },
    { id: 4, image: Orthodontic, title: "Orthodontic" },

]

const CardsContainer = () => {
    return (
        <div className='flex justify-center items-center gap-16 flex-wrap my-8'>
            {cardsData.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}

const Card = (card) => {
    return (
        <div className={`w-[250px] h-[300px] rounded-2xl p-4 ${card.card.route ? "bg-mainColor text-white" : "bg-white "} flex flex-col items-center justify-center gap-7`}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
            <img src={card.card.image} alt={card.card.title} />
            <p>{card.card.title}</p>
            {card.card.route &&
                <span className='flex items-center gap-x-3'>{card.card.route} <FaArrowRight size={20} /></span>
            }
        </div>
    )
}


export default OurSpeciality