import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { cadastrarUsuario } from '../../services/api';

import './style.css';
import './mobile.css';
import logo from "../../imagens/logo.png";

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            nome,
            email,
            senha
        };
        
        if(nome==='') {
            document.getElementById("nome").focus();
            document.getElementById("nome").placeholder = "Digite seu Nome !";
        }
        else if(email==='') {
            document.getElementById("email").focus();
            document.getElementById("email").placeholder = "Digite seu Email !";
        }
        else if(senha==='') {
            document.getElementById("senha").focus();
            document.getElementById("senha").placeholder = "Digite sua senha !";
        } 
        else {
            try{
                const response =  await cadastrarUsuario(data);
                //console.log(data);
                const email = JSON.stringify(data.email);
                sessionStorage.setItem('email', email);

                //alert(`Seu ID de acesso: ${response.data.id}`);
                navigate("/ativaremail");
                
            } catch(error){
                if(error.code==="ERR_NETWORK"){
                    window.location.href = "#cadastro-aviso";
                    document.getElementById("aviso").innerText = "Serviço OFFLINE";
                }
                console.log(error)
            }
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
                        
                        <h1>Cadastro</h1>
                        <div className="clear"></div>
                    </div>
                </section>
                <form onSubmit={handleCadastro}>
                    <input 
                        type="text"
                        id="nome"
                        placeholder="NOME"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />
                    <input 
                        type="text"
                        id="email"
                        placeholder="EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <input 
                        type="password"
                        id="senha"
                        placeholder="SENHA"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button className="button" type="submit">CADASTRAR</button>
                </form>

                <div className="cadastro-aviso" id="cadastro-aviso">
                    <a href="#page" className="fechar">x Fechar</a>
                    <div id="aviso"></div>
				</div>
            </div>
        </div>
    );
}