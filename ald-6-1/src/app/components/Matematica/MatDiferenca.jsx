import React from 'react';

function MatDiferenca() {
  return (
    <div className="relative max-w-screen-xl mx-auto p-8 text-white">
      <div className="w-2/3 p-8 bg-blue-500 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          Diferenciando Matemática Financeira e Educação Financeira
        </h1>
        <p>
          O que é matemática financeira? O que é educação financeira? Existe diferença entre esses dois campos do estudo? Para responder a essas perguntas, o texto "BNCC inclui Educação financeira em Matemática", publicado pelo site "Nova Escola", nos convida a essa reflexão.{' '}
          <a href="https://novaescola.org.br/conteudo/9798/bncc-inclui-educacao-financeira-em-matematica" className="underline">
            Clique na imagem para acessar.
          </a>
        </p>
      </div>
      <div className="w-1/3 absolute top-0 right-0">
        <a href="https://novaescola.org.br/conteudo/9798/bncc-inclui-educacao-financeira-em-matematica">
          <img
            src="/images/reais.png"
            alt="Link Externo"
            className="w-300 h-300 absolute top-0 right-0 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default MatDiferenca;




