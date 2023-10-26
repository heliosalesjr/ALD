import React from 'react';

function MatDiferenca() {
  return (
    <div className="max-w-screen-xl mx-auto relative py-4">
      {/* Gradiente de fundo azul e verde com ajustes */}
      <div className="absolute top-0 left-0 md:w-4/5 w-full h-full bg-gradient-to-r from-purple-900 to-blue-600 z-0"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between p-4 md:p-8 relative z-10">
        <div className="w-full md:w-2/3 pr-4">
          <h1 className="text-3xl font-bold text-white mb-4 mx-8 py-4">Diferenciando Matemática Financeira e Educação Financeira</h1>
          <p className="text-white mx-8">
          O que é matemática financeira? O que é educação financeira? Existe diferença entre esses dois campos do estudo? Para responder esse questionamento, o texto "BNCC inclui Educação financeira em Matemática", publicado pelo site "Nova Escola", nos convida a essa reflexão. Clique na imagem abaixo para acessar.
          </p>
          <br />
        </div>
        <div className="w-1/3 top-0 right-0">
            <a href="https://novaescola.org.br/conteudo/9798/bncc-inclui-educacao-financeira-em-matematica">
            <img
                src="/images/reais.png"
                alt="Link Externo"
                className="w-300 h-300 absolute top-0 right-0 cursor-pointer"
            />
            </a>
        </div>
      </div>
    </div>
  );
}

export default MatDiferenca;




