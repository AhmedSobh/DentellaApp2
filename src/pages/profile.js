import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../profile.css';
import '../all.css';
import '../all.min.css';
import '../bootstrap.min.css';

const Profile = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get('http://dentelle.runasp.net/api/Card/GetAllCards');
        if (response.status === 200) {
          console.log("API Response Data:", response.data);
          const doctorData = response.data.find(doc => doc.cardId && doc.cardId.toString() === id);
          console.log("Matched Doctor Data:", doctorData);
          setDoctor(doctorData);
        } else {
          setError(`Unexpected response status: ${response.status}`);
        }
      } catch (error) {
        setError(`Error fetching doctor data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <>
      <div className="main-sec">
        <div className="up container">
          <div className="img">
            <div className="circle">
              <img src={doctor.doctorPhoto} alt={doctor.doctorName} />
            </div>
          </div>
          <div className="content">
            <h2>Book a consultation session now..</h2>
            <div className="name">{doctor.doctorName}</div>
            <div className="specialty">{doctor.specialty}</div>
            <div className="phone">{doctor.phoneNumber}</div>
            <div className="location">{doctor.currentUniversity}</div>
            <div className="icon">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <button>
                <Link to={'/booking'}>Book</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="tips container">
          <center><h1>Important Tips</h1></center>
          <div className="box">
            Maintaining dental health is an essential aspect of overall well-being. It requires daily attention to ensure a beautiful and healthy smile. Proper teeth cleaning is crucial, and using the right techniques with a toothbrush and dental floss can make a significant difference. Fluoride toothpaste plays a key role in defending against tooth decay by fighting germs and providing a protective barrier.
          </div>
        </div>

        <div className="about-doc">
          <div className="img">
              <img src={doctor.doctorPhoto} alt={doctor.doctorName} />
          </div>

          <div className="content">
            <h2>About me ..</h2>
            <h4>With a venerable robust alot of years of experience in dental medicine, Dr. John Smith stands as a paragon of dedication and expertise in his field. His journey in dentistry is marked by an illustrious career that spans several of the nation’s premier hospitals and clinics.</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
