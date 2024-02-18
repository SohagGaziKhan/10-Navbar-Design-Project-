// import React from 'react'
import { Link } from "react-router-dom";
import { PiSlackLogoBold } from "react-icons/pi";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar_One = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="md:flex justify-between items-center gap-4 max-w-[1140px] mx-auto md:px-10 px-6 py-4">
        {/* this is logo and name section */}
        <div className="flex items-center gap-2 cursor-pointer text-xl md:text-2xl left-0">
          <Link to="/">
            <PiSlackLogoBold size={25} className="text-blue-600 w-7 h-7" />
          </Link>
          <Link to="/">
            <span className=" font-semibold md:font-bold uppercase">
              Company
            </span>
          </Link>
        </div>
        {/* menu section */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-10 top-5 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? (
            <IoMdClose
              size={25}
              className="text-black w-7 h-7 cursor-pointer"
            />
          ) : (
            <HiMenuAlt3
              size={25}
              className="text-blue-600 w-7 h-7 cursor-pointer"
            />
          )}
        </div>
        {/* this is navlink or button section */}
        <div className="items-center">
          <ul
            className={`text-center py-4 md:py-0 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <Link to="/project">Project</Link>
            </li>
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <Link to="/services">Services</Link>
            </li>
            <li className="font-semibold my-7 md:my-0 md:ml-8">
              <Link to="/content-me">Content Me</Link>
            </li>
            <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_One;
