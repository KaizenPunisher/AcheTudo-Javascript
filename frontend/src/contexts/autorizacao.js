import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const recuperarUsuario = localStorage.getItem('usuario');
        const recuperarToken = localStorage.getItem('token');

        if(recuperarUsuario) {
            setUsuario(JSON.parse(recuperarUsuario));
        }
        if(recuperarToken){
            setToken(recuperarToken);
        }
        
        setLoading(false);
      
    }, [token]);
    
    const login = (response) => {

        const usuarioLogado = JSON.stringify(response.usuario);
        const token = response.token;

        localStorage.setItem('usuario', usuarioLogado);
        localStorage.setItem('token', token);
    
        setUsuario({usuarioLogado});
        setToken(token);
    };
    
    const logout = () => {
        setUsuario("null");
        localStorage.clear();
        localStorage.clear();
        navigate('/login');
    };
    
    return (
        <AuthContext.Provider 
            value={{autenticado: 
                !!usuario, 
                usuario,
                token,
                loading,
                login, 
                logout
            }}
        >
        {children}
        </AuthContext.Provider>
    )
}