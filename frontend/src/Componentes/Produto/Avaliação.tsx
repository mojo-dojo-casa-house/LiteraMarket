import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, Pressable } from 'react-native';

import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  width:112px; 
  height:22px; 
  flex-direction: row;   
  margin-bottom:6px; 
  margin-left:10px;
`;

export const EstrelasIMG = styled.Image`
  width:20px; 
  height:22px;  
`;

export const Button = styled.Pressable`
  width:20px; 
  height:22px;  
  margin-right:8px; 
`;

export const Texto = styled.Text`
 margin-top:4px; 
 font-family:${global.fonts.roboto}; 
 margin-left:10px; 
 color:${global.colors.Branco}; 
`;



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
    <Container>
      <Button onPress={() => notasZeroouUm(Zero)}>   
        <EstrelasIMG source={Nota <= 0 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} />
      </Button>
      <Button onPress={() => handlePress(2)}>  
        <EstrelasIMG source={Nota <= 1 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} />     
      </Button>
      <Button onPress={() => handlePress(3)}>       
        <EstrelasIMG source={Nota <= 2 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} />
      </Button>
      <Button onPress={() => handlePress(4)}>    
        <EstrelasIMG source={Nota <= 3 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} />  
      </Button>
      <Button onPress={() => handlePress(5)}>    
        <EstrelasIMG source={Nota <= 4 ?  require('../../../assets/EstrelaUnica.PNG') : require('../../../assets/EstrelaUnicaAtiva.PNG')} />  
      </Button>
      <Texto>{Nota}.0</Texto>
    </Container>
);
}




export default Avaliação;
