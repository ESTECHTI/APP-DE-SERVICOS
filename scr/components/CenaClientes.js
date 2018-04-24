import React from "react";
import { View, StatusBar, Image, Text, StyleSheet} from "react-native";

 //import BarraNavegacao from "./BarraNavegacao";

 const detalheClientes = require('../imgs/detalhe_cliente.png');
 const cliente1 = require("../imgs/cliente1.png");
 const cliente2 = require("../imgs/cliente2.png");

export default class cenaClientes extends React.Component {
  static navigationOptions = {
      title: 'ATM consultoria',
      headerStyle: {
        backgroundColor: '#B9C941',
        } ,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
      }
    }
    
  render() {
    return (
      <View style={styles.clientes}>
        <StatusBar 
          hidden={true}
          />

        <View style={styles.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  clientes: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color :'#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});

