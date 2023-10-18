'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo à Minha Página</h1>
        <p className="text-lg">Uma descrição incrível do que oferecemos.</p>
        <button className="bg-white text-blue-500 hover:bg-blue-200 hover:text-white px-6 py-2 rounded-full mt-6">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
