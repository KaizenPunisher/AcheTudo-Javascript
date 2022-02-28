import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import api from '../../services/api';
import logo from "../../imagens/logo.svg";

export default function PainelDeControle(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e){
        e.preventDefault();
        
        const data = {
            nome,
            email,
            password
        };

        try{
            const response =  await api.post('usuario', data);
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
                        <Link className="back-link" to="/"><div className='voltar'></div>VOLTAR</Link>
                        <div style={{clear: "both"}}></div>
                    </div>
                </section>
                <div className='painel-de-controle-configuracoes'>
                    <div className='painel-de-controle-nome-usuario'>
                        <h4>Arlete Vasconcelos da Cruz Santos</h4>
                    </div>
                    <div className="painel-de-controle-dados">
                        <h3>Dados</h3>
                        <form onSubmit={handleCadastro}>
                            <div className="dados">
                                <label>Razão Social</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Nome Fantasia</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CNPJ</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CPF</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Setor</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Horario de<br/>atendimento</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Descrição da<br/>empresa</label>
                                <textarea
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Rede Sociais</label>
                                <textarea
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Empreendimento</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    >
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2" selected>Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Endereço</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>CEP</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Bairro</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Cidade</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Região</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Estado</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Ponto de<br/>Referência</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Telefone</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>DDD</label>
                                <input 
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}  
                                />
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Tipo do telefone</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    >
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2" selected>Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <div className="dados">
                                <label>Aplicativo de<br/>mensagem</label>
                                <select 
                                    name="select"
                                    placeholder="Nome de registro"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    >
                                    <option value="valor1">Valor 1</option>
                                    <option value="valor2" selected>Valor 2</option>
                                    <option value="valor3">Valor 3</option>
                                </select>
                                <div className="clear"></div>
                            </div>
                            <label for="arquivo" className="botao-enviar-imagem">ENVIAR IMAGEM DO ANUNCIO</label>
                            <input 
                                id="arquivo"
                                type="file"
                                placeholder="ENVIAR"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            <button className="button" type="submit">CADASTRAR ANUNCIO</button>
                        </form>
                    </div>
                    <div className='painel-de-controle-acesso'>
                        <form onSubmit={handleCadastro}>
                            <h3>Alterar a senha</h3>
                            <input 
                                placeholder="SENHA"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <button className="button" type="submit">SALVAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}