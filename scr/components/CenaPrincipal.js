import React from "react";
import { View, StatusBar, Image, StyleSheet, TouchableHighlight } from "react-native";
import { StackNavigator } from 'react-navigation';

 const logo = require('../imgs/logo.png');
 const menuCliente = require('../imgs/menu_cliente.png');
 const menuContato = require('../imgs/menu_contato.png');
 const menuEmpresa = require('../imgs/menu_empresa.png');
 const menuServiço = require('../imgs/menu_servico.png');

export default class cenaPrincipal extends React.Component {

  static navigationOptions = {
      header: null,
      headerMode: 'screen'
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          hidden={true}
          />

          <View style={styles.logo}>
            <Image source={logo} />
          </View>
            
          <View style={styles.menu}>

            <View style={styles.menuGrupo}>
            <TouchableHighlight 
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('CenaClientes')}>
              <Image 
              style={styles.imgMenu} source={menuCliente} 
              />
             </TouchableHighlight>

            <TouchableHighlight 
            underlayColor={'#61BD8C'}
              activeOpacity={0.3}
            onPress={() => this.props.navigation.navigate('Contato')}>
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
            </View>

            <View style={styles.menuGrupo}>
              <TouchableHighlight 
                underlayColor={'#EC7148'}
                activeOpacity={0.3}
                onPress={() => this.props.navigation.navigate('Empresa')}>
                  <Image style={styles.imgMenu} source={menuEmpresa} />
              </TouchableHighlight>
              <TouchableHighlight 
                underlayColor={'#19D1C8'}
                activeOpacity={0.3}
                onPress={() => this.props.navigation.navigate('Servicos')}>
              <Image style={styles.imgMenu} source={menuServiço} />
              </TouchableHighlight>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row',
  },
  imgMenu: {
    margin: 15
  }
});
