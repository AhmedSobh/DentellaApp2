import '../myProfile.css';
import { sobh } from '../imgs';
import { userLogout } from '../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const MyProfile = () => {
    const [profileData, setProfileData] = useState(null); 

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setProfileData(JSON.parse(storedUserData));
        }
    }, []); 

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
        localStorage.removeItem('userData');
        setProfileData(null); 
    };

    return (
        <>
            <div className="main-header">
                <a href="/">Home</a>
                <a href="/article">Work</a>
                <Link to={"/"} onClick={handleLogout}>Logout</Link>
            </div>
            <div className='profile-container'>
                <div className='sidebar'>
                    <div className='avatar'>
                        <img src={sobh} alt="User Avatar" />
                    </div>
                    <nav className="sidebar-nav">
                        <a href="/">Home</a>
                        <a href="/article">Work</a>
                        <Link to={"/"} onClick={handleLogout}>Signout</Link>
                    </nav>
                </div>
                {profileData ? (
                    <section className="about">
                        <h2>About</h2>
                        <p><strong>User Name:</strong> {profileData.userName}</p>
                        <p><strong>Password:</strong> {profileData.passWord}</p>
                        <p><strong>User Type:</strong> {profileData.userType}</p>
                    </section>
                ) : (
                    <p>Loading profile data...</p>
                )}
            </div>
        </>
    );
};

export default MyProfile;
