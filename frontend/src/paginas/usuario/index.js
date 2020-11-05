import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Usuario(){
    return(
        <div className="usuario">
            <header>
                <h1>Cadastrar Telefone</h1>
            </header>
            <div className="conteudo">
                <Link className="button" to="/usuario/cadastrartelefone">Cadastrar Telefone</Link>
            </div>
            <button className="button">Sair</button>
        </div>
    );
}