import React from "react";
import { View, StatusBar, Image, Text, StyleSheet } from "react-native";

//import BarraNavegacao from "./BarraNavegacao";

const NossoServico = require("../imgs/detalhe_servico.png");

export default class NossosServicos extends React.Component {
  static navigationOptions = {
    title: "ATM consultoria",
    headerStyle: {
      backgroundColor: "#19D1C8"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    return <View style={styles.clientes}>
        <StatusBar hidden={true} />

        <View style={styles.cabecalho}>
          <Image source={NossoServico} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheServico}>
          <Text style={styles.txtDetalheServico}>
            - Consultoria
          </Text>
          <Text style={styles.txtDetalheServico}>
            - Processos
          </Text>
          <Text style={styles.txtDetalheServico}>
            - Acompanhamento de Projetos
          </Text>
        </View>
      </View>;
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
    color: "#19D1C8",
    marginLeft: 10,
    marginTop: 25
  },
  detalheServico: {
    padding: 20,
    marginTop: 10,
    flexDirection: "column"
  },
  txtDetalheServico: {
    fontSize: 18,
    marginLeft: 20
  }
});
