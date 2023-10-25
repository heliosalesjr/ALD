'use client'
import React from 'react';
import ReactPlayer from 'react-player'; //https://github.com/CookPete/react-player

function AtiSugestao() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className=" flex items-center justify-between p-8">
        <div className="w-1/2 pr-4">
          <h1 className="text-3xl font-bold mb-4">Sugestão de ferramenta</h1>
          <p>
          Para aprender como elaborar um formulário Google, acesse este tutorial. Como todas as respostas ficarão disponíveis em seu Drive, você poderá acessá-las sempre que necessário ao longo do projeto.
          </p>
          <br />
        </div>
        <div className="w-1/2">
          <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' width={480} />
        </div>
      </div>
      <div className="bg-purple-700 text-white p-8 ">
        <p>
          Após acessar os exemplos e realizar as dinâmicas de diagnóstico com seus estudantes, registre seu PPDA em uma planilha.
          Assim, você poderá acessá-lo durante a execução do projeto e compartilhá-lo com seus estudantes por meio do Google Sala de Aula.
          Confira um exemplo de planilha <a href="seu-link-da-planilha-aqui" className="underline">neste link</a>.
          Você pode copiá-la, preenchê-la e torná-la acessível aos estudantes.
        </p>
      </div>
      
    </div>
  );
}

export default AtiSugestao;
