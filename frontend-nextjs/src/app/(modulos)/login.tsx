import BotaoCadastro from "../(componentes)/botoes/cadastro"
import BotaoEntrar from "../(componentes)/botoes/entrar"

export default function Login() {
    return (
        <div className='
            desktop:w-auto
            laptop:w-auto
            tablet:w-auto
            smartphone:w-64
            container h-auto float-right
            border-2 border-yellow-400
            pr-2
        '>
            <BotaoCadastro/>
            <BotaoEntrar/>
        </div>
    )
  }