import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { api, cadastrarEmpresa } from '../../services/api';
import logo from "../../imagens/logo.svg";

export default function Cadastro(){
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState([]);

    const [razao_social, setRazaoSocial] = useState('');
    const [nome_fantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cpf, setCpf] = useState('');
    const [setor, setSetor] = useState('');
    const [horario_de_atendimento, setHorarioDeAtendimento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [redes_sociais, setRedesSociais] = useState('');
    const [servico_id, setServicoId] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [regiao, setRegiao] = useState('');
    const [uf, setUf] = useState('');
    const [descricao_endereco, setDescricaoEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [ddd, setDdd] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao_telefone, setDescricaoTelefone] = useState('');

    //const history = useHistory();
    
    useEffect(() => {
        async function encontrarEmpresa(){
            const usuario = await JSON.parse(localStorage.getItem('usuario'));
            const token = await localStorage.getItem('token');
            if(usuario !== null){
                setId(usuario.id);
                setNome(usuario.nome);
                
            };
            await api.get(`paineldecontrole/${id}`).then(response => {
                setEmpresa(response);
            });
        };
        encontrarEmpresa();
    });
    console.log(empresa);

    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            razao_social,
            nome_fantasia,
            cnpj,
            cpf,
            setor,
            horario_de_atendimento,
            descricao,
            redes_sociais,
            servico_id,
            logradouro,
            cep,
            bairro,
            cidade,
            regiao,
            uf,
            descricao_endereco,
            numero,
            ddd,
            tipo,
            descricao_telefone
        };

        try{
            console.log(data);
            const response =  await cadastrarEmpresa(data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            //history.push("/");
            
        } catch(erro){
            alert('Erro no cadastro');
        }
        
    }

    return (
        <div className="painel-de-controle">
            <div className="conteudo">
                <Link to="/">
                    <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
                </Link>
                <section>
                    <div className='painel-de-controle-titulo'>
                        <h3>Painel de Controle</h3>
                        <div className="voltar">
                            <Link className="back-link" to="/">
                                <div className='seta-voltar'></div>VOLTAR
                            </Link>
                        </div>
                        <div style={{clear: "both"}}></div>
                    </div>
                </section>
                <div className='painel-de-controle-configuracoes'>
                    <div className='painel-de-controle-nome-usuario'>
                        <h4>{nome}</h4>
                    </div>
                    <div className="painel-de-controle-dados">
                        <h3>Dados</h3>
                        <form onSubmit={handleCadastro}>
                            <div className="dados">
                                <label>Razão Social</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={razao_social}
                                    onChange={e => setRazaoSocial(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Nome Fantasia</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={nome_fantasia}
                                    onChange={e => setNomeFantasia(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CNPJ</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={cnpj}
                                    onChange={e => setCnpj(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CPF</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={cpf}
                                    onChange={e => setCpf(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Setor</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={setor}
                                    onChange={e => setSetor(e.target.value)}
                                    >
                                    <option>Escolha uma opção</option>
                                    <option value="Padaria">Privado</option>
                                    <option value="ONG">ONG</option>
                                    <option value="ONG">Autonomo</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Horario de<br/>atendimento</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={horario_de_atendimento}
                                    onChange={e => setHorarioDeAtendimento(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Descrição da<br/>empresa</label>
                                <textarea
                                    placeholder="Nome de registro"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Rede Sociais</label>
                                <textarea
                                    placeholder="Nome de registro"
                                    value={redes_sociais}
                                    onChange={e => setRedesSociais(e.target.value)} 
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Empreendimento</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={servico_id}
                                    onChange={e => setServicoId(e.target.value)}
                                    >
                                    <option>Escolha uma opção</option>
                                    <option value="1">Padaria</option>
                                    <option value="2">Restaurante</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            
                            <div className="dados">
                                <label>Endereço</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={logradouro}
                                    onChange={e => setLogradouro(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CEP</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={cep}
                                    onChange={e => setCep(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Bairro</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={bairro}
                                    onChange={e => setBairro(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Cidade</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={cidade}
                                    onChange={e => setCidade(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Região</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={regiao}
                                    onChange={e => setRegiao(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Estado</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Ponto de<br/>Referência</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={descricao_endereco}
                                    onChange={e => setDescricaoEndereco(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>DDD</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={ddd}
                                    onChange={e => setDdd(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Telefone</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={numero}
                                    onChange={e => setNumero(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Tipo do telefone</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={tipo}
                                    onChange={e => setTipo(e.target.value)}
                                    >
                                    <option>Escolha uma opção</option>
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2">Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Aplicativo de<br/>mensagem</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={descricao_telefone}
                                    onChange={e => setDescricaoTelefone(e.target.value)}
                                    >
                                    <option>Escolha uma opção</option>
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2" >Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            {/*
                            <label for="arquivo" className="botao-enviar-imagem">ENVIAR IMAGEM DO ANUNCIO</label>
                            <input 
                                id="arquivo"
                                type="file"
                                placeholder="ENVIAR"
                                value={imagem}
                                onChange={e => setImagem(e.target.value)}
                            />
                            */}
                            <button className="button" type="submit">CADASTRAR ANUNCIO</button>
                        </form>
                    </div>
                    <div className='painel-de-controle-acesso'>
                        <h3>Alterar a senha</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}