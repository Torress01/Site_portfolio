import Head from "next/head";

const Contatos = () => {
  return(
      <>
        <Head>
          <title>Contatos | Vitor</title>
        </Head>
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
            <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1> 
            <ul className="table mx-auto space-y-6 md:space-y-8">
              <li className="md:text-xl">
                <span className="font-bold">E-mail</span>
                <div className="flex gap-1 md:gap-3 items-center">
                  <a href="mailto:vitor.t@ges.inatel.br" className="text-sm md:text-lg text-slate-300 underline truncate">vitor.t@ges.inatel.br</a>
                </div>
              </li>
              <li className="md:text-xl">
                <span className="font-bold">Linkedin</span>
                <div className="flex gap-1 md:gap-3 items-center">
                  <a href="https://www.linkedin.com/in/vitorgonzaga10" className="text-sm md:text-lg text-slate-300 underline truncate">https://www.linkedin.com/in/vitorgonzaga10</a>
                </div> 
              </li>
              <li className="md:text-xl">
                <span className="font-bold">GitHub</span>
                <div className="flex gap-1 md:gap-3 items-center">
                  <a href="https://github.com/Torress01" className="text-sm md:text-lg text-slate-300 underline truncate">https://github.com/Torress01</a>
                </div>
              </li>
            </ul> 
        </div>
    </>
  );   
};

export default Contatos;