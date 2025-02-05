import { Roboto } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const roboto =  Roboto({
  subsets: ['latin'],
  weight: '500',
});

export const AboutMe = () => {
  return(
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          Prazer, sou&nbsp;
          <strong className="font-bold ">Vitor</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Sou um Estudante de engenharia de software apaixonado em aprender
          </h2>
          <Link href="/contatos" className="p-3 bg-v-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse Comigo!</Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li style={{backgroundColor: '#2F74C0', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">typescript</li>
          <li style={{backgroundColor: '#6BDDFA', color: '#000000'}} className="w-fit p-2 rounded-md">React</li>
          <li style={{backgroundColor: '#EFD81D', color: '#000000'}} className="w-fit p-2 rounded-md">JavaScript</li>
          <li style={{backgroundColor: '#000000', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Next.js</li>
        </ul>
      </div>
      <div className="relative">
        <Image 
        src="https://avatars.githubusercontent.com/u/110953246?v=4" 
        alt="Minha foto"
        width={500}
        height={500} 
        unoptimized
        className="rounded-full"
        />
        <p className="p-4 w-fit text-base leading-tight bg-v-blue-500 rounded-xl text-black absolute -bottom-[0.75rem]">
        <span>
          Procurando estágio
        </span>
        </p>
      </div>
    </main>
  )
}