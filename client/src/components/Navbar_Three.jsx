import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const Navbar_Three = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0">
      <div className="flex justify-between items-center gap-4 max-w-[1140px] mx-auto md:px-10 px-6 py-4">
        {/* this is left section */}
        <section className="flex gap-4 items-center">
          {/* menu */}
          {/*  Added onClick handler here */}
          <CiMenuFries
            size={25}
            className="font-bold cursor-pointer"
            onClick={toggleMenu}
          />
          {/* logo */}
          <Link className="text-2xl font-semibold" to="/">
            Company
          </Link>
        </section>
        {/* this is center section  */}
        <section className="hidden lg:flex justify-between items-center gap-4">
          <ul className="flex gap-4 justify-between items-center cursor-pointer">
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/collection"}>Collection</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/men"}>Men</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/women"}>Women</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/kids"}>Kid</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
              <Link to={"/contant"}>Contant</Link>
            </li>
          </ul>
        </section>
        <section>
          {/* sidebar mobile menu */}
          {open && (
            <div className="fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 transition-all duration-500 ease-in">
              <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex w-56">
                <IoMdClose
                  // when this button click then close mobile sereen
                  onClick={toggleMenu}
                  size={25}
                  className="mt-0 mb-8 text-3xl cursor-pointer"
                />
                <ul className="flex flex-col gap-3 font-semibold text-lg md:text-2xl">
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/collection"}>Collection</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/men"}>Men</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/women"}>Women</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/kids"}>Kid</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li className="cursor-pointer hover:text-gray-500 py-2 hover:underline underline-offset-8">
                    <Link to={"/contant"}>Contant</Link>
                  </li>
                </ul>
              </section>
            </div>
          )}
        </section>
        {/* this is right section  */}
        <section className="flex gap-4 items-center">
          {/* cart */}
          <span>
            <BsCart size={25} className="text-black font-bold" />
          </span>
          {/* profile image */}
          <div className="w-[40px] h-[40px]">
            <img
              className="w-full h-full rounded-full"
              src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              alt=""
            />
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar_Three;
