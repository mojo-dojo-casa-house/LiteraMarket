import React from 'react';
import styles from './style';
import { View,TouchableOpacity ,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';

export default function Favoritos() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <>PAGINA DE FAVORITOS</>
           

            <View style={styles.footer}>           
                <RodapePagHome value={2}/>
            </View>
        </View>
       
    );
}
