import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-green-700 to-lime-600 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pinimg.com/originals/71/da/2f/71da2fce1d34da98d715820ebd0a3533.jpg"
            alt="Logo"
            className="w-10 h-10"
          />
          <Link to="/home" className="text-2xl font-bold">
            Karioca Upcycle
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/home" className="hover:text-lime-200">Home</Link>
          <Link to="/services" className="hover:text-lime-200">Services</Link>
          <Link to="/about" className="hover:text-lime-200">About Us</Link>
          <Link to="/contact" className="hover:text-lime-200">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none z-50 relative">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-green-700 text-white flex flex-col items-center justify-center space-y-6 text-xl z-40">
            <Link to="/home" onClick={toggleMenu}>Home</Link>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
