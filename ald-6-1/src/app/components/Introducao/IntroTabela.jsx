import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";


const rows = [
  {
    key: "1",
    name: "1. O que o dinheiro compra? E o que o dinheiro não compra? 2. Uma visita ao mercado.",
    role: "1. Qual é meu sonho? 2. O que você precisa comprar no mercado? 3. As tentações do mercado... me segura para eu não gastar.",
    status: "I - Diagnóstico. II - Conteúdos e habilidades. III - Planejamento.",
    location: "Sistema de numeração decimal. Operações com números naturais / divisão euclidiana. Propriedades da igualdade. Problemas sobre medidas envolvendo grandezas.",
    department: "Ferramentas Google. Mapa mental. Infográfico.",
  },
];

const columns = [
  {
    key: "name",
    label: "Parte do Quadro Geral",
  },
  {
    key: "role",
    label: "Capítulos do Livro do Estudante",
  },
  {
    key: "status",
    label: "Atividades do Projeto",
  },
  {
    key: "location",
    label: "Matemática e Educação Financeira",
  },
  {
    key: "department",
    label: "Recursos Didáticos",
  },
];

export default function IntroTabela() {
  return (

    <div style={{ maxWidth: "1100px", margin: "0 auto" }} className="py-8">
        <h1 className="font-bold text-2xl md:text-5xl sm:text-3xl text-gray-700 py-4 text-center">Site 1</h1>
        <p className="p-8 mb-4 text-center">Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site:</p>
      
      <Table aria-label="Example table with dynamic content" style={{ fontSize: "1.2rem" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="font-medium text-lg text-white bg-primary">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell style={{ textAlign: "center" }}>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      


    
    </div>
  );
}
