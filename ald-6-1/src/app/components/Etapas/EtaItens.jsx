'use client'
import React from "react";
import {Card, CardBody, CardFooter, Image, Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Diagnóstico",
      img: "/images/books.png",
      popTitle: 'Diagnóstico',
      popContent: 'Compreende os itens: 1. Turma, 2. Duração do projeto, 3. Tema, 4. Perfil da Turma, 5. Fator de Mobilização do PPDA. ',
      
    },
    {
      title: "Conteúdos e Habilidades",
      img: "/images/doguin.png",
      popTitle: 'Conteúdos e Habilidades',
      popContent: 'Compreende o item 6. Habilidades específicas da BNCC do PPDA.',
      
    },
    {
      title: "Planejamento",
      img: "/images/howmuch.png",
      popTitle: 'Planejamento',
      popContent: 'Compreende o item 9. Apresentação e finalização do PPDA.',
    },
    {
      title: "Atividades",
      img: "/images/learns.jpg",
      popTitle: 'Atividades',
      popContent: 'Compreende o item 7. Atividades do PPDA.',
    },
    {
      title: "Avaliação",
      img: "/images/postit.png",
      popTitle: 'Avaliação',
      popContent: 'Compreende o item 8. Avaliação do PPDA.',
    },
    {
      title: "Culminância",
      img: "/images/books.png",
      popTitle: 'Culminância',
      popContent: 'Compreende o item 10. Culminância-Celebração do PPDA.',
    },
    
  ];

  return (
    <div className="gap-2 grid grid-cols-2 md:grid-cols-6 sm:grid-cols-6 px-8 mx-8">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Popover placement="down">
                <PopoverTrigger>
                <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
                />
                </PopoverTrigger>
                <PopoverContent>
                    <div className="px-1 py-2">
                    <div className="text-small font-bold">{item.popTitle}</div>
                    <div className="text-tiny">{item.popContent}</div>
                    </div>
                </PopoverContent>
            </Popover>
            </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
