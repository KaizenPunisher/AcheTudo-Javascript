import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

export default function Inicio(){
    const [empresas, setEmpresas] = useState([]);

    const empresaId = localStorage.getItem('empresaId');
    const empresaRazaosocial = localStorage.getItem('empresaRazaosocial');

    useEffect(() => {
        api.get('/empresa', {
            headers: {
                Authorization: empresaId,
            }
        }).then(response => {
            setEmpresas(response.data);
        })
    }, [empresaId]);

    async function handleDeletarEmpresas(id){
        try {
            await api.delete('empresas/${id}', {
                headers: {
                    Authorization: empresaId,
                }
            });
        } catch (err) {
            alert('erro ao deletar');
        }
    }

    return (
        <div className="pagina-inicial">
            <div className="conteudo">
                <header><h3>Bem vindo, {empresaRazaosocial}</h3></header>
                <h1>Empresas</h1><Link className="entrar" to="/login">Login</Link>
                <ul>
                    {empresas.map(empresa => (
                        <li key={empresa.id}>
                            <strong>Empresas</strong>
                            <p>{empresa.id}</p>
                            <p>{empresa.razao_social}</p>
                            <p>{empresa.nome_fantasia}</p>
                            <p>{empresa.nome}</p>
                            <p>{empresa.cnpj}</p>
                            <p>{empresa.ddd}</p>
                            <p>{empresa.numero}</p>
                            <p>{empresa.tipo}</p>
                            <p>{empresa.descricao}</p>
                            <button type="button" onClick={() => handleDeletarEmpresas(empresa.id)}>Apagar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}