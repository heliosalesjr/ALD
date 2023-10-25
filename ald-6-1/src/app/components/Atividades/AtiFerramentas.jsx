import React from "react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";

function AtiFerramentas() {
  return (
    <div className="max-w-[900px] mx-auto grid gap-8 grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Realidade e desejo</h4>
        </CardHeader>
        <Image
          src="/images/mock.png"
          alt="Livros"
          className="z-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 space-x-2 flex">
          <Button className="glass bg-blue-500 text-white">Ferramenta</Button>
          <Button className="glass bg-green-500 text-white">Modelo</Button>
        </div>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Me agrada, me incomoda</h4>
        </CardHeader>
        <Image
          src="/images/books.png"
          alt="Livros"
          className="z-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 space-x-2 flex">
          <Button className="glass bg-blue-500 text-white">Ferramenta</Button>
          <Button className="glass bg-green-500 text-white">Modelo</Button>
        </div>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px] relative">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            Jogo de perguntas e respostas
          </h4>
        </CardHeader>
        <Image
          src="/images/books.png"
          alt="Livros"
          className="z-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 space-x-2 flex">
          <Button className="glass bg-blue-500 text-white">Ferramenta</Button>
          <Button className="glass bg-green-500 text-white">Modelo</Button>
        </div>
      </Card>
    </div>
  );
}

export default AtiFerramentas;
