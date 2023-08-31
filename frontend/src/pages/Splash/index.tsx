import React from 'react';
import {  View , Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default function Splash() {
    
    return (
        <View style={styles.container}>
            <BackgroundCimaIMG source={require('../../../assets/Splash/splashAlto.png')}/>
            <LogoIMG source={require('../../../assets/Splash/LogoMaior.png')}/>
            <BackgroundBaixoIMG source={require('../../../assets/Splash/splashBaixo.png')}/>

            
        </View>
       
    );
}


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${global.colors.AzulEscuro};
`;

export const LogoIMG = styled.Image`
    width: 309px;
    height: 160px;
`;

export const BackgroundCimaIMG = styled.Image`
    width: 414px;
    height: 210px;
    position: absolute;
    margin-bottom: 195.5px;
    top: 0;
    z-index: -1;
`;

export const BackgroundBaixoIMG = styled.Image`
    width: 414px;
    height: 302px;
    position: absolute;
    margin-top: 195.5px;
    bottom: 0;
    z-index: -1;
`;

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
