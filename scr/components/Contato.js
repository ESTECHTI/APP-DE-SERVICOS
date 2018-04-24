import React from "react";
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";

//import BarraNavegacao from "./BarraNavegacao";

const detalheContato = require("../imgs/detalhe_contato.png");

export default class Contato extends React.Component {
  static navigationOptions = {
    title: "ATM consultoria",
    headerStyle: {
      backgroundColor: "#61BD8C"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.clientes}>
        <StatusBar hidden={true} />

        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtTitulo}>Contato</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtDetalheContato}>TEL: (11) 1234-1234</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtDetalheCliente}>TEL: (11) 998156-1543</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clientes: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  cabecalho: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10
  },
  txtTitulo: {
    fontSize: 30,
    color: "#B9C941",
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheContato: {
    fontSize: 18,
    marginLeft: 20
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
