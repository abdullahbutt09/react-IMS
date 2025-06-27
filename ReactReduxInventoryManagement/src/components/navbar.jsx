import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold text-blue-600">📦 InventoryMS</h1>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-5">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium mt-2">Home</Link>
        <Link to="/" 
        state={{ scrollTo: 'features' }}
        className="text-gray-700 hover:text-blue-600 font-medium mt-2">Features</Link>
        <a href="#start" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Get Started</a>
      </div>

      {/* Hamburger Button */}
      <button className="sm:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 sm:hidden z-50">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/" 
          state={{ scrollTo: 'features' }}
          className="text-gray-700 hover:text-blue-600 font-medium" onClick={() => setIsOpen(false)}>Features</Link>
          <a href="#start" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition" onClick={() => setIsOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;