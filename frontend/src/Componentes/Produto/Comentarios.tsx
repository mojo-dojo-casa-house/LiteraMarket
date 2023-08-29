import React from 'react';
import { View,Image, Text, StyleSheet } from 'react-native';
import global from '../../globalStyles';
import styles from './ComentariosStyle';

const Comentario = () => {
  return (
    <View style={styles.comentarioCampoContainer}>

   

    <View  style={styles.comentarioContainer}>
        <View style={styles.comentarioUserConteiner}>
        <View style={styles.userIMG} >
                <Image source={require('../../../assets/Visitante.png')} style={styles.perfilIMG} />
            </View>
            <View style={styles.comentarioVerticalConteinier}>
            <Text style={styles.comentarioNome}>João da Silva</Text>
            <Image source={require('../../../assets/Estrelas/Estrelas4.png')} style={styles.comentarioEstrelasIMG} />
            </View>
            <Text style={styles.comentarioData}>1 hora Atrás</Text>
        </View>

        
       
        <View style={styles.comentarioCampo}>
            <Text style={styles.comentarioCampoTexto}>
            Impossível não ficar impressionado com 'Tudo pelo meu pai' de Roberto. 
            Fiquei totalmente absorvido pela trama e pelos dilemas dos personagens.
            Uma leitura que expandiu meus horizontes.
            </Text>
        </View>
    </View>

   
</View>
);
}




export default Comentario;
