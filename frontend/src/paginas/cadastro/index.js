import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import logo from "../../imagens/logo.svg";

export default function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            nome,
            email,
            password
        };
        console.log(data);

        try{
            const response =  await api.post('empresa', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            //history.push("/");
            
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
                        <Link className="back-link" to="/"><div className='voltar'></div>Voltar</Link>
                        <div style={{clear: "both"}}></div>
                    </div>
                </section>
                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />
                    <input 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}  
                    />
                    <input 
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}