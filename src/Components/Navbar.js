import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-2xl font-semibold">
                MunchHub
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:ml-6">
            <div className="relative flex items-center">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search restaurants or dishes"
                className="bg-gray-700 rounded-full ml-2 py-1 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="ml-6">
              <Link to="/Cart" className="text-white hover:text-gray-300">
                <FaShoppingCart className="text-2xl" />
              </Link>
            </div>
            <div className="ml-6">
              <button onClick={handleOpen} className="text-white hover:text-gray-300">
                <CgProfile className="text-2xl" />
              </button>
              <div
                className={`${
                  isOpen ? 'block' : 'hidden'
                } absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-md shadow-lg`}
              >
                {/* Content for profile dropdown */}
                <div className="py-1">
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
