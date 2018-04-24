import React from 'react';
import { StackNavigator } from "react-navigation";

import CenaPrincipal from './scr/components/CenaPrincipal'; 
import CenaClientes from './scr/components/CenaClientes';
import Contato from './scr/components/Contato';
import Empresa from './scr/components/Empresa';
import Servicos from './scr/components/Servicos';

const AppNavigator = StackNavigator({
  CenaPrincipal: {
    screen: CenaPrincipal,
    name: 'CenaPrincipal'
  },
  CenaClientes: {
    screen: CenaClientes,
    name: 'CenaClientes'
  },
  Contato: {
    screen: Contato,
    name: 'Contatos'
  },
  Empresa: {
    screen: Empresa,
    name: 'Empresa'
  },
  Servicos: {
    screen: Servicos,
    name: 'Servicos'
  }
},
{
  initialRouteName: 'CenaPrincipal'
}
)

export default class App extends React.Component {
  render() {
    return (  
      <AppNavigator />
    );
  }
}
