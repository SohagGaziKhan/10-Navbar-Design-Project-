import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar_Four = () => {
  const [open, setOpen] = useState(false);

  const content = (
    <>
      <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition text-white ">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooty={true} to="/shop">
              shop
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooty={true} to="/">
              about
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooty={true} to="/">
              content{" "}
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooty={true} to="/">
              profile
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooty={true} to="/">
              project
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="shadow-lg bg-white fixed top-0 left-0 w-full">
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4 ">
        <div className="flex flex-1 items-center">
          <span className="text-3xl font-bold">logo</span>
        </div>
        {/* this is for lg screen */}
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden ">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/">
                Home
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/shop">
                shop
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/about">
                about
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/content">
                content{" "}
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/profile">
                profile
              </Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link spy={true} smooty={true} to="/project">
                project
              </Link>
            </li>
          </ul>
        </div>
        {/* this is for md and sm screen */}
        <div>
          {open && content}
          <button
            className="block sm:hidden transtion items-center mt-[8px]"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoMdClose size={25} className="text-[red]" />
            ) : (
              <HiMenuAlt3 size={25} className="text-black" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_Four;
