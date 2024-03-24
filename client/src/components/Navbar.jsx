import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex justify-between px-4 py-2 bg-gray-900">
      <NavLink className="text-[#FBC108] font-bold ">HASIO</NavLink>
      <div className="hidden md:flex gap-4 mx-4 text-md font-bold text-[#FBC108]">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <NavLink to="/login">LOGIN</NavLink>
        <NavLink to="/register">REGISTER</NavLink>
      </div>
      <button
        onClick={handleToggle}
        className="md:hidden block text-gray-500 focus:outline-none">
        {toggle ? "Close" : "Menu"}
      </button>
      {toggle && (
        <div className="md:hidden flex flex-col gap-10 w-10 font-bold  absolute top-16 right-0 h-full bg-black text-white shadow-md py-4 px-24">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </div>
      )}
    </nav>
  );
}
