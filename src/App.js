import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import OurDoctors from "./pages/doctors";
import Profile from "./pages/profile";
import BookNow from "./pages/Booking";
import MyProfile from "./pages/myprofile";
import Article from "./pages/article";
import Posts from "./pages/post";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<OurDoctors />}/>
        <Route path="/booking" element={<BookNow />}/>
        <Route path="/profile/:id" element={<Profile />}/>
        <Route path="/myprofile" element={<MyProfile />}/>
        <Route path="/article" element={<Article />}/>
        <Route path="/post" element={<Posts/>}/>
      </Routes>
    </div>
  );
};

export default App;
