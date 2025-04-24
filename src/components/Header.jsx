import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GiSewingNeedle } from "react-icons/gi"; // Needle icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-sky-600 text-white p-4 shadow-md w-full fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center w-full">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pinimg.com/originals/71/da/2f/71da2fce1d34da98d715820ebd0a3533.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <Link to="/home" className="text-4xl font-signature text-white relative">
            Karioca Upcycle
            <GiSewingNeedle className="absolute text-2xl text-white bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1" />
          </Link>
        </div>

        {/* Right Side: Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg ml-auto">
          <Link to="/home" className="hover:text-sky-200 transition">Home</Link>
          <Link to="/services" className="hover:text-sky-200 transition">Services</Link>
          <Link to="/services/Products" className="hover:text-sky-200 transition">Products</Link>
          <Link to="/about" className="hover:text-sky-200 transition">About Us</Link>
          <Link to="/contact" className="hover:text-sky-200 transition">Contact</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none z-50 relative">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-blue-800 bg-opacity-95 text-white flex flex-col items-center justify-center space-y-6 text-xl z-40">
            <Link to="/home" onClick={toggleMenu} className="hover:text-indigo-300">Home</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-indigo-300">Services</Link>
            <Link to="/services/Products" onClick={toggleMenu} className="hover:text-sky-200 transition">Products</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-indigo-300">About Us</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-indigo-300">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
