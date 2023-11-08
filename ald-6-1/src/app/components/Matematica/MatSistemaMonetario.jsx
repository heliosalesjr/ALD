import React from 'react'
import ReactPlayer from 'react-player'

function MatSistemaMonetario() {
  return (
    <>
      <div className='max-w-screen-xl mx-auto p-4 bg-primary'>
        <h1 className='font-bold text-3xl py-4 text-center text-white'>Sistema monetário brasileiro</h1>
        <p className='text-white py-4'>Vamos conhecer um pouco sobre o sistema monetário brasileiro através de dois vídeos: O primeiro se chama De onde vem o dinheiro? e o segundo Sistema Monetário para Crianças.</p>
      </div>
      <div className="max-w-screen-xl mx-auto bg-primary pb-12 p-4 mb-12 lg:mb-0 flex space-x-8 flex-col md:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/eLEhKXwv37Y' width="100%" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-auto lg:mx-0 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
            <ReactPlayer url='https://youtu.be/Ay53t2apy-4' width="100%" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MatSistemaMonetario