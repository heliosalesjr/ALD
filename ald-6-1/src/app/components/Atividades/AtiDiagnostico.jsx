import React from "react";

const AtiDiagnostico = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:mr-4 text-center md:text-left">
                    <h1 className="text-3xl font-bold pb-4">Diagnóstico</h1>
                    <h1 className="text-2xl font-semibold pb-2">Diagnósticos para o professor</h1>
                    <p className="pb-4">
                    Talvez você já conheça bem a sua turma. Mesmo assim, o diagnóstico aqui sugerido poderá trazer indicadores importantes para traçar o perfil dos estudantes com mais segurança.
                    </p>
                </div>
                <div className="my-4 md:my-0 text-center">
                    <img
                    src="/images/books.png"
                    alt="Livros"
                    className="max-w-1/3"
                    />
                </div>
            </div>

            {/* Segunda div */}
            <div className="mt-8">
                <h1 className="text-2xl font-semibold pb-2">Diagnóstico 1: Perfil da turma</h1>
                <p>
                Determinar o perfil da turma é um momento precioso, no qual o educador mapeia os interesses, os talentos e os desejos dos estudantes. Trata-se de parte importante do processo de criação de atividades que despertem o engajamento desses jovens, assim como da seleção de materiais para subsidiar o trabalho docente. Quando se discute, em sala de aula, algo que tem relação com a realidade, o interesse do estudante pela aprendizagem aumenta e ela se torna mais significativa.
                </p>
                <h1 className="text-xl font-semibold my-2">Você pode pesquisar questões como:</h1>
                <ul className="list-disc pl-4">
                <li>Idade: qual a idade de cada um? Qual a média de idade dos jovens daquela turma?</li>
                <li>Atividades fora da escola: há jovens que trabalham? São empregados ou exercem algum tipo de atividade eventual remunerada? Ajudam em casa? Namoram? Praticam esportes? Estudam música, dançam ou se dedicam a algum outro tipo de atividade artística?</li>
                <li>Interesses: quais os interesses de cada um? Eles já pensaram em projetos de vida, têm sonhos que querem conquistar ou desafios que querem superar?</li>
                <li>Atitudes e valores: que valores norteiam as escolhas desses jovens? O que eles consideram importante na vida? Quem são as pessoas que admiram e por quê?</li>
                </ul>
            </div>
            </div>
        );
};

export default AtiDiagnostico;
