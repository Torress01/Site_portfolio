import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Vitor</title>
      </Head> 
      <main>
        <h1>Hello world com Next.js</h1>
        <Link href="/contatos">Ir para a página Contatos</Link>
      </main>
    </>
  )
}

export default Home;
