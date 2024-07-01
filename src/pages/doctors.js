import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import '../App.css';
import '../doctors.css';
import '../all.css';
import '../all.min.css';
import '../bootstrap.min.css';

const ProfileCard = ({ specialty, doctorName, doctorPhoto, phoneNumber, currentUniversity, id }) => (
  <div className="collection">
    <div key={id}>
      <img src={doctorPhoto} alt={doctorName} />
      <h3 className="doctor-name">
        <Link to={`/profile/${id}`}>{doctorName}</Link>
      </h3>
      <h5>{currentUniversity}</h5>
      <h6>{specialty}</h6>
      <h6>{phoneNumber}</h6>
      <Link to='/booking'><button>Book Now</button></Link>
    </div>
  </div>
);

const DoctorPage = () => {
  const [displayProfile, setDisplayProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://dentelle.runasp.net/api/Card/GetAllCards');
        if (response.status === 200) {
          console.log("API Response Data:", response.data);  // تأكد من أن البيانات تأتي بشكل صحيح
          setDisplayProfile(response.data);
        }
      } catch (error) {
        console.error('Error fetching Profile data', error.message);
      }
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-content">
          <h1>Our <span>Doctors</span></h1>
          <h2>We have a group of highly experienced doctors</h2>
        </div>
        <div className="row">
          {displayProfile.map((doctor) => (
            <div className="col-md-3 mb-4" key={doctor.cardId}>
              <ProfileCard
                id={doctor.cardId}
                specialty={doctor.specialty}
                doctorName={doctor.doctorName}
                doctorPhoto={doctor.doctorPhoto}
                phoneNumber={doctor.phoneNumber}
                currentUniversity={doctor.currentUniversity}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
