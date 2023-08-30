import React, { useState } from 'react';
import styles from './style';
import { View, Pressable, Image,Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';
import FiltroCategorias from '../../Componentes/Categorias/filtro';
import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

export default function Categorias() {
    const navigation = useNavigation();
    const [BolsaAtiva, setBolsaAtiva] = useState(true);

    return (
        <View style={styles.container}>



            <View style={styles.cabeçalhoContainer}>
                <View style={styles.horizontalConteiner}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../../assets/SetaVoltar.png')} style={styles.VoltarIMG} />
                    </Pressable>
                    <View style={styles.favoritosConteiner}>
                        <Text style={styles.tituloText}>Categorias</Text>
                    </View>
                    <View>
                        {BolsaAtiva&&<View style={styles.bolinha}></View>}
                        <Pressable onPress={() => navigation.navigate('Bolsa')}>
                        <Image source={require('../../../assets/Bolsa.png')} style={styles.bolsaIMG} />
                        </Pressable>
                    </View>
                </View>
                 {/* <View style={styles.meioConteiner}>
                            <Image source={require('../../../assets/Favoritos/favs.png')} style={styles.favsIMG} />
                            <Text style={styles.numItensText}>4 Itens</Text>
                        </View> */}
                
            </View>
            {/* <FiltroCategorias/> */}
            <View style={styles.conteinerGeneros}>
            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>             
                 <Text style={styles.categoriaTexto}>Ficção Científica</Text> 
                </View>
            </Pressable>
            
            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>              
                <Text style={styles.categoriaTexto}>Ação e Aventura</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>          
                <Text style={styles.categoriaTexto}>Romance</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>
                <Text style={styles.categoriaTexto}>Religiosos</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>             
                    <Text style={styles.categoriaTexto}>Ficção Policial</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>             
                    <Text style={styles.categoriaTexto}>Horror</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>             
                    <Text style={styles.categoriaTexto}>Thriller e Suspense</Text> 
                </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Tipo')}>
                <View style={styles.categoriaConteiner}>             
                    <Text style={styles.categoriaTexto}>Ficção histórica</Text> 
                </View>
            </Pressable>
               
            </View>

            
            <View style={styles.footer}>           
                <RodapePagHome value={3}/>
            </View> 
        </View>
       
    );
}

