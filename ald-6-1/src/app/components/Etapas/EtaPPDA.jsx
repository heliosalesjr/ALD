
import React from 'react';
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

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

const EtaPPDA = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Pequeno Projeto Didático Ativo (PPDA)</h1>
      <p className="text-lg mt-4">
        Existem diversas maneiras de se trabalhar com projetos. Para a aplicação deste programa, sugerimos o desenvolvimento de Pequenos Projetos Didáticos Ativos (PPDA), que são projetos de curta duração (mensal, bimestral ou trimestral), cuja função é mobilizar e engajar os estudantes a solucionar um problema relacionado ao tema que estão estudando. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar.
      </p>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} className="bg-white border border-blue-500 rounded-lg hover:shadow-md">
            <CardHeader className="flex gap-3">
              
              <div className="flex flex-col">
                <p className="text-md text-purple-600 font-bold">{card.title}</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{card.content}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EtaPPDA;
