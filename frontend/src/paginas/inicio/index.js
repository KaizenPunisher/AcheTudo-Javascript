import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { listarAnuncios } from '../../services/api';
import { AuthContext } from '../../contexts/autorizacao';

import imagem from '../../imagens/imagem.jpg';
import logo from "../../imagens/logo.svg";

export default function Inicio(){
    const { logout } = useContext(AuthContext);
    const [nome, setNome] = useState();
    const [empresas, setEmpresas] = useState([]);
    const [count, setCount] = useState(0);

    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    useEffect(() => {
        if(count<5){
            listarAnuncios().then(response => {
                setEmpresas(response.data);
            });
            setCount(count+1);
        };

        if(usuario !== null){
            setNome(usuario.nome)

            document.getElementById("saudacao").style.display = "block";
            document.getElementById("fazeranuncio").style.display = "block";
            document.getElementById("sair").style.display = "block";
            document.getElementById("cadastro").style.display = "none";
            document.getElementById("entrar").style.display = "none";
        };
        
    }, [count]);
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
                    <Link className="entrar" id='entrar' to="/login">ENTRAR</Link>
                    <Link className="cadastro" id='cadastro' to="/cadastro">CADASTRO</Link>
                    <button className="sair" id='sair' onClick={handleLogout} to="/" type="button">SAIR</button>
                    <div className='clear'></div>
                    <h3 className="saudacao" id='saudacao'>Bem vindo, {nome}</h3>
                    <Link className="fazeranuncio" id='fazeranuncio' to="/paineldecontrole">ANUNCIO</Link>
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
                            <a href={`#image${empresa.id}`}>
                                <img src={empresa.url} alt="teste" />
                                <header><p className='titulo'>{empresa.nome_fantasia}</p></header>
                                <section>
                                </section>
                            </a>
                            <div className="vitrine" id={`image${empresa.id}`}>
                                <a href="#page" className="fechar">x Fechar</a>
                                <img src={empresa.url} alt="image01" />
                                <div className='informacao'>
                                    <h2>{empresa.nome_fantasia}</h2>
                                    <div className='descricao'>{empresa.descricao}</div>
                                    <div className='logradouro'>Endereço - {empresa.logradouro}</div>
                                    <div className='endereco_descricao'>Próximo ao - {empresa.endereco_descricao}</div>
                                    <div className='numero'>Telefone: {empresa.ddd} | {empresa.numero} | {empresa.descricao_telefone}</div>
                                    <h3>Horario: {empresa.horario_de_atendimento}</h3>
                                    <div className='clear'></div>
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