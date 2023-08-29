
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity , Button } from 'react-native';
import CabecalhoPag from '../../Componentes/Home/Cabeçalho';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import RodapePagHome from '../../Componentes/Home/Rodape';

export default function Bolsa() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <>PAGINA DA BOLSA</>
            
    
            <View style={styles.footer}>           
                <RodapePagHome value={4}/>
            </View>
    
           
            
        </View>
       
    );
}

