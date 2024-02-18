import { IoReorderThreeSharp } from "react-icons/io5";
import {
  FaSearch,
  FaShoppingCart,
  FaWallet,
  FaUserFriends,
} from "react-icons/fa";
import { MdOutlineClose, MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="max-w-[1640px] mx-auto justify-between flex items-center p-4 ">
      {/* left side code  */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <IoReorderThreeSharp size={30} onClick={() => setNav(!nav)} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl cursor-pointer mx-1">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* center side code  */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <FaSearch size={20} />
        <input
          type="text"
          placeholder="Search Your Food "
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>
      {/* right side code  */}
      <button className="bg-black text-white hidden md:flex items-center py-2 gap-2 justify-center rounded-xl w-[100px]">
        <FaShoppingCart className="" />
        <span>Cart</span>
      </button>
      {/* Mobile Menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <MdOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 cursor-pointer my-4"
        />
        <h2 className=" text-2xl p-4 ">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-2 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-2 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-2 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-2 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-2 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-2 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-2 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
