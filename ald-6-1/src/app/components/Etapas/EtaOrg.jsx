'use client'
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Site 1",
    role: "1 e 2",
    status: "I - Diagnóstico; II - Conteúdos e habilidades",
  },
  {
    key: "2",
    name: "Site 2",
    role: "3",
    status: "III - Planejamento; IV - Atividades",
  },
  {
    key: "3",
    name: "Site 3",
    role: "4",
    status: "V - Avaliação",
  },
  {
    key: "4",
    name: "Site 4",
    role: "5",
    status: "VI - Conclusão / Culminância",
  },
];

const columns = [
  {
    key: "name",
    label: "Nomenclatura dos Sites",
  },
  {
    key: "role",
    label: "Parte do Quadro Geral",
  },
  {
    key: "status",
    label: "Etapa de desenvolvimento do projeto estudada",
  },
];

export default function EtaOrg() {
  return (

    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mt-8">Como este material está organizado dentro dos sites</h1>
        <p className="text-lg mt-4 py-4">Para auxiliar na visualização da divisão das ações, criamos a tabela abaixo que organiza o conteúdo de cada site em relação às etapas de elaboração de um PPDA.  </p>
      </div>
      <div className="flex justify-center">
        <div style={{ maxWidth: "1000px", width: "100%" }}>
          <Table aria-label="Nomenclatura dos Sites">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key} className="font-bold text-lg text-white bg-primary">
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={rows}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => (
                    <TableCell className={columnKey === "status" ? "w-2/3" : ""}>
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <p className="text-lg mt-4 py-4">Para conhecer melhor a divisão de atividades proposta pelo Caderno do Educador,  você pode rever o Quadro Geral (disponível aqui).</p>

    </>
    
  );
}
