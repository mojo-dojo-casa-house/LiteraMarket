import React, { useState } from 'react';
// import styles from './style';
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
                
                
            </View>
             <FiltroCategorias/> 
            

            
            <View style={styles.footer}>           
                <RodapePagHome value={3}/>
            </View> 
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: global.colors.BrancoFundo,
    },
    VoltarIMG:{
        width: 31,
        height: 30,
        marginLeft: 16,
    },
    tituloText:{
        fontSize: 24,
        fontFamily: global.fonts.roboto,
        fontWeight: 'bold',
        color: global.colors.AzulEscuro,
        
    },
    bolinha:{
        width:10,
        height:10,
        backgroundColor: global.colors.Azul,
        borderRadius:100,
        position:'absolute',
        right:12,
        top:3,
        zIndex:1,
    },
    
    footer: {
        position: 'fixed',
        bottom:0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cabeçalhoContainer:{
        height:88,
        width:'100%',
        backgroundColor: global.colors.Branco,
        borderBottomWidth: 1,
        borderColor: global.colors.Cinza,

        

    },
    horizontalConteiner:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        marginTop:16,
     
    },
    meioConteiner:{
        marginTop:5,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
       
    },
    favoritosConteiner:{
        flexDirection:'column',
        alignItems:'center',
        
    },
    bolsaIMG:{
        width:25,
        height:28,
        marginRight:16,
    },
    favsIMG:{
        width:16,
        height:14,
        marginRight:5,
    },
    rostoIMG:{
        width:43,
        height:43,

    },
    numItensText:{
        fontFamily: global.fonts.roboto,
        fontSize: 16,
        color: global.colors.Cinza
    },
    barraCabeçalho:{
        height:1,
        width:'100%',
        backgroundColor: global.colors.Cinza,
    },
    mensagemFavoritos:{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:40,
        position: 'absolute',
        top: '15%',
    },
    mensagemFavoritosTextG:{
        fontSize: 32,
        color: global.colors.AzulEscuro,
        fontFamily: global.fonts.roboto,
        fontWeight:'200',
    },
     mensagemFavoritosTextP:{
        fontSize: 16,
        color: global.colors.Roxo,
        fontFamily: global.fonts.roboto,
        fontWeight:'200',
    },
   
   
});

