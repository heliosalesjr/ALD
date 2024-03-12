import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(1);

  return (
    <section className="p-4 bg-slate-100">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        <Panel1 open={open} setOpen={setOpen} />
        <Panel2 open={open} setOpen={setOpen} />
        <Panel3 open={open} setOpen={setOpen} />
        <Panel4 open={open} setOpen={setOpen} />
      </div>
    </section>
  );
};

const Panel1 = ({ open, setOpen }) => {
  const { width } = useWindowSize();
  const isOpen = open === 1;

  return (
    <>
        
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(1)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl rotate-180"
        >
          Aprendizagem Baseada em Projetos
        </span>
        <span className="block lg:hidden text-xl">Aprendizagem Baseada em Projetos</span>
        <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
          <FiDollarSign />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-1`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(images/learns.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>É uma metodologia ativa que contribui para que os jovens se engajem em tarefas e/ou desafios a fim de resolver um problema ou desenvolver um projeto que também tenha relação com sua vida fora da sala de aula. Para desenvolver o projeto, eles precisam lidar com questões interdisciplinares, tomar decisões e agir como protagonistas, trabalhando em equipe.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Panel2 = ({ open, setOpen }) => {
  const { width } = useWindowSize();
  const isOpen = open === 2;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(2)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl rotate-180"
        >
          Metodologias Ativas
        </span>
        <span className="block lg:hidden text-xl">Metodologias Ativas</span>
        <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
          <FiPlay />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-2`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(images/doguin.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>São uma série de técnicas, procedimentos e processos com a finalidade de auxiliar a aprendizagem dos estudantes. São ativas porque pressupõem a realização de atividades práticas que estimulam o protagonismo dos jovens. Por meio delas, são trabalhadas competências especialmente necessárias para o século 21, como o pensamento crítico e a consciência de que há várias maneiras de realizar uma tarefa ou superar um desafio.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Panel3 = ({ open, setOpen }) => {
  const { width } = useWindowSize();
  const isOpen = open === 3;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(3)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl rotate-180"
        >
          Mapa de Conteúdos de Matemática
        </span>
        <span className="block lg:hidden text-xl">Mapa de Conteúdos de Matemática</span>
        <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
          <FiBell />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-3`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(images/postit.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p><a
                    href="https://docs.google.com/spreadsheets/d/1DFJAnY_SmwUOelCjAFSarbtot7P0ehB0BptqqehtM30/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-blue-200"
                >
                    Clicando aqui
                </a>{''}, você pode acessar o mapa que mostra os conteúdos básicos de Matemática previstos na BNCC para o Ensino Básico. Interligamos as partes que apresentam interdependência e destacamos os tópicos que se referem à Educação Financeira. Os conteúdos de anos anteriores devem ser revisitados caso ainda suscitem dúvidas entre os educandos.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Panel4 = ({ open, setOpen }) => {
  const { width } = useWindowSize();
  const isOpen = open === 4;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(4)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl rotate-180"
        >
          Quadro Geral
        </span>
        <span className="block lg:hidden text-xl">Quadro Geral</span>
        <div className="w-6 lg:w-full aspect-square bg-primary text-white grid place-items-center">
          <FiBarChart />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-4`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(images/piggy.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>Neste quadro, estão organizados os conteúdos de Matemática e Educação Financeira tratados no Livro do Estudante e as competências específicas da BNCC.
              {" "}
                <a
                    href="https://docs.google.com/spreadsheets/d/1DFJAnY_SmwUOelCjAFSarbtot7P0ehB0BptqqehtM30/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-blue-200"
                >
                    Acesse aqui
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
