import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaNumeracao() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4'>
        <h1 className='font-bold text-3xl py-4 text-center text-gray-700'>Sistema de numeração decimal</h1>
        <p className='text-gray-700 py-4'>Por que os números são escritos da forma como vemos hoje? Sempre foi assim? Dá pra usar conhecimentos do sistema de numeração decimal para influenciar compradores? Por que valores com final ,99? Selecionamos alguns vídeos que respondem a estas perguntas.</p>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 pb-12 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/HtzZ4pVojMs' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/WE5wHCEdhBs' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaNumeracao

