import React, { useEffect } from "react";
import Logo from "../../assets/logo.svg";
import Doctor from "../../assets/doctor.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import "aos/dist/aos.css";

import AOS from "aos";
const FormModel = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="md:grid grid-cols-12 relative ">
        <img
          data-aos="flip-down"
          src={Doctor}
          alt="doctor"
          className="absolute top-[20%] md:right-[2%] lg:right-[23%] z-50 w-[320px] h-[420px] hidden md:block "
        />

        <div className="col-span-8 px-8 py-4">
          <img
            onClick={() => navigate("/")}
            src={Logo}
            alt="logo"
            className="w-24 h-24 md:w-fit md:h-fit cursor-pointer"
          />

          <div className="flex justify-center ">
            <div className="">
              <h2 className="font-bold text-3xl">
                {location.pathname === "/login" ? "Login" : "Register"} with
                Dentella
              </h2>
              <p className="text-[#6b6969] md:w-[460px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus amet pariatur
              </p>
              <div>{children}</div>
            </div>
          </div>
        </div>

        <div className="hidden md:block col-span-4 bg-blue-500 min-h-screen"></div>
      </div>
    </>
  );
};

export default FormModel;
