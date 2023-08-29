import React, { useState } from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './RodapeStyle';

const RodapePagHome = ({ value }) => {
  const navigation = useNavigation();
  const [AbaSelecionada] = useState(value); 

  return (
    <View style={styles.Container}>
      <View style={styles.IconesConteiner}> 

            
                <View style={[styles.nãoSelecionado, AbaSelecionada === 1 && styles.Selecionado]}> 
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../../assets/HomeIcone.png')} style={styles.Home} />     
                </Pressable> 
                </View>

                <View style={[styles.nãoSelecionado, AbaSelecionada === 2 && styles.Selecionado]}> 
                <Pressable onPress={() => navigation.navigate('Favoritos')}>
                  <Image source={require('../../../assets/FavIcones.png')} style={styles.Fav} />
                </Pressable>
                </View>

                <View style={[styles.nãoSelecionado, AbaSelecionada  === 3 && styles.Selecionado]}> 
                <Pressable onPress={() => navigation.navigate('Categorias')}>
                  <Image source={require('../../../assets/CategoriasIcone.png')} style={styles.Categoria} />
                </Pressable>
                </View>

                <View style={[styles.nãoSelecionado, AbaSelecionada  === 4 && styles.Selecionado]}> 
                <Pressable onPress={() => navigation.navigate('Bolsa')}>
                  <Image source={require('../../../assets/BolsaIcone.png')} style={styles.Bolsa} />
                </Pressable>
                </View>
             
          </View>
    </View>
  );
};




export default RodapePagHome;