import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, Pressable } from 'react-native';
import global from '../../globalStyles';

const Avaliação = () => {

const [Nota, setNota] = useState(0);    
const [Zero, setZero] = useState(1);    

// Seleciona a nota de 1 a 5
const handlePress = (nota) => {  
    setNota(nota);
};
// Zera a Nota se 1 já foi Clicado
const notasZeroouUm = (valor) => {
        setNota(valor);
        const updateZero =( valor ) =>{
            valor === 1 ? setZero(0):setZero(1) 
        };
        updateZero(valor);
       
};

  return (
    <View style={styles.Container}>
        
        <Pressable onPress={() => notasZeroouUm(Zero)} style={styles.button}>   
        <Image source={Nota <= 0 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} style={styles.EstrelasIMG} />
        </Pressable>
        <Pressable onPress={() => handlePress(2)} style={styles.button}>  
        <Image source={Nota <= 1 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} style={styles.EstrelasIMG} />     
        </Pressable>
        <Pressable onPress={() => handlePress(3)} style={styles.button}>       
        <Image source={Nota <= 2 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} style={styles.EstrelasIMG} />
        </Pressable>
        <Pressable onPress={() => handlePress(4)} style={styles.button}>    
        <Image source={Nota <= 3 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} style={styles.EstrelasIMG} />  
        </Pressable>
        <Pressable onPress={() => handlePress(5)} style={styles.button}>    
        <Image source={Nota <= 4 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} style={styles.EstrelasIMG} />  
        </Pressable>
        <Text style={styles.texto}>{Nota}.0</Text>
 
    </View>
);
}

const styles = StyleSheet.create({

Container:{
    width:112,
    height:22,
    flexDirection:'row',   
    marginBottom: 6,
}, 
EstrelasIMG:{
    width: 20,
    height: 22,
},
button:{
    width: 20,
    height: 22,
    marginRight:8,
},
texto:{
    marginTop:4,
    fontFamily: global.fonts.roboto,
    marginLeft:10,
    color: global.colors.Branco,
},

});



export default Avaliação;
