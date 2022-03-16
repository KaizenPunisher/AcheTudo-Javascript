import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/autorizacao';
import './style.css';

import api from '../../services/api';
import logo from "../../imagens/logo.svg";

export default function Login() {
    const { autenticado, login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('sessao', { email, senha });
            
            login(response.data);
            navigate("/paineldecontrole");
        } catch (error){
            alert('Falha no login');
        }
    }

    return (
        <div className="login-conteudo">
            <div className="conteudo">
                <Link to="/">
                        <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </Link>
                <section>
                    <div className='cadastro-titulo'>
                        <h1>ENTRAR</h1>
                        <Link className="back-link" to="/"><div className='voltar'></div>VOLTAR</Link>
                        <h3>--- {String(autenticado)} ---</h3>
                        <div style={{clear: "both"}}></div>
                    </div>
                </section>
                <form onSubmit={handleLogin}>
                    <input 
                        type="text"
                        placeholder="Seu Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)} 
                    />
                    <button className="button" type="submit">ENTRAR</button>
                    <div className="nao-tenho-cadastro">
                        <Link className="link" to="/cadastro">Não tenho cadastro</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}