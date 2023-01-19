import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ativarEmail } from '../../services/api';

import './style.css';
import './mobile.css';
import logo from "../../imagens/logo.png";

export default function Ativar(){
    const [email, setEmail]            = useState(JSON.parse(sessionStorage.getItem('email')));
    const [email_token, setEmailToken] = useState('');
    
    const navigate = useNavigate();

    async function handleAtivar(e){
        e.preventDefault();
       
        const data = {
            email,
            email_token
        };
        //console.log(data)
        try{
            const response =  await ativarEmail(data);
            alert(JSON.stringify(response.data.mensagem));
            //alert(`Mensagem: ${response}`);
            navigate("/login");
        } catch(error){
            if(error.code==="ERR_NETWORK"){
                window.location.href = "#cadastro-aviso";
                document.getElementById("aviso").innerText = "Serviço OFFLINE";
            }
            console.log(error)
        }
    }

    return (
        <div className="cadastro-usuario">
            <div className="conteudo">
                <Link to="/">
                    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </Link>
                <section>
                    <div className='cadastro-titulo'>
                        <div className="voltar">
                            <Link className="back-link" to="/">
                                <div className='seta-voltar'></div>VOLTAR
                            </Link>
                        </div>
                        
                        <h1>Digite o código enviado para o seu email</h1>
                        <div className="clear"></div>
                    </div>
                </section>
                <form onSubmit={handleAtivar}>
                    <input 
                        type="text"
                        id="email"
                        placeholder="CÓDIGO"
                        value={email_token}
                        onChange={e => setEmailToken(e.target.value)}  
                    />
                    <button className="button" type="submit">ENVIAR</button>
                </form>

                <div className="cadastro-aviso" id="cadastro-aviso">
                    <a href="#page" className="fechar">x Fechar</a>
                    <div id="aviso"></div>
				</div>
            </div>
        </div>
    );
}