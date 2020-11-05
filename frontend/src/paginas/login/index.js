import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import teste from '../../imagens/imagem.jpg';

export default function Login() {
    return (
        <div className="login-conteudo">
            <section className="form">
                <h1>Login</h1>
                <form>
                    <input placeholder="Sua ID"/>
                        <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/cadastro">Não tenho cadastro</Link>
                </form>
            </section>
            <img src={teste} alt="teste" />
        </div>
    );
}