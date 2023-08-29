import React from 'react';
import { View,Image, TextInput, StyleSheet, Pressable } from 'react-native';

import styles from './addComentarioStyle';
import Avaliação from './Avaliação';

const FazerComentario = () => {
  return (
    <View style={styles.comentarioContainer}>
        <View style={styles.comentarioHorizontalContainer}>
            <View style={styles.userIMG} >
                <Image source={require('../../../assets/Visitante.png')} style={styles.perfilIMG} />
            </View>
            
            <View style={styles.comentarioVerticalContainer}>
                <View>
                <Avaliação/>
                </View>                
                <TextInput placeholder="Adicione um Comentário..." maxLength={200} multiline={true} onChangeText={text => console.log(text)} style={styles.comentarioInput}/>
            </View>
 
            
    </View>
    <Pressable style={styles.enviarBotão}>
    <Image source={require('../../../assets/Enviar.png')} style={styles.enviarIMG} />
    </Pressable>
  
    </View>
);
}



export default FazerComentario;
