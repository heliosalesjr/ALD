import React from "react";
import ReactPlayer from "react-player";

function MatPropriedades() {
    return (
        <div className="container my-24 mx-auto md:px-6">
          {/* Section: Design Block */}
          <section className="bg-gradient-to-tl from-primary to-primary-focus mb-32">
            <div className="px-6 py-6 text-center md:px-12 lg:text-left">
              <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                  <div className="mt-12 lg:mt-0">
                    <h1 className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-4xl">
                      Propriedades da igualdade
                    </h1>
                    <p className="text-lg text-white">
                      O que significa o sinal de igualdade? Igual em matemática é o mesmo que igual no meu dia a dia? O que pode e o que não pode quando temos o sinal de igual em uma expressão numérica. Esses questionamentos podem ser trazidos pelos alunos e o vídeo do canal Cariacica tenta trazer essas informações de forma bem lúdica.
                    </p>
                  </div>
                  <div className="mb-12 lg:mb-0">
                    <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                      >
                      <ReactPlayer url='https://youtu.be/E9bYl58e6DU' width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
      );
    }

export default MatPropriedades;
