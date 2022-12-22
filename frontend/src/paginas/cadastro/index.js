import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//import { cadastrarUsuario } from '../../services/api';

import './style.css';
import './mobile.css';
import logo from "../../imagens/logo.png";

export default function Cadastro(){
    /*
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

        try{
            const response =  await cadastrarUsuario(data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            
            navigate("/");
            
        } catch(erro){
            alert('Erro no cadastro');
        }
        
    }
    */
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
                <form > 
                    {/* onSubmit={handleCadastro} */} 
                    {/* value={nome} onChange={e => setNome(e.target.value)}  */} 
                    {/* value={email} onChange={e => setEmail(e.target.value)} */} 
                    {/* value={senha} onChange={e => setSenha(e.target.value)} */}
                    <input 
                        placeholder="NOME"
                        
                        
                    />
                    <input 
                        placeholder="EMAIL"
                        
                          
                    />
                    <input 
                        type="password"
                        placeholder="SENHA"
                        
                        
                    />
                    <button className="button" type="submit">CADASTRAR</button>
                </form>
            </div>
        </div>
    );
}