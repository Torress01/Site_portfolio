import Link from "next/link"

export const Header = () => {
    return(
        <header>
          <Link href="/">
            <img src="/faviconn.svg" alt="icone da letra V, logo de Vitor" />  
          </Link>
          <nav>
            <Link href="/">Sobre mim</Link>
            {/* <Link href="/portfolio">Portfolio</Link> */}
            <Link href="/contatos">Entre em contato</Link> 
          </nav>
        </header>
    )

}