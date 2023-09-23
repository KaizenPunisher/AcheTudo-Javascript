import Link from 'next/link'
import Image from 'next/image'
import Logo from '../app/(imagens)/logo.png'
import Login from './(modulos)/login'
import Saudacao from './(componentes)/mensagensdosistema/saudacao'

export default function Home() {
  return (
    <main className='
      container mx-auto box-border h-auto h-screen w-auto m-2 border-8 border-white rounded-3xl
      bg-gradient-to-b from-cyan-100 to-cyan-600 shadow-md shadow-gray-700
      flex justify-center
    '>
      <div className='
        container mx-auto h-min
        border-3 border-blue-500
      '>
        <div className='
          desktop:w-5/12 desktop:float-left
          laptop:w-5/12 laptop:float-left
          tablet:w-5/12 tablet:float-left
          smartphone:w- smartphone:float-right
          container h-auto pt-2 pr-7 pl-5
          border-2 border-black
        '>
          <h2 className='
            desktop:text-xl
            laptop:text-xl
            tablet:text-xl
            smartphone:text-xl
            text-left font-bold float-right
          '>Centro Comercial Cidade Tiradentes
          </h2>
        </div>
        <Link href="/" className='
          container w-auto h-auto mt-2 float-left
          border-10 border-black
        '>
          <Image alt="Ache Tudo Logo" src={Logo} width={80} className='
            desktop:m-auto
            laptop:m-auto
            tablet:m-auto
            smartphone:ml-28
            border-2 border-black
          '/>
        </Link>
        <Login/>
        <Saudacao/>
        <div className='
          desktop:
          laptop:
          tablet:
          smartphone:
          inline-grid w-auto h-11 p-0 clear-both
          font-botoes
        '>
          <ul className='
            desktop:
            laptop:
            tablet:
            smartphone:
            grid grid-cols-2 h-auto text-center
          '>
            <li className='
              desktop:w-98
              laptop:w-97
              tablet:w-96
              smartphone:w-40
              bg-white pl-2 pt-2
            '>SERVIÇOS PUBLICOS</li>
            <li className='
              desktop:w-98
              laptop:w-97
              tablet:w-96
              smartphone:w-40
              bg-white pl-2 pt-2
            '>COMÉRCIO</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
