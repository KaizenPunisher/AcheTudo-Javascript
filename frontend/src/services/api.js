import axios from 'axios';
import env from './../config/env';

export const api = axios.create({
    baseURL: env.backendBaseUrl,
})

export const criarSessao = async (email, senha) => {
    return api.post('sessao', { email, senha });
}

export const cadastrarUsuario = async (data) => {
    return api.post('usuario', data);
}

export const cadastrarEmpresa = async (data) => {
    return api.post('paineldecontrole', data);
}

export const alterarEmpresa = async (data) => {
    return api.put('paineldecontrole/:id', data);
}

export const listarAnuncios = async () => {
    return api.get('empresa');
}

export const buscarAnuncio = async (id) => {
    return api.get(`paineldecontrole/${id}`);
}