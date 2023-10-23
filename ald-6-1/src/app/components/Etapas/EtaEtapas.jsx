import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { LiaProjectDiagramSolid } from "react-icons/lia";



const cardData = [
  {
    title: "I - Diagnóstico",
    description:
      "Traçar o perfil da turma como um todo, destacando suas qualidades e seus potenciais, e identificando dificuldades e limites que devem ser superados.",
  },
  {
    title: "II - Conteúdos e Habilidades",
    description:
      "Descrever os principais conteúdos de matemática e habilidades da BNCC a serem trabalhados.",
  },
  {
    title: "III - Planejamento",
    description:
      "Planejar o PPDA escolhendo estratégias e ferramentas que incitem a participação dos estudantes.",
  },
  {
    title: "IV - Atividades",
    description: "Executar as atividades planejadas.",
  },
  {
    title: "V - Avaliação",
    description:
      "Avaliar os resultados, verificando até que ponto os objetivos propostos foram alcançados.",
  },
  {
    title: "VI - Conclusão",
    description:
      "Planejar a Culminância das conquistas ao fim do programa, comunicando os resultados.",
  },
];

export default function EtaEtapas() {
  return (
<div className="container mx-auto flex flex-wrap justify-center">
      {cardData.map((card, index) => (
        <Card key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mx-4 my-4">
          <CardHeader className="flex gap-3">
            <div className="bg-purple-500 p-2 rounded-full">
              <LiaProjectDiagramSolid className="text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-md text-purple-600 font-bold">{card.title}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{card.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
