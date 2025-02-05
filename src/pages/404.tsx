import { Roboto } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const E404 = () => {
  return (
    <>
      <Head>
        <title>404 | Vitor</title>
      </Head>
      <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 md:gap-16 px-6">
        <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
        <p className="flex flex-col gap-8 md:gap4">
          <span>Oops, não conseguimos encontrar essa página!</span>
          <span>
            Clique no botão abaixo para ser redirecionado à Página Principal
          </span>
        </p>
        <Link
          href="/"
          className={`${roboto.className} p-4 bg-v-blue-500 rounded-xl text-black mt-5 md:mt-12 w-fit `}
        >
          Ir para a Página Incial
        </Link>
      </div>
    </>
  );
};

export default E404;
