import React from 'react'
import './HeroMin.css'
function HeroMin() {
  return (
    <>
        
        <div className="bg-gradient-to-b from-slate-700 to-primary mx-auto pt-20 h-[40rem] flex items-center justify-center text-white">
        
            <div className='max-w-screen-xl'>
            
                        <img
                            src="images/til.png"
                            alt="Descrição da imagem"
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 m-auto max-w-xl lg:max-w-3xl md:max-w-2xl"
                        />
                    <div className="z-10 text-center flex items-center justify-between px-12 pt-8">
                        <div>
                            
                            <h1 className="pt-8 mt-64 text-3xl font-bold tracking-tight text-white sm:text-5xl max-w-3xl mx-auto">
                            Aprendendo a Lidar com Dinheiro
                            </h1>
                            <p className=" text-white py-8 max-w-2xl mx-auto">
                            Olá, professor e professora! Seja bem-vindo e bem-vinda ao site de apoio da coleção Aprendendo a Lidar com Dinheiro: Educação Financeira. Nesta seção, há informações sobre o que são os sites “Aprendendo a Lidar com Dinheiro” e como estão organizados, facilitando a navegação e consulta. Vamos conhecê-los?
                            </p>
                        </div>
                        
                    </div>
                    
                    <div className="max-w-[230px] mx-auto bottom-0 z-10">
                        
                        <img
                        src="images/covers2.png"
                        alt="Descrição da segunda imagem"
                        className="h-250px z-10000 shadow-xl"
                        />
                        
                    </div>
                    
                </div>
            </div>
        
           
    </>
  )
}

export default HeroMin