
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity , Button } from 'react-native';
import CabecalhoPag from '../../Componentes/Home/Cabeçalho';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function CADASTRO() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <>PAGINA DE CADASTRO</>
            
    
            <TouchableOpacity onPress={() => {navigation.navigate('Home');}} style={styles.Voltar}>
                Voltar
            </TouchableOpacity>
    
           
            
        </View>
       
    );
}

