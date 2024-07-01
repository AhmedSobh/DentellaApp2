import React from 'react';
import { Logo } from '../imgs';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Style.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { toast } from 'react-toastify';


function Header() {
  return (
    <header className="headerB container">
      <div className="logo w-[150px] h-[120px]">
        <Link to={'/'}> <img src={Logo} alt="Logo" /></Link>
      </div>
    </header>
  );
}
  
function BookingSection() {

  const handleClick = () => {
    toast.success('Your Booking sent!');
    setTimeout(() => {
    }, 1000);}
  return (
    
    <section className="sec1B container">
      <h1>Book Now</h1>
      <center><h5>Aenean sit amet magna vel magna fringilla fermentum. Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.</h5></center>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Your Email" />
        <input type="number" placeholder="Phone Number" />
        <select className="form-control">
          <option>Cleaning</option>
          <option>filling</option>
          <option>Crowns</option>
          <option>Implants</option>
          <option>Extractions</option>
          <option>orthodontic</option>
        </select>
        <textarea name="Note" placeholder="Note"></textarea>
      </form>
      
     <Link to={"/"}> <button onClick={handleClick} className='button' >Confirm </button></Link>
    </section>
  );
}

function Footer() {
  return (
    <div
    className="py-8 px-8 md:px-16 bg-[#004155] text-white  text-surface/75  lg:text-left footer">

    <h6 className='font-bold text-2xl'>Dentella</h6>

    <div className=" py-10 text-center md:text-left" >
        <div className="  grid gap-8 grid-cols-2 lg:grid-cols-4">

            <div className="footer-column">
                <h6
                    className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                    ProducCompanyts
                </h6>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>Home</a>
                </p>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>Services</a>
                </p>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>About Us</a>
                </p>
                <p>
                    <a href="#!" className='text-lg'>Why Choose Us</a>
                </p>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>Testimonials</a>
                </p>
                <p>
                    <a href="#!" className='text-lg'>Contact Us</a>
                </p>
            </div>

            <div className="footer-column">
                <h6
                    className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                    Address
                </h6>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>123 Dental Avenue City ville,
                        <br /> Mansoura, EGYPT</a>
                </p>
                <h6
                    className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                    Inquiries
                </h6>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>(123) 456-7890</a>
                </p>
                <p className="mb-4">
                    <a href="#!" className='text-lg'>nazmy871@gmail.com</a>
                </p>

            </div>

            <div className="footer-column">
                <h6
                    className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                    Newsletter
                </h6>
                <p>Stay Updated with our Latest News</p>


                <div className='relative w-fit my-5'>
                    <input type="text" className='p-4 rounded-full border font-bold text-lg' placeholder='Your Email' />
                    <button className='absolute right-4 top-[25%] bg-[#004155] px-4 py-2 rounded-2xl'>
                        <FaArrowRightLong />
                    </button>
                </div>
                <div className="">
                    <h6
                        className="mb-4 flex justify-center font-extrabold uppercase md:justify-start">
                        Follow Us
                    </h6>
                    <div className='flex items-center gap-2'>
                        <FaFacebook className='text-xl text-white' />
                        <FaTwitter className='text-xl text-white' />
                        <FaYoutube className='text-xl text-white' />
                        <FaInstagram className='text-xl text-white' />
                    </div>
                </div>

            </div>
        </div>
    </div >
</div >
  );
}

function Booking() {
  return (
    <div>
      <Header />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default Booking;
