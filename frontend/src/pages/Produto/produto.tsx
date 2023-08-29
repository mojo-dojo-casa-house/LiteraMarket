import React from 'react';
import { StyleSheet, Image, Text, View,TouchableOpacity , Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Produto() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>     
            <>PAGINA DO PRODUTO</>             
            <TouchableOpacity onPress={() => {navigation.navigate('Home');}} style={styles.Voltar}>
            Voltar
        </TouchableOpacity>        
    </View>
   
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
},
Voltar:{
    fontSize: 30,
    color:'#0332FC',
}

});
