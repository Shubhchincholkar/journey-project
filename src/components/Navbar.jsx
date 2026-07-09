import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#B5651D] font-semibold border-b-2 border-[#B5651D] p-1"
      : "text-[#3B2F2F] hover:text-[#B5651D] p-1";

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-[#EADBC8]">
      <h1 className="text-2xl font-bold text-[#B5651D] flex gap-4.5 items-center">Journeyboard <FaPlaneDeparture size={30} /></h1>
      
      <div
        className={" md:flex flex-col md:flex-row gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#FFF8F0] md:bg-transparent p-6 md:p-0"}
      >
        <NavLink to="/" className={linkClass} >
          Home
        </NavLink>
        <NavLink to="/destinations" className={linkClass} >
          Destinations
        </NavLink>
        <NavLink to="/about" className={linkClass} >
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
