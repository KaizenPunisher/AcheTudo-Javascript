import axios from 'axios';
import env from './../config/env';

export const api = axios.create({
    baseURL: env.backendBaseUrl,
})

export const listarAnuncios = async () => {
    return api.get('inicio');
}

export const criarSessao = async (email, senha) => {
    return api.post('sessao', { email, senha });
}

export const cadastrarUsuario = async (data) => {
    return api.post('usuario', data);
}

export const cadastrarEmpresa = async (formData, headers) => {
    return api.post('paineldecontrole', formData, headers);
}

export const alterarEmpresa = async (id, data) => {
    return api.put(`paineldecontrole/${id}`, data);
}

export const buscarAnuncio = async (id) => {
    return api.get(`paineldecontrole/${id}`);
}