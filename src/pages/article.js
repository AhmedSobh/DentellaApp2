import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../article.css';
import '../all.css';
import '../all.min.css';
import '../bootstrap.min.css';
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';

const ArticleCard = ({ photo, title, imageData, content, doctorName }) => (
  <div className="article-card">
    <div className='doctor-name'>
      {photo && <img className='doctor-image' src={photo} alt={doctorName} />}
      <h3>{doctorName}</h3>
    </div>
    {imageData && <img src={imageData} alt={title} />}
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const ArticlePage = () => {
  const [displayArticles, setDisplayArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://dentelle.runasp.net/api/Article/GetAllArticles');
        if (response.status === 200) {
          setDisplayArticles(response.data);
        }
      } catch (error) {
        console.error('Error fetching articles:', error.message);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="article-page container">
      <div className='header-content'>
        <Link to={"/"}><img src={Logo} alt="logo" className='w-[150px] h-[120px]' /></Link>
        <h1>Article</h1>
      </div>
      <h2>Recent articles:</h2>
      <div className="articles-grid">
        {displayArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            content={article.content}
            imageData={article.imageData}
            photo={article.photo}
            doctorName={article.doctorName}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
