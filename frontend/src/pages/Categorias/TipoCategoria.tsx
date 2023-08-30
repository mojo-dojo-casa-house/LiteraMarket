import React, { useState } from 'react';
import styles from './style';
import { View, Pressable, Image,Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';
import FiltroCategorias from '../../Componentes/Categorias/filtro';
import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

export default function Tipo() {
    const navigation = useNavigation();
    const [BolsaAtiva, setBolsaAtiva] = useState(true);

    return (
        <View style={styles.container}>



            <View style={styles.cabeçalhoContainer}>
                <View style={styles.horizontalConteiner}>
                    <Pressable onPress={() => navigation.navigate('Categorias')}>
                        <Image source={require('../../../assets/SetaVoltar.png')} style={styles.VoltarIMG} />
                    </Pressable>
                    <View style={styles.favoritosConteiner}>
                        <Text style={styles.tituloText}>Categoria</Text>
                    </View>
                    <View>
                        {BolsaAtiva&&<View style={styles.bolinha}></View>}
                        <Pressable onPress={() => navigation.navigate('Bolsa')}>
                        <Image source={require('../../../assets/Bolsa.png')} style={styles.bolsaIMG} />
                        </Pressable>
                    </View>
                </View>
                <View style={styles.meioConteiner}>
                            <Text style={styles.numItensText}>4 Itens</Text>
                        </View> 
                
            </View>
            <FiltroCategorias/> 
            

            
            <View style={styles.footer}>           
                <RodapePagHome value={3}/>
            </View> 
        </View>
       
    );
}

