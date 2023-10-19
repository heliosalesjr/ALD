'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 mx-auto max-w-screen-xl">
      <div className="container mx-auto flex items-center justify-between">
      <a href="/" className="text-white text-2xl font-bold">
        <img src="/images/logo-white.png" alt="Logo" height={60} width={60}/>
      </a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-blue-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Services
          </a>
          <a href="#" className="text-white hover:text-blue-200">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <a href="#" className="text-white hover:text-blue-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              About
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MyNav;
