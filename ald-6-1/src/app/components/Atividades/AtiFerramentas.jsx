import React from "react";

function AtiFerramentas() {
  return (
    <>
      <div className='mx-auto max-w-screen-xl '>
        <h2 className='font-bold text-2xl md:text-4xl sm:text-3xl text-gray-700 py-4 text-center'>Ferramentas que podem ser utilizadas para fazer esse diagnóstico</h2>
        <p className="text-gray-800 text-center">Criamos um link para cada uma das sugestões de ferramentas já com o modelo de aplicação com os estudantes. Clique em cada uma dessas ferramentas para conhecê-las e então aplicá-las com os estudantes por meio da plataforma Google:</p>
      </div>
      <div className="grid grid-cols-1 mx-auto max-w-screen-xl md:grid-cols-3 sm:grid-cols-1 gap-8 px-8">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/desejo.png" alt="Realidade e desejo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title py-4">Realidade e desejo</h2>
              <div className="card-actions text-center">
                <button className="btn btn-primary text-white">Explicação</button>
                <button className="btn btn-primary text-white">Modelo</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/agrada.png" alt="Me agrada, me incomoda" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title py-4">Me agrada, me incomoda</h2>
              <div className="card-actions">
                <button className="btn btn-primary text-white">Explicação</button>
                <button className="btn btn-primary text-white">Modelo</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="/images/jogo.png" alt="Jogo de perguntas e respostas" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Jogo de perguntas e respostas</h2>
              <div className="card-actions py-4">
                <button className="btn btn-primary text-white">Explicação</button>
                <button className="btn btn-primary text-white">Modelo</button>
              </div>
            </div>
          </div>
          <div className='divider max-w-screen-xl mx-auto'></div>
        </div>
    
    </>
    
  );
}

export default AtiFerramentas;
