import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../post.css';
import '../all.css';
import '../all.min.css';
import '../bootstrap.min.css';
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const PostCard = ({ patientPhoto, title, content, patientName, phoneNumber }) => {
  console.log("Rendering PostCard:", { patientPhoto, title, content, patientName, phoneNumber });
  return (
    <div className="post-card">
      <div className='doctor-name'>
        {patientPhoto && <img className='doctor-image' src={patientPhoto} alt={patientName} />}
        <div className='doctor-detiles'>
        <h3>{patientName}</h3>
        <h5>{phoneNumber}</h5>
      </div>
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

const PostPage = () => {
  const [displayPosts, setDisplayPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://dentelle.runasp.net/api/Post/GetAllPosts');
        if (response.status === 200) {
          console.log("Fetched Posts:", response.data);
          setDisplayPosts(response.data);
        }
      } catch (error) {
        console.error('Error fetching Posts:', error.message);
      }
    };

    fetchPosts();
  }, []);

  console.log("Display Posts State:", displayPosts);

  return (
    <div className="post-page container">
      <div className='header-content'>
        <Link to={"/"}><img src={Logo} alt="logo" className='w-[150px] h-[120px]' /></Link>
        <h1>Post</h1>
      </div>
      <div className="posts-grid">
        {displayPosts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            patientPhoto={post.patientPhoto}
            patientName={post.patientName}
            phoneNumber={post.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
