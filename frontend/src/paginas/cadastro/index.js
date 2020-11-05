import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Cadastro(){
    return (
        <div className="cadastro-empresa">
            <div className="conteudo">
                <section>
                    <h1>Cadastro</h1>
                    <h3>Cadastre a sua empresa e seja feliz.</h3>
                    <Link className="back-link" to="/">Não tenho cadastro</Link>
                </section>
                <form>
                    <input placeholder="Razão Social" />
                    <input placeholder="Nome Fantasia" />
                    <input placeholder="Nome" />
                    <input placeholder="Cnpj" />
                    <input placeholder="CPF" />
                    <input placeholder="Ogão Publico" />
                    <input placeholder="Horario de Atendimento" />
                    <input placeholder="Descrição" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}