import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/img/logo.png";
import profile from "../../assets/img/profile1.png";

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];
  return (
    <div className="bg-[#FAFAFA] flex justify-between items-center h-24 px-4 mx-auto dark:text-white/75">
      {/* Logo */}
      <div>
        <img className="h-10 w-10 cursor-pointer" src={logo} alt="logo" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 relative lg:right-[48%] hover:bg-[#00df9a] m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
        <div className="m-2 p-2">
          <img
            className="h-10 w-10 cursor-pointer"
            src={profile}
            alt="profile"
          />
        </div>
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="block md:hidden"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FAFAFA] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="m-2 p-2">
          <img
            className="h-12 w-12 mx-auto my-auto cursor-pointer"
            src={profile}
            alt="profile"
          />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            onClick={() => setNav(false)}
            key={item.id}
            className="p-4 border-b  hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
