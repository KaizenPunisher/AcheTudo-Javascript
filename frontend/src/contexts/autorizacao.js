import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recuperarUsuario = localStorage.getItem('usuario');

        if(recuperarUsuario) {
            setUser(JSON.parse(recuperarUsuario));
        }

        setLoading(false);
    }, []);

    const login = (response) => {

        console.log(response);
        const usuarioLogado = JSON.stringify(response.usuario);
        const token = response.token;

        localStorage.setItem('usuario', usuarioLogado);
        localStorage.setItem('token', token);
        setUser({usuarioLogado});
    };
    
    const logout = () => {
        setUser("null");
        localStorage.clear();
        localStorage.clear();
        navigate('/login');
        console.log('logout');
    };
        
    return (
        <AuthContext.Provider 
            value={{autenticado: 
                !!user, 
                user,
                loading,
                login, 
                logout
            }}
        >
        {children}
        </AuthContext.Provider>
    )
}