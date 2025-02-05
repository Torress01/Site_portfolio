import { AboutMe } from "@/components/Home/AboutMe";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Vitor</title>
        <meta
          name="description"
          content="Sou um Estudante de engenharia de software apaixonado em aprender"
        />
      </Head>
      <main>
        <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
          <AboutMe />
        </div>
      </main>
    </>
  );
};

export default Home;
