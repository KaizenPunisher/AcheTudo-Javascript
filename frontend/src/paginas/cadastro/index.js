import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import logo from "../../imagens/logo.svg";

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            nome,
            email,
            password
        };

        try{
            const response =  await api.post('usuario', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            
            
        } catch(erro){
            alert('Erro no cadastro');
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
                        <h1>Cadastro</h1>
                        <Link className="back-link" to="/"><div className='voltar'></div>VOLTAR</Link>
                        <div style={{clear: "both"}}></div>
                    </div>
                </section>
                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="NOME"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />
                    <input 
                        placeholder="EMAIL"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <input 
                        placeholder="SENHA"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">CADASTRAR</button>
                </form>
            </div>
        </div>
    );
}