'use client'
import React from 'react';

function MatDiferenca() {
  return (
    <div className="relative">
      {/* Retângulo azul no fundo */}
      <div className="absolute top-0 left-0 w-full h-2/3 bg-blue-500 z-0"></div>

      <div className="max-w-screen-xl mx-auto relative z-10 flex items-center">
        {/* Div de texto ocupando 2/3 da tela */}
        <div className="w-2/3 p-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Diferenciando Matemática Financeira e Educação Financeira
          </h1>
          <p className="text-white">
            O que é matemática financeira? O que é educação financeira? Existe diferença entre esses dois campos do estudo? Para responder a essas perguntas, o texto "BNCC inclui Educação financeira em Matemática", publicado pelo site "Nova Escola", nos convida a essa reflexão.
          </p>
        </div>

        {/* Imagem quadrada ocupando 1/3 da tela */}
        <div className="w-1/3 h-96">
          <a href="https://novaescola.org.br/conteudo/9798/bncc-inclui-educacao-financeira-em-matematica">
            <img
              src="/images/reais.png"
              alt="Link Externo"
              className="w-full h-full cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MatDiferenca;











