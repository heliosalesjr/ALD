import React from 'react';

const EtaPPDA = () => {
    const cards = [
        { title: 'Turma/Série', content: 'Especifique em que turma será aplicado o roteiro' },
        { title: 'Perfil da Turma', content: 'Utilize as ferramentas de "diagnóstico" para compreender melhor quem são seus estudantes e, assim, adequar as atividades propostas.' },
        { title: 'Duração do Projeto', content: 'Especifique o tempo de duração do projeto.' },
        { title: 'Tema', content: 'O tema deve ser de interesse dos jovens, de preferência escolhido com a colaboração deles.' },
        { title: 'Habilidades Específicas da BNCC', content: 'Escola quais habilidades trabalhar. Para cada uma delas, é necessário definir quais conteúdos conceituais, procedimentais e atitudinais serão desenvolvidos.' },
        { title: 'Atividades', content: 'Defina ações a serem desenvolvidas em cada aula para trabalhar os conteúdos previstos e alcançar os objetivos desejados. Ao planejar atividades descreva as estratégias para a aula, defina habilidades a serem trabalhadas, determine o conteúdo que será utilizado e como as habilidades serão desenvolvidas.' },
        { title: 'Fator de Mobilização', content: 'O fator de mobilização é um desafio proposto aos estudantes com base em suas motivações e interesses. Cada capítulo do livro do estudante possui uma atividade ou desafio que deve ser elaborado e executado pelos estudantes em diferentes PPDAs.' },
        { title: 'Avaliação de Percurso e Resultados', content: 'A cada atividade ou bloco de atividades, programe-se e dedique um tempo específico para assegurar-se de que os objetivos do PPDA estão sendo atingidos.' },
        { title: 'Apresentação e Finalização', content: 'Com o PPDA estruturado, apresente-o a turma. Nesse momento, ele pode ser ajustado e finalizado com a ajuda dos jovens, para que se iniciem as atividades, conforme planejado.' },
        { title: 'Culminância', content: 'É o momento onde os resultados dos projetos são apresentados a um público a ser escolhido, que pode contemplar outros educadores, outras turmas, a comunidade do bairro, entre outros.' },
      ];
    
      const columns = [
        [cards[0], cards[1], cards[2]],
        [cards[3], cards[4]],
        [cards[5], cards[6]],
        [cards[7], cards[8], cards[9]],
      ];
    
      return (
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mt-8">Pequeno Projeto Didático Ativo (PPDA)</h1>
          <p className="text-lg mt-4">Existem diversas maneiras de se trabalhar com projetos. Para a aplicação deste programa, sugerimos o desenvolvimento de Pequenos Projetos Didáticos Ativos (PPDA), que são projetos de curta duração (mensal, bimestral ou trimestral), cuja função é mobilizar e engajar os estudantes a solucionar um problema relacionado ao tema que estão estudando. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar. <br></br><br></br>

Veremos abaixo itens que devem constar em um PPDA.</p>
    
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col justify-center">
                {column.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-white p-4 border border-blue-500 rounded-lg hover:shadow-md mb-4"
                  >
                    <h2 className="text-xl font-semibold">{card.title}</h2>
                    <p className="mt-2">{card.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default EtaPPDA;

