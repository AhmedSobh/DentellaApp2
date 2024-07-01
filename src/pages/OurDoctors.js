import React, { useEffect, useState } from 'react';
import Doc1 from "../assets/ahmedSobn.png";
import Doc2 from "../assets/aishaAhmed.png";
import Doc3 from "../assets/AhmedAli.png";
import Doc4 from "../assets/OmarAhmed.png";
import Doc5 from "../assets/YaraAhmed.png";
import Doc6 from "../assets/MohamedNaxmy.png";
import Doc7 from "../assets/AshiaAhmed2.png";
import Doc8 from "../assets/EmanEbrahim.png";
import { Link } from 'react-router-dom';
import { request } from "../components/utils/axios"




const OurDoctors = () => {
    const [doctorsData, setDoctorsData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchOurDoctor();
                setDoctorsData(response);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, []);

    const fetchOurDoctor = async () => {
        try {
            const response = await request({
                url: "/Card/GetAllCards"
            });
            if (response.status === 200) {
                return response?.data?.data || [];
            }
            return [];
        } catch (error) {
            console.error("Error fetching doctor data:", error);
            return [];
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    console.log(doctorsData);
    return (

        <div className='flex flex-col justify-center items-center my-14'>
            <Title />
            <CardsContainer data={doctorsData} />
        </div>

    )
}
const Title = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center'>
                <span className='text-[#1E1E1E]'>Our</span>
                <span className='text-mainColor'>Team</span>
            </h2>
            <h3 className='text-[#1E1E1E] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-center'>We have a group of highly experienced doctors</h3>
        </div>
    )
}

const docsData = [
    { id: 1, image: Doc1, name: "Ahmed Sobhi", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 2, image: Doc2, name: "Aisha Ahmed ", location: "Mansoura , Cairo", role: "Dentist" },
    { id: 3, image: Doc3, name: "Ahmed Ali", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 4, image: Doc4, name: "Omar Ahmed ", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 5, image: Doc5, name: "Yara Ahmed ", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 6, image: Doc6, name: "Mohamed Nazmy", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 7, image: Doc7, name: "Aisha Ahmed", location: "Mansoura , Cairo", role: "cleaning Specialist" },
    { id: 8, image: Doc8, name: "Eman Ebrahim", location: "Mansoura , Cairo", role: "cleaning Specialist" },
]


const CardsContainer = ({ data }) => {
    console.log(data)

    return (
        <div className='w-[90%] lg:w-[80%] mx-auto mt-8 flex items-center justify-center gap-8 flex-wrap'>
            {data?.map(card => (
                <Card key={card.cardId} card={card} />
            ))}
        </div>
    )
}

const Card = ({ card }) => {
    const { doctorPhoto, doctorName, currentUniversity, phoneNumber } = card;

    return (
        <div className='flex flex-col items-center justify-center py-4 gap-y-1 gap-x-3 w-[320px] h-[340px] rounded-lg'
            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}
        >


            {/* {doctorPhoto && <img src={doctorPhoto} alt={doctorName} className='w-[170px] h-[170px] rounded-full' />} */}
            <h3 className='text-[#1E1E1E] font-extrabold text-xl'>{doctorName}</h3>
            <p className='text-xl text-[#1E1E1E] opacity-70 '>{currentUniversity}</p>
            <span className='text-mainColor text-base '>{phoneNumber}</span>

        </div>
    );
};
export default OurDoctors;
