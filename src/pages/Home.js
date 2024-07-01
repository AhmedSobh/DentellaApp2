import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/auth/authActions";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Solutions from "../components/home/Solutions";
import AboutUs from "../components/home/AboutUs";
import OurSpeciality from "../components/home/OurSpeciality";
import OurTeam from "../components/home/OurTeam";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ReviewSection from "../components/home/ReviewSection";
import Consultation from "../components/home/Consultation";
import Footer from "../components/footer/Footer";

const Home = () => {
  const userLoggedIn = localStorage.getItem(
    "userToken",
    JSON.stringify("userToken")
  );
  // ================ logout function ================
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <Navbar />
        <Hero />
        <Features />
        <Solutions />
        <AboutUs />
        <OurSpeciality />
        <OurTeam />
        <WhyChooseUs />
        <ReviewSection />
        <Consultation />
      </div>
      <Footer />
    </>
  );
};

export default Home;
/*

      <ul className="flex gap-x-12">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      {userLoggedIn ? (
        <div className="flex flex-col justify-center items-center gap-y-2 h-[100vh]">
          <h1 className=" border-b-2 border-green-500 p-2 text-lg font-bold text-green-500 ">
            user is logged in
          </h1>
          <button
            onClick={handleLogout}
            className="border p-2 shadow-lg rounded"
          >
            logout
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center text-center h-[100vh]">
          <h1 className=" border-b-2 border-black p-2 text-lg font-bold ">
            YOU HAVE TO LOG IN{" "}
          </h1>
        </div>
      )}
*/ 