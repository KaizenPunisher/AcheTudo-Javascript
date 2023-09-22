import BotaoCadastro from "../(componentes)/botoes/cadastro"
import BotaoEntrar from "../(componentes)/botoes/entrar"

export default function Login() {
    return (
        <div className='
            container w-auto h-auto float-right
            border-2 border-yellow-400
            pr-2
            
        '>
            <BotaoCadastro/>
            <br/>
            <BotaoEntrar/>
        </div>
    )
  }