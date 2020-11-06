import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Inicio(){
    return (
        <div className="pagina-inicial">
            <div className="conteudo">
                <h1>Empresas</h1><Link className="entrar" to="/login">Login</Link>
                <ul>
                    <li>
                        <strong>Empresas</strong>
                        <p>id</p>
                        <p>razao_social</p>
                        <p>nome_fantasia</p>
                        <p>nome</p>
                        <p>cnpj</p>
                        <p>cpf</p>
                        <p>orgao_publico</p>
                        <p>horario_de_atendimento</p>
                        <p>descricao</p>
                        <button type="button">Apagar</button>
                    </li>
                    <li>
                        <strong>Empresas</strong>
                        <p>id</p>
                        <p>razao_social</p>
                        <p>nome_fantasia</p>
                        <p>nome</p>
                        <p>cnpj</p>
                        <p>cpf</p>
                        <p>orgao_publico</p>
                        <p>horario_de_atendimento</p>
                        <p>descricao</p>
                        <button type="button">Apagar</button>
                    </li>
                    <li>
                        <strong>Empresas</strong>
                        <p>id</p>
                        <p>razao_social</p>
                        <p>nome_fantasia</p>
                        <p>nome</p>
                        <p>cnpj</p>
                        <p>cpf</p>
                        <p>orgao_publico</p>
                        <p>horario_de_atendimento</p>
                        <p>descricao</p>
                        <button type="button">Apagar</button>
                    </li>
                    <li>
                        <strong>Empresas</strong>
                        <p>id</p>
                        <p>razao_social</p>
                        <p>nome_fantasia</p>
                        <p>nome</p>
                        <p>cnpj</p>
                        <p>cpf</p>
                        <p>orgao_publico</p>
                        <p>horario_de_atendimento</p>
                        <p>descricao</p>
                        <button type="button">Apagar</button>
                    </li>
                    <li>
                        <strong>Empresas</strong>
                        <p>id</p>
                        <p>razao_social</p>
                        <p>nome_fantasia</p>
                        <p>nome</p>
                        <p>cnpj</p>
                        <p>cpf</p>
                        <p>orgao_publico</p>
                        <p>horario_de_atendimento</p>
                        <p>descricao</p>
                        <button type="button">Apagar</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}