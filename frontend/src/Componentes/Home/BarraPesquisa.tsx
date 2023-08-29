import React from 'react';
import { View,Image, TextInput, StyleSheet } from 'react-native';
import styles from './BarraPesquisaStyle';

const BarraPesquisa = () => {
  return (
    <View style={styles.Conteiner}>
        <View style={styles.BuscaIconConteiner}>
          <Image source={require('../../../assets/IconeBusca.png')} style={ styles.BuscaIcon } />
        </View>
        <TextInput placeholder="Busca..." onChangeText={text => console.log(text)} style={styles.BuscaInput}/>
    </View>
  );
};



export default BarraPesquisa;
