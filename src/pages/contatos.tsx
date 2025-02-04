import Head from "next/head";
import Link from "next/link";

const Contatos = () => {
    return(
        <>
            <Head>
                <title>Contatos | Huriel</title>
            </Head>
            <div>
                <h1>Contatos</h1> 
                <Link href="/">Ir para a pagina inical</Link> 
            </div>
        </>
    )   
}

export default Contatos;