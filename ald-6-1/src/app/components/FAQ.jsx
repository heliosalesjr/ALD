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
      title: "What is Material Tailwind?",
      content: "Material Tailwind is a framework for building web applications...",
    },
    {
      id: 2,
      title: "How to use Material Tailwind?",
      content: "Using Material Tailwind is easy. You can include it in your project...",
    },
    {
      id: 3,
      title: "What can I do with Material Tailwind?",
      content: "With Material Tailwind, you can create modern and responsive web applications...",
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
