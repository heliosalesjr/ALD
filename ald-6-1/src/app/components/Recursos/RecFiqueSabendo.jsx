'use client'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function RecFiqueSabendo() {
  return (
    <>
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-screen-xl p-4">
            <Accordion variant='bordered'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Mapa Conceitual">
                <p>O Mapa Conceitual é um organizador gráfico, no qual se representam visualmente as relações entre conceitos e/ou ideias, estruturados hierarquicamente e conectados por meio de um verbo de ligação.</p>
                </AccordionItem>
            </Accordion>
            <Accordion variant='bordered'>
                <AccordionItem key="2" aria-label="Accordion 2" title="Mapa Mental">
                <p>O Mapa Mental organiza conceitos e/ou ideias, os quais se ramificam na forma de galhos, adquirindo a configuração de uma “árvore do conhecimento”. Por ter uma estrutura flexível, é possível acrescentar outros elementos, como desenhos, imagens e vídeos.</p>
                </AccordionItem>
            </Accordion>
        </div>

    </>
  )
}

export default RecFiqueSabendo