import React from "react";
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";

//import BarraNavegacao from "./BarraNavegacao";

const detalheEmpresa = require("../imgs/detalhe_empresa.png");

export default class Empresa extends React.Component {
  static navigationOptions = {
    title: "ATM consultoria",
    headerStyle: {
      backgroundColor: "#EC7148"
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
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalheContato}>
          <Text style={styles.txtDetalheContato}>A ATM consultoria é uma empresa dedica aos clientes.</Text>
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
    color: "#EC7148",
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
