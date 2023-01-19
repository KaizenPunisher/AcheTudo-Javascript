import React, { useContext } from 'react';
import { 
    BrowserRouter as Routers, 
    Navigate, 
    Route, 
    Routes, 
} from 'react-router-dom';

import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Ativar from './paginas/ativaremail';
import PainelDeControle from './paginas/paineldecontrole';
import Inicio from './paginas/inicio';

import { AuthProvider, AuthContext } from './contexts/autorizacao';

export default function AppRoutes(){
    const Private = ({children}) => {
        const { autenticado, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">CARREGANDO...</div>
        }

        if (!autenticado) {
            return <Navigate to="/login" />
        }

        return children;
    };

    return(
        <Routers>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                    <Route exact path="/cadastro" element={<Cadastro />} />
                    <Route exact path="/ativaremail" element={<Ativar />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/paineldecontrole" element={<Private><PainelDeControle /></Private>} />
                </Routes>
            </AuthProvider>
        </Routers>
    );
}