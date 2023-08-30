import React, { useState } from 'react';
import styles from './style';
import { View,TouchableOpacity , Pressable, Image,Text  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RodapePagHome from '../../Componentes/Home/Rodape';
import FiltroFavoritos from '../../Componentes/Favoritos/Filtro';
export default function Favoritos() {
    const navigation = useNavigation();
    const [Mensagem, setMensagem] = useState(false);
    const [BolsaAtiva, setBolsaAtiva] = useState(true);

    const handleMensagem = (valor) => {
        if (valor>0){
        setMensagem(true);
    }
      };
   
    return (
        <View style={styles.container}>
            <View style={styles.cabeçalhoContainer}>
                <View style={styles.horizontalConteiner}>
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <Image source={require('../../../assets/SetaVoltar.png')} style={styles.VoltarIMG} />
                    </Pressable>
                    <View style={styles.favoritosConteiner}>
                        <Text style={styles.tituloText}>Favoritos</Text>
                    </View>
                    <View>
                        {BolsaAtiva&&<View style={styles.bolinha}></View>}
                        <Pressable onPress={() => navigation.navigate('Bolsa')}>
                        <Image source={require('../../../assets/Bolsa.png')} style={styles.bolsaIMG} />
                        </Pressable>
                    </View>
                </View>
                 <View style={styles.meioConteiner}>
                            <Image source={require('../../../assets/Favoritos/favs.png')} style={styles.favsIMG} />
                            <Text style={styles.numItensText}>4 Itens</Text>
                        </View>
                
            </View>
            <FiltroFavoritos/>

            {Mensagem &&
            <View style={styles.mensagemFavoritos}>
            <Image source={require('../../../assets/Favoritos/caraTriste.png')} style={styles.rostoIMG} />
                <Text style={styles.mensagemFavoritosTextG}>Você não tem Favoritos</Text>
                <Text style={styles.mensagemFavoritosTextP}>Adicione um Item aos seus Favoritos</Text>
            </View>}

            <View style={styles.footer}>           
                <RodapePagHome value={2}/>
            </View>
        </View>
       
    );
}

