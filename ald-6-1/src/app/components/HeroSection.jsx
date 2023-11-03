'use client'
//DaisyUI
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-screen flex items-center justify-center text-white">
      <div className="text-center">
      <h1 class="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
              Aprendendo a Lidar <br /><span class="text-[hsl(218,81%,75%)]">com Dinheiro</span></h1>
          <p className="text-lg text-[hsl(218,81%,95%)]">Olá, professor e professora! Seja bem-vindo e bem-vinda ao site de apoio da coleção Aprendendo a Lidar com Dinheiro: Educação Financeira. Nesta seção, há informações sobre o que são os sites “Aprendendo a Lidar com Dinheiro” e como estão organizados, facilitando a navegação e consulta. Vamos conhecê-los?
</p>
          <button className="btn px-8 text-bold btn-primary">
          ↓
          </button>
      </div>
    </div>
  );
};

export default HeroSection;
