import { motion, Variants } from "framer-motion";


function BaixeLivros() {
  return (
    <>
      <motion.section 
      className="bg-gradient-to-tl from-primary to-primary-focus"
      initial={{ opacity: 0 }}
     
      transition={{  ease: "linear",
      duration: 2, }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
              Acesse os livros
            </h2>
            <p className="mb-8">
              A Educação Financeira é um processo contínuo e temos a certeza de que, além de formar os jovens, ela poderá trazer pontos de reflexão instigantes e práticos não apenas para as suas famílias, mas também para os professores. Aproveite!
            </p>
            {/*
              As classes de botões são mantidas conforme o padrão para telas médias e menores
              Os botões permanecerão na mesma linha em telas maiores
            */}
            <div className="flex flex-col sm:flex-row space-y-4 lg:flex lg:flex-row md:space-y-0">
              <a
                href="https://www.flipsnack.com/7E8DB9BBDC9/caderno_educador_6-_ano_/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-customizado btn-outline mx-4"
              >
                Caderno do Educador
              </a>
              <a
                href="https://www.flipsnack.com/7E8DB9BBDC9/livro_ed_financeira_estudante_6-_ano/full-view.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-customizado btn-outline mx-4"
              >
                Livro do Estudante
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="md:w-full" src="images/6o.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 " src="images/6o_educador.png" alt="office content 2" />
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default BaixeLivros;
