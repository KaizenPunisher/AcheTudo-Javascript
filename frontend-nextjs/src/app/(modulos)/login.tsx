import BotaoCadastro from "../(componentes)/botoes/cadastro"
import BotaoEntrar from "../(componentes)/botoes/entrar"

export default function Login() {
    return (
        <div className='
            container w-2/5 w-auto h-auto float-left
            border-2 border-yellow-400
        '>
            <BotaoCadastro/><BotaoEntrar/>
        </div>
    )
  }