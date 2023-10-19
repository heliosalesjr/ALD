import React, { useState } from "react";

function FAQ() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };

  const faqs = [
    {
      id: 1,
      title: "Livro do Estudante",
      content: "Traz conteúdos do currículo de Matemática ancorados em conceitos de Educação Financeira contextualizados em situações cotidianas vividas pelos estudantes. O professor de matemática também pode convidar educadores de outros componentes curriculares, como Português, Ciências, Geografia, entre outros, para trabalhar de forma interdisciplinar.",
    },
    {
      id: 2,
      title: "Caderno do Educador",
      content: "Contém orientações e ideias para que o educador permita aos jovens trabalhar os conceitos de Educação Financeira ancorados na Matemática e, com a realização de pequenos projetos, desenvolver parte das competências socioemocionais previstas na BNCC. A proposta deste caderno é a implementação do conteúdo pelo educador mediante o emprego de metodologias ativas, em uma sequência de quatro atividades significativas, de acordo com a divisão do Livro do Estudante.",
    },
    {
      id: 3,
      title: "Camada Digital",
      content: "Camada Digital é o ambiente online estruturado dentro do Google Classroom. Nele, você encontrará material de apoio referente à formação e à aplicação do programa. Destacamos que dentro deste material há quatro sites criados para a facilitação da aplicação do programa com sua turma. Neste ambiente, também é possível entrar em contato com o gestor responsável pelas formações.",
    },
  ];

  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 gap-4">
      <div className="md:col-span-1 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-primary font-bold text-center">Materiais do Programa</h1>
        <p className="text-xl font-medium text-center mt-4">
          Saiba mais clicando no nome do material ao lado.
        </p>
      </div>
      <div className="md:col-span-1">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <div
              className="flex justify-between items-center p-2 cursor-pointer bg-gray-100"
              onClick={() => handleAccordionClick(faq.id)}
            >
              <div>{faq.title}</div>
              <div>{openAccordion === faq.id ? "-" : "+"}</div>
            </div>
            {openAccordion === faq.id && (
              <div className="p-4 bg-gray-200">{faq.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
