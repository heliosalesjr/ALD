import React from 'react'

function AtiBotaoNext() {
  return (
    <>
        <div className="bg-purple-700 text-white flex justify-center p-8 ">
            <p className='max-w-screen-xl'>
            Após acessar os exemplos e realizar as dinâmicas de diagnóstico com seus estudantes, registre seu PPDA em uma planilha.
            Assim, você poderá acessá-lo durante a execução do projeto e compartilhá-lo com seus estudantes por meio do Google Sala de Aula.
            Confira um exemplo de planilha <a href="seu-link-da-planilha-aqui" className="underline">neste link</a>.
            Você pode copiá-la, preenchê-la e torná-la acessível aos estudantes.
            </p>
        </div>

        <div className="flex justify-center">
        
            <div className="p-8 my-4">
                <p className='p-8'>Vamos conhecer os conteúdos de Matemática a serem trabalhados nesta etapa?</p>
                <div className="flex justify-center"> {/* Novo contêiner */}
                <button className="btn">Matemática e Educação Financeira</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AtiBotaoNext