import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

export default function Cadastro(){
    const [razaosocial, setRazaosocial] = useState('');
    const [nomefantasia, setNomefantasia] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [orgaopublico, setOrgaopublico] = useState('');
    const [horariodeatendimento, setHorariodeatendimento] = useState('');
    const [descricao, setDescricao] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e){
        e.preventDefault();

        const data = {
            razaosocial,
            nomefantasia,
            nome,
            cnpj,
            cpf,
            orgaopublico,
            horariodeatendimento,
            descricao,
        };

        try{
            const response =  await api.post('empresa', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push("/");
        } catch(err){
            alert('Erro no cadastro');
        }
        
    }

    return (
        <div className="cadastro-empresa">
            <div className="conteudo">
                <section>
                    <h1>Cadastro</h1>
                    <h3>Cadastre a sua empresa e seja feliz.</h3>
                    <Link className="back-link" to="/">Inicio</Link>
                </section>
                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Razão Social"
                        value={razaosocial}
                        onChange={e => setRazaosocial(e.target.value)} 
                    />
                    <input 
                        placeholder="Nome Fantasia"
                        value={nomefantasia}
                        onChange={e => setNomefantasia(e.target.value)}  
                    />
                    <input 
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />
                    <input 
                        placeholder="Cnpj"
                        value={cnpj}
                        onChange={e => setCnpj(e.target.value)}  
                    />
                    <input 
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)} 
                    />
                    <input 
                        placeholder="Orgão Publico"
                        value={orgaopublico}
                        onChange={e => setOrgaopublico(e.target.value)}  
                    />
                    <input 
                        placeholder="Horario de Atendimento"
                        value={horariodeatendimento}
                        onChange={e => setHorariodeatendimento(e.target.value)} 
                    />
                    <input 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}