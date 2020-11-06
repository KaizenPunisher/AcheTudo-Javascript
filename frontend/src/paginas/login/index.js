import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import imagem from '../../imagens/imagem.jpg';
import api from '../../services/api';

export default function Login() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handlerLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });
            
            localStorage.setItem('empresaId', id);
            localStorage.setItem('empresaRazaosocial', response.data.razao_social);

            history.push('/');
        } catch (err){
            alert('Falha no login');
        }
    }

    return (
        <div className="login-conteudo">
            <section className="form">
                <h1>Login</h1>
                <form onSubmit={handlerLogin}>
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} 
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/cadastro">Não tenho cadastro</Link>
                </form>
            </section>
            <img src={imagem} alt="teste" />
        </div>
    );
}