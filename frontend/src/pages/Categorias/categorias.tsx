import React from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity , Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import RodapePagHome from '../../Componentes/Home/Rodape';

export default function Categorias() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>           
            <>PAGINA DE CATEGORIAS</>
           
            <View style={styles.footer}>           
                <RodapePagHome value={3}/>
            </View>
        </View>
       
    );
}

