import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import { AuthContext } from '../../contexts/autorizacao';

import imagem from '../../imagens/imagem.jpg';
import logo from "../../imagens/logo.svg";

export default function Inicio(){
    const { logout } = useContext(AuthContext);

    const [empresas, setEmpresas] = useState([]);

    const empresaId = localStorage.getItem('empresaId');
    const empresaRazaosocial = localStorage.getItem('empresaRazaosocial');

    useEffect(() => {
        api.get('empresa').then(response => {
            setEmpresas(response.data);
        })
    });
    /*
    async function handleDeletarEmpresas(id){
        try {
            await api.delete(`empresa/${id}`, {
                headers: {
                    Authorization: empresaId,
                }
            });
        } catch (err) {
            alert('erro ao deletar');
        }
    }
    */
    const handleLogout = () => {
        logout();
    }

    return (
        <div className="principal">
            <div className="topo">
                <div className="area-usuario">
                    <Link className="entrar" to="/login">ENTRAR</Link>
                    <Link className="cadastro" to="/cadastro">CADASTRO</Link>
                    
                    <button className="sair" onClick={handleLogout} to="/" type="button">Logout</button>
                    <h3 className="saudacao">Bem vindo, {empresaRazaosocial}</h3>
                </div>
                <div className="titulo-local"><h3>Centro Comercial Cidade Tiradentes</h3></div>
                <Link to="/">
                    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </Link>
                <div className="menu">
                    <ul>
                        <li>SERVIÇOS PUBLICOS</li>
                        <li>COMÉRCIO</li>
                    </ul>
                </div>
            </div>
            <div className="conteudo">
                <ul>
                    {empresas.map(empresa => (
                        <li key={empresa.id}>
                            <a href="#image">
                                <img src={imagem} alt="teste" />
                                <header><p>{empresa.id}</p></header>
                                <section>
                                <p>{empresa.nome_fantasia}</p>
                                </section>
                            </a>
                            <div className="vitrine" id="image">
                                <a href="#page" className="fechar">x Fechar</a>
                                <img src={imagem} alt="image01" />
                                <div>
                                    <h3>pointe /point/</h3>
                                    <h4 className="descricao">Dance performed on the tips of the toes</h4>
                                </div>
						    </div>
                            {/* <button type="button" onClick={() => handleDeletarEmpresas(empresa.id)}>Apagar</button> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}