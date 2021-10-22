import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../services/api';

export default function Cadastro(){
    const [razao_social, setRazaosocial] = useState('');
    const [nome_fantasia, setNomefantasia] = useState('');
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [orgao_publico, setOrgaopublico] = useState('');
    const [horario_de_atendimento, setHorariodeatendimento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [servico_id, setServicoId] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [regiao, setRegiao] = useState('');
    const [uf, setUf] = useState('');
    const [descricao_endereco, setDescricao_endereco] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            razao_social, 
            nome_fantasia, 
            nome, 
            cnpj, 
            cpf, 
            orgao_publico, 
            horario_de_atendimento, 
            descricao,
            servico_id,
            logradouro,
            cep,
            bairro,
            cidade,
            regiao,
            uf,
            descricao_endereco
        };
        console.log(data);

        try{
            //const response =  await api.post('empresa', data);
            //alert(`Seu ID de acesso: ${response.data.id}`);
            //history.push("/");
            
        } catch(erro){
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
                        value={razao_social}
                        onChange={e => setRazaosocial(e.target.value)} 
                    />
                    <input 
                        placeholder="Nome Fantasia"
                        value={nome_fantasia}
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
                        value={orgao_publico}
                        onChange={e => setOrgaopublico(e.target.value)}  
                    />
                    <input 
                        placeholder="Horario de Atendimento"
                        value={horario_de_atendimento}
                        onChange={e => setHorariodeatendimento(e.target.value)} 
                    />
                    <input 
                        placeholder="Descrição"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)} 
                    />
                    <select name={servico_id} onChange={e => setServicoId(e.target.value)}>
                        <option value="1">Restaurante</option>
                        <option value="2">Padaria</option>
                        <option value="3">Nenhum</option>
                    </select>
                    <input 
                        placeholder="Logradouro"
                        value={logradouro}
                        onChange={e => setLogradouro(e.target.value)} 
                    />
                    <input 
                        placeholder="Cep"
                        value={cep}
                        onChange={e => setCep(e.target.value)} 
                    />
                    <input 
                        placeholder="Bairro"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)} 
                    />
                    <input 
                        placeholder="Cidade"
                        value={cidade}
                        onChange={e => setCidade(e.target.value)} 
                    />
                    <input 
                        placeholder="Região"
                        value={regiao}
                        onChange={e => setRegiao(e.target.value)} 
                    />
                    <input 
                        placeholder="UF"
                        value={uf}
                        onChange={e => setUf(e.target.value)} 
                    />
                    <input 
                        placeholder="Descrição do Endereço"
                        value={descricao_endereco}
                        onChange={e => setDescricao_endereco(e.target.value)} 
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}