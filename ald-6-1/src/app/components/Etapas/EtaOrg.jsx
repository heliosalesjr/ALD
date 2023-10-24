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
    <div className="flex justify-center">
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} className="font-bold text-lg">
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
  );
}
