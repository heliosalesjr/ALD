import React from 'react';

function BaixeLivros() {
  return (
    <>
      <section className="bg-gradient-to-tl from-primary to-primary-focus">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Acesse os livros
            </h2>
            <p className="mb-8">
              A Educação Financeira é um processo contínuo e temos a certeza de que, além de formar os jovens, ela poderá trazer pontos de reflexão instigantes e práticos não apenas para as suas famílias, mas também para os professores. Aproveite!
            </p>
            <div className='px-4'>
              <button className="btn btn-customizado btn-outline">
                Caderno do Educador
              </button>
              <button className="btn btn-customizado btn-outline">
                Livro do Estudante
              </button>
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full" src="images/6o.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10" src="images/6o_educador.png" alt="office content 2" />
          </div>
        </div>
      </section>
    </>
  );
}

export default BaixeLivros;
