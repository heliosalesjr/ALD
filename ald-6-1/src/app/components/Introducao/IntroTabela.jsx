import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { CgWebsite } from "react-icons/cg";

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
        <h1 className="text-3xl font-bold p-8">Site 1</h1>
        <p className="p-8 mb-4">Vamos ver quais Etapas do Projeto, temas de Matemática e ferramentas didáticas serão tratadas neste site.</p>
      
      <Table aria-label="Example table with dynamic content" style={{ fontSize: "1.2rem" }}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} style={{ fontWeight: "bold", textAlign: "center", fontSize: "14px" }}>
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
      <h1 className="text-3xl font-bold p-8 text-center">Acesso aos sites</h1>
        <div className="flex justify-center space-x-16">
            {[1, 2, 3].map((siteNumber) => (
                <button
                key={siteNumber}
                className="flex items-center justify-center p-4 my-2 mx-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg space-x-1 hover:from-green-500 hover:to-blue-500 transition duration-2000"
                >
                <CgWebsite size={24} className="mr-2" />
                Site {siteNumber}
                </button>
            ))}
        </div>


    
    </div>
  );
}
