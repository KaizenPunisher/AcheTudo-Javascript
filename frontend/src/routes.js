import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './paginas/login';
import Cadastro from './paginas/cadastro';
import Usuario from './paginas/usuario';
import Inicio from './paginas/inicio';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login" component={Login} />
                <Route path="/usuario" component={Usuario} />
            </Switch>
        </BrowserRouter>
    );
}