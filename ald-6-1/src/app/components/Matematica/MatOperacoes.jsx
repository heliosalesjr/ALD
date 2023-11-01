import React from 'react'
import ReactPlayer from 'react-player'

function MatOperacoes() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='font-bold text-3xl py-4 text-center text-gray-700'>Operações com números naturais/divisão euclidiana</h1>
        <p className='text-gray-700 py-4'>Selecionamos alguns vídeos bem práticos que podem auxiliar o professor com as quatro operações básicas envolvendo números naturais.</p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 pb-12 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/FQC-UyOZ15Q' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/6aabEJjicAE' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/oKsGzKfF9bg' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatOperacoes