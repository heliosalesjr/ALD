'use client'
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-primary to-primary-focus mx-auto h-[40rem] flex items-center justify-center text-white">
      <div className="text-center flex items-center justify-between px-12">
        <div>
          <h1 className=" text-5xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Aprendendo a Lidar com Dinheiro
          </h1>
          <p className="text-lg text-white py-8">
            Olá, professor e professora! Seja bem-vindo e bem-vinda ao site de apoio da coleção Aprendendo a Lidar com Dinheiro: Educação Financeira. Nesta seção, há informações sobre o que são os sites “Aprendendo a Lidar com Dinheiro” e como estão organizados, facilitando a navegação e consulta. Vamos conhecê-los?
          </p>
        </div>
        <div>
          <img src="images/capas_6o_3.png" alt="Capa" className="px-8 w-[2000px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
