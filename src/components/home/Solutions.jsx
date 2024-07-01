import React, { useEffect } from "react";
import Image1 from "../../assets/card1.png";
import Image2 from "../../assets/card2.png";
import Image3 from "../../assets/card3.png";
import Image4 from "../../assets/card4.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Solutions = () => {
    return (
        <div>
            <Title />
            <CardsContainer />
        </div>
    )
}

const Title = () => {
    return (
        <div className='flex flex-col items-center justify-center  font-bold'>
            <h2 className='text-mainColor py-1 text-3xl lg:text-4xl '>satisfy solution</h2>
            <h4 className='text-[#1E1E1E] text-2xl lg:text-3xl'>The best dental treatment</h4>

        </div>
    )
}


const cardsData = [
    {
        id: 1,
        image: Image1,
        title: "Teeth Fillings",
        desc: "Restorative procedures to repair cavities and damaged teeth",
        bg: "#C6C6C6"
    },
    {
        id: 2,
        image: Image2,
        title: "Dental Implant",
        desc: "Surgical placement of artificial tooth roots",
        bg: "#FF9A6F"
    },
    {
        id: 3,
        image: Image3,
        title: "Teeth Whitening",
        desc: "Cosmetic treatment to enhance the whiteness of teeth",
        bg: "#FFE389"
    },
    {
        id: 4,
        image: Image4,
        title: "Crown and Bridges",
        desc: "Restoration options for damaged or missing teeth",
        bg: "#DDE8E2"
    },
    {
        id: 5,
        image: Image1,
        title: "Oral Surgery",
        desc: "Surgical procedures, including extractions and dental implants",
        bg: "#FEE6DC"
    }
];

// Define Card component
const Card = ({ card, index }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    const animationDelayFactor = 200;
    return (
        <div data-aos="fade-up"
            data-aos-delay={index * animationDelayFactor} className="pt-6 flex gap-4 md:w-[400px] h-[350px] rounded-xl overflow-hidden" style={{ backgroundColor: card.bg }}>
            <div className='pl-6 pb-3 flex flex-col  items-start gap-4 flex-auto'>
                <h3 className='text-3xl'>{card.title}</h3>
                <p className='text-[#1E1E1E]'>{card.desc}</p>
                <button className='bg-white rounded-2xl p-2'>Read More</button>
            </div>
            <img src={card.image} alt={card.title} className='rounded-br-xl' />
        </div>
    );
};

// Define CardsContainer component
const CardsContainer = () => {
    return (
        <div className='flex items-center justify-center flex-wrap gap-6 my-8'>
            {cardsData.map((card, i) => (
                <Card key={card.id} card={card} index={i} />
            ))}
        </div>
    );
};

export default Solutions