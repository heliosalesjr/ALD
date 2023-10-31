'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-700 p-4 mx-auto">
      <div className="container mx-auto flex items-center justify-between">
      <a href="/" className="text-white text-2xl font-bold">
        <img src="/images/logo-white.png" alt="Logo" height={60} width={60}/>
      </a>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-blue-200">
            Apresentação
          </Link>
          <Link href="/etapas" className="text-white hover:text-blue-200">
            Etapas do Projeto
          </Link>
          <Link href="/introducao" className="text-white hover:text-blue-200">
            Intodução ao Site 1
          </Link>
          <Link href="/atividades" className="text-white hover:text-blue-200">
            Atividades do Projeto
          </Link>
          <Link href="/matematica" className="text-white hover:text-blue-200">
            Matemática e Educação Financeira
          </Link>
          <Link href="/recursos" className="text-white hover:text-blue-200">
            Recursos Didáticos
          </Link>
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
            <Link href="/" className="text-white hover:text-blue-200 py-4 text-center">
              Apresentação
            </Link>
            <Link href="/etapas" className="text-white hover:text-blue-200 py-4 text-center">
              Etapas do Projeto
            </Link>
            <Link href="/introducao" className="text-white hover:text-blue-200 py-4 text-center">
              Intodução ao Site 1
            </Link>
            <Link href="/atividades" className="text-white hover:text-blue-200 py-4 text-center">
              Atividades do Projeto
            </Link>
            <Link href="/matematica" className="text-white hover:text-blue-200 py-4 text-center">
              Matemática e Educação Financeira
            </Link>
            <Link href="/recursos" className="text-white hover:text-blue-200 py-4 text-center">
              Recursos Didáticos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MyNav;
