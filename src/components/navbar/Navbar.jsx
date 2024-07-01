import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/Ellipse 122.svg";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/auth/authActions';
const Navbar = () => {
    const user = localStorage.getItem("userToken")
        ? JSON.parse(localStorage.getItem("userToken"))
        : null;
    return (
        <div>
            <BigScreenNav user={user} />
            <SmallScreenNav user={user} />
        </div>
    )
}

// !navbar in big screen 
const BigScreenNav = ({ user }) => {

    return (
        <nav className='hidden md:flex py-4  items-center justify-between'>
            <img src={Logo} alt="logo" className='w-[150px] h-[120px]' />
            <NavLinks />
            {user ? <LoggedIn /> :
                <Link to={"/login"} className='text-white bg-mainColor text-lg font-semibold w-32 text-center rounded-md p-2 '>login</Link>
            }

        </nav>
    )
}

// !navbar in small screen 
const SmallScreenNav = ({ user }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const refMenu = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (refMenu.current && !refMenu.current.contains(event.target)) {
                setOpenMenu(false);
            }
        }
        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const handleOpenSidebar = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <nav className='md:hidden py-3 flex items-center justify-between'>
            {user ? <LoggedIn /> :
                <Link to={"/login"} className='text-white bg-mainColor text-lg font-semibold w-32 text-center rounded-md p-2 '>login</Link>
            }
            <TiThMenu size={30} className='text-mainColor cursor-pointer' onClick={handleOpenSidebar} />
            {openMenu &&
                <>
                    <div className=" z-[1000] backdrop-blur backdrop-filter absolute top-0 left-0 right-0 bottom-0  "></div>
                    <div className={`sidebar ${openMenu ? "open" : ""} z-[1120]`} ref={refMenu}>
                        <div className='flex flex-col items-center gap-[30px]'>
                            <img src={Logo} alt="logo" className='w-[120px] h-[120px]' />
                            <NavLinks />
                        </div>
                    </div>
                </>
            }
        </nav>
    );
}

// !nvabar links 
const links = [
    { name: "home", route: "/", id: 1 },
    { name: "Ai model", route: "https://huggingface.co/spaces/OmarEllethy/DENTELLA", id: 2 , target:"blank"},
    { name: "Article", route: "/article", id: 3 },
    { name: "Posts", route: "/post", id: 4 },
    { name: "Our Doctors", route: "/doctors", id: 5},

]
const NavLinks = () => {
    const { pathname } = useLocation();
    const [active, setActive] = useState(pathname)
    const handleActiveLink = (path) => {
        if (path !== active) {
            setActive(path);
        }
    };

    return (
        <ul className='flex flex-col md:flex-row items-center justify-center gap-5'>
            {links.map(link => {
                const isActive = link.route === active;
                return (
                    <li key={link.id} onClick={() => handleActiveLink(link.route)}>
                        <Link className={` text-[#1E1E1E] md:text-xl lg:text-2xl ${isActive ? 'text-mainColor font-extrabold' : ''}`} to={link.route}>{link.name}</Link>
                    </li>
                );
            })}
        </ul>

    )
}

// if user logged in so this component will appear instead login button.
const LoggedIn = () => {
    // handle toggle 
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        setOpen(pre => !pre)
    }

    // !handle outside clicker 
    const ref = useRef(null);
    useEffect(() => {
        const clickHandler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        window.addEventListener("click", clickHandler);

        return () => {
            window.removeEventListener("click", clickHandler);
        };
    }, []);
    // !handle logout
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLogout());
        window.location.reload();
    };

    return (
        <div className='relative' ref={ref}>
            <img src={Avatar} alt="avatar" className='w-14 h-14 cursor-pointer' onClick={handleToggle} />
            {open &&
                <div className="bg-white shadow rounded-lg absolute top-100 left-0 right-0 bg-white w-[150px] h-[100px] p-3">
                    <button onClick={handleLogout} className='w-full bg-mainColor text-white rounded-lg hover:font-bold tranalte' >logout</button>
                    <br></br>
                    <br></br>
                    <Link to={"/myprofile"}><button className='w-full bg-mainColor text-white rounded-lg hover:font-bold tranalte' >Profile</button></Link>
                </div>
            }
        </div>
    )
}
export default Navbar