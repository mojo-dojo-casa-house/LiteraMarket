import React from 'react';
import {  View , TouchableOpacity} from 'react-native';

import styles from './style';

export default function Login() {
    
    return (
        <View style={styles.container}>
            <>PAGINA DO LOGIN</>
            <TouchableOpacity onPress={() => {navigation.navigate('Home');}} style={styles.Voltar}>
                Voltar
            </TouchableOpacity>
           
        </View>
       
    );
}

