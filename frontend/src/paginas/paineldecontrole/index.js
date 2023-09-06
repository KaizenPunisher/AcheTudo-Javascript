import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { api, buscarAnuncio, cadastrarEmpresa, alterarEmpresa } from '../../services/api';
import { AuthContext } from '../../contexts/autorizacao';


import './style.css';
import logo from "../../imagens/logo.png";

export default function Cadastro(){
    const {usuario} = useContext(AuthContext);
    const {token} = useContext(AuthContext);
    const [usuario_id, setUsuarioId] = useState(usuario.id);
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
    const [regiao, setRegiao] = useState(' ');
    const [uf, setUf] = useState('');
    const [descricao_endereco, setDescricaoEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [ddd, setDdd] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao_telefone, setDescricaoTelefone] = useState('');
    const [imagem, setImagem] = useState(['']);

    async function encontrarEmpresa(){
        
        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        await buscarAnuncio(usuario.id).then(response => {
            console.log(response.data);
            if(response.data.length != 0){
                setRazaoSocial(response.data[0].razao_social);
                setNomeFantasia(response.data[0].nome_fantasia);
                setCnpj(response.data[0].cnpj);
                setCpf(response.data[0].cpf);
                setSetor(response.data[0].setor);
                setHorarioDeAtendimento(response.data[0].horario_de_atendimento);
                setDescricao(response.data[0].descricao);
                setRedesSociais(response.data[0].redes_sociais);
                setServicoId(response.data[0].servico_id);
                setLogradouro(response.data[0].logradouro);
                setCep(response.data[0].cep);
                setBairro(response.data[0].bairro);
                setCidade(response.data[0].cidade);
                setRegiao(response.data[0].regiao);
                setUf(response.data[0].uf);
                setDescricaoEndereco(response.data[0].endereco_descricao);
                setNumero(response.data[0].numero);
                setDdd(response.data[0].ddd);
                setTipo(response.data[0].tipo);
                setDescricaoTelefone(response.data[0].descricao_telefone);
                
            };
            if(response.data.length !== 0){
                document.getElementById("painel-de-controle-alteracao").style.display = "block";
                document.getElementById("painel-de-controle-cadastro").style.display = "none";
            };
        });
        
    };

    async function handleCadastro(e){
        e.preventDefault();
        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }
        
        const data = new FormData();
        data.append("usuario_id", usuario_id);
        data.append("razao_social", razao_social);
        data.append("nome_fantasia", nome_fantasia);
        data.append("cnpj", cnpj);
        data.append("cpf", cpf);
        data.append("setor", setor);
        data.append("horario_de_atendimento", horario_de_atendimento);
        data.append("descricao", descricao);
        data.append("redes_sociais", redes_sociais);
        data.append("servico_id", servico_id);
        data.append("logradouro", logradouro);
        data.append("cep", cep);
        data.append("bairro", bairro);
        data.append("cidade", cidade);
        data.append("regiao", regiao);
        data.append("uf", uf);
        data.append("descricao_endereco", descricao_endereco);
        data.append("numero", numero);
        data.append("ddd", ddd);
        data.append("tipo", tipo);
        data.append("descricao_telefone", descricao_telefone);
        data.append("imagem", imagem);
        
        try{
            console.log(data);
            const response =  await cadastrarEmpresa(data, headers);
            alert(`Seu ID de acesso: ${response.data.id}`);
            
        } catch(erro){
            alert('Erro no cadastro');
            console.log(erro);
        }
        
    };

    async function handleAlteracao(e){
        e.preventDefault();
        /*
        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }

        const formData = new FormData();
        formData.append("usuario_id", usuario_id);
        formData.append("razao_social", razao_social);
        formData.append("nome_fantasia", nome_fantasia);
        formData.append("cnpj", cnpj);
        formData.append("cpf", cpf);
        formData.append("setor", setor);
        formData.append("horario_de_atendimento", horario_de_atendimento);
        formData.append("descricao", descricao);
        formData.append("redes_sociais", redes_sociais);
        formData.append("servico_id", servico_id);
        formData.append("logradouro", logradouro);
        formData.append("cep", cep);
        formData.append("bairro", bairro);
        formData.append("cidade", cidade);
        formData.append("regiao", regiao);
        formData.append("uf", uf);
        formData.append("descricao_endereco", descricao_endereco);
        formData.append("numero", numero);
        formData.append("ddd", ddd);
        formData.append("tipo", tipo);
        formData.append("descricao_telefone", descricao_telefone);
        formData.append("imagem", imagem);

        try{
            //const response =  await alterarEmpresa(usuario.id, formData, headers);
            alert(`Mensagem: Alteração feita com sucesso`);
            //alert(`${usuario.id}`)
            //history.push("/");
            
        } catch(erro){
            alert('Erro na alteração');
        }
        */
    };
    
    useEffect(() => {
        encontrarEmpresa();
    }, []);
    
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
                        <h4>{usuario.nome}</h4>
                    </div>
                    <div className="painel-de-controle-dados" id='painel-de-controle-dados'>
                        <h3>Dados</h3>
                        
                        <form onSubmit={handleCadastro} id='painel-de-controle-cadastro' encType="multipart/form-data" method='post'>
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
                                    <option value="publico">Público</option>
                                    <option value="privado">Privado</option>
                                    <option value="ong">ONG</option>
                                    <option value="autonomo">Autonomo</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Horario de<br/>atendimento</label>
                                <input 
                                    placeholder="Horario de atendimento"
                                    value={horario_de_atendimento}
                                    onChange={e => setHorarioDeAtendimento(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Descrição da<br/>empresa</label>
                                <textarea
                                    placeholder="Descrição"
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
                                    <option value="1">Restaurante</option>
                                    <option value="2">Padaria</option>
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
                                <label>Próximo ao</label>
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
                                    <option value="celular">Celular</option>
                                    <option value="residencial">Residencial</option>
                                    <option value="empresa">Empresa</option>
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
                                    <option value="whatsapp">Whatsapp</option>
                                    <option value="telegram" >Telegram</option>
                                    <option value="signal">Signal</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            
                            <label className="botao-enviar-imagem">ENVIAR IMAGEM DO ANUNCIO</label>
                            <input 
                                id="arquivo"
                                type="file"
                                placeholder="ENVIAR"
                                onChange={e => setImagem(e.target.files[0])}
                            />
                            
                            <button className="button" type="submit">CADASTRAR ANUNCIO</button>
                        </form>
                        
                        <br/>
                        
                        <form onSubmit={handleAlteracao} id='painel-de-controle-alteracao' className="painel-de-controle-alteracao" encType="multipart/form-data" method='post'>
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
                                    <option value="publico">Público</option>
                                    <option value="privado">Privado</option>
                                    <option value="ong">ONG</option>
                                    <option value="autonomo">Autonomo</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Horario de<br/>atendimento</label>
                                <input 
                                    placeholder="Horario de atendimento"
                                    value={horario_de_atendimento}
                                    onChange={e => setHorarioDeAtendimento(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Descrição da<br/>empresa</label>
                                <textarea
                                    placeholder="Descrição"
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
                                    <option value="1">Restaurante</option>
                                    <option value="2">Padaria</option>
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
                                <label>Próximo ao</label>
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
                                    <option value="celular">Celular</option>
                                    <option value="residencial">Residencial</option>
                                    <option value="empresa">Empresa</option>
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
                                    <option value="whatsapp">Whatsapp</option>
                                    <option value="telegram" >Telegram</option>
                                    <option value="signal">Signal</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <label for="arquivo" className="botao-enviar-imagem">ENVIAR IMAGEM DO ANUNCIO</label>
                            <input 
                                id="arquivo"
                                type="file"
                                placeholder="ENVIAR"
                                value={imagem}
                                onChange={e => setImagem(e.target.value)}
                            />
                            
                            <button className="button" type="submit">ALTERAR ANUNCIO</button>
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