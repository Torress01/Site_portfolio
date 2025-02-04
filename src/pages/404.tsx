import Head from "next/head";
import Link from "next/link";

const E404 = () => {
    return(
        <>
        <Head>
            <title>404 | Huriel</title>
        </Head>
        <div>
            <h1>404</h1>
            <div>
                <p>Oops, não conseguimos encontrar essa página!</p>
                <span>Clique no botão abaixo para voltar pra Home</span>
            </div>
            <Link href="/">Ir para a Página Incial</Link> 
        </div>
        </>
    )
}

export default E404;