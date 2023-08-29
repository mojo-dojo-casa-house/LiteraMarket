import React from 'react';
import { View, Image,Pressable, StyleSheet } from 'react-native';
import styles from './CabaçalhoStyle';

const Cabecalho= ({onPerfilClick}) => {
  return (
    <View style={styles.Conteiner}>

      <Pressable>
        <View style={styles.Menu}>
          <View style={styles.Circulo}></View>
          <View style={styles.Circulo}></View>
          <View style={styles.Circulo}></View>
        </View>
      </Pressable>

      <View style={styles.LogoContainer}>
        <Image source={require('../../../assets/LogoMINI.png')} style={styles.Logo} />
      </View>

      <Pressable onPress={onPerfilClick}>
        <View style={styles.Perfil}>
        <Image source={require('../../../assets/Visitante.png')} style={styles.PerfilIMG} />
        
        </View>
      </Pressable>
      
    </View>
  );
};



export default Cabecalho;
