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
      <header className='
        container mx-auto h-min
        border-3 border-blue-500
      '>
        <div className='
          container w-5/12 h-auto pt-2 pr-7 float-left
          border-2 border-black
        '>
          <h2 className='
            text-xl text-right font-bold float-right
          '>Centro Comercial<br/>Cidade Tiradentes</h2>
        </div>
        <Link href="/" className='
          container w-auto h-auto mt-2 float-left
          border-10 border-black
        '>
          <Image alt="Ache Tudo Logo" src={Logo} width={80} className='
            border-2 border-black
          '/>
        </Link>
        <Login/>
        <Saudacao/>
      </header>
    </main>
  )
}
