import React from 'react'

function RecInfografico() {
  return (
    <>
        <section className=" dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Infográfico
                </h2>
                <p className="mb-4">
                Infográfico é um tipo de linguagem que associa elementos verbais (frases curtas) a elementos não verbais (imagens, sons, gráficos etc.). Sua principal função é informar o leitor de maneira simples, rápida e objetiva. Na elaboração de um infográfico, é importante prestar atenção à consonância entre os elementos verbais e não verbais, ou seja, texto, imagens e demais elementos devem se referir sempre ao mesmo assunto. Abaixo você confere um exemplo de infográfico retirado deste link.
                </p>
               
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="images/info1.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="images/info1.png" alt="office content 2" />
                </div>
            </div>
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6">

            
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Sugestão de atividade
                    </h2>
                    <p className="mb-4">
                    A parte 2 do Livro do Estudante aborda diretamente um tema econômico ao falar sobre hábitos de consumo cotidianos (ir ao mercado, por exemplo). Nossa sugestão é que os estudantes construam um infográfico com dicas para economizar nas compras.
                    </p>
                    <p className="mb-4">
                    Após a construção desse infográfico, apresente-o para sua turma. Caso julgue necessário, revisite os capítulos 2 e 3 do livro.
                    </p>
                    <p className="mb-4">
                    O objetivo desta atividade é estimular nos estudantes a criatividade, a capacidade de articular elementos verbais e não verbais, o trabalho em grupo, a argumentação etc. Desse modo, foi solicitado que os estudantes criassem em duplas um infográfico com dicas para economizar nas compras de supermercado.
                    </p>
                    <p className="mb-4">
                    Atenção: Antes que os estudantes iniciem a atividade, certifique- se de que eles entenderam a estrutura de um infográfico. Chame a atenção para o fato de que eles devem sistematizar as dicas com frases curtas, imagens etc.
                    </p>
                    <p className="mb-4">
                    Os infográficos podem ser criados em sites específicos. Se você não tiver acesso à internet, pode fazer o infográfico usando lápis e papel.
                    </p>
                
                    </div>
                </div>
        </section>
        <div className="max-w-screen-lg mx-auto  pb-8 sm:pb-8 lg:pb-12">
            
            <div className="relative flex flex-wrap bg-purple-700 rounded-lg px-4 py-6 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
                <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
                <p className='font-bold'>
                Você pode conferir mais exemplos aqui:{' '}
                    <a
                        href="https://porque.com.br/categoria/infograficos/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                    >
                        Infográficos | Por Quê?
                    </a>
                </p>
                </div>

               
            
                
            </div>
            
            </div>
    </>
  )
}

export default RecInfografico