import React from 'react';
import {  View , Image, TouchableOpacity} from 'react-native';
// import styles from './style';

export default function Splash() {
    
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/Splash/splashAlto.png')} style={styles.backgroundCimaIMG} />
            <Image source={require('../../../assets/Splash/LogoMaior.png')} style={styles.logoIMG} />
            <Image source={require('../../../assets/Splash/splashBaixo.png')} style={styles.backgroundBaixoIMG} />

            
        </View>
       
    );
}


import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: global.colors.AzulEscuro,
    },
    logoIMG:{
        width: 309,
        height: 160,
    },
    backgroundCimaIMG:{
        width: 414,
        height: 210,
        position:'absolute',
        marginBottom:195.5,
        top:0,
        zIndex:-1,

    },
    backgroundBaixoIMG:{
        width: 414,
        height: 302,
        position:'absolute',
        marginTop:195.5,
        bottom:0,
        zIndex:-1,

    },
  
});

// export default styles;
