import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import global from '../../globalStyles';

export default function Splash() {
  const navigation = useNavigation();

  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login' as never); 
    }, 2500); 
   
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container>
      <BackgroundCimaIMG source={require('../../../assets/Splash/splashAlto.png')} />
      <LogoIMG source={require('../../../assets/Splash/LogoMaior.png')} />
      <BackgroundBaixoIMG source={require('../../../assets/Splash/splashBaixo.png')} />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${global.colors.AzulEscuro};
`;

const LogoIMG = styled.Image`
  width: 309px;
  height: 160px;
`;

const BackgroundCimaIMG = styled.Image`
  width: 414px;
  height: 210px;
  position: absolute;
  margin-bottom: 195.5px;
  top: 0;
  z-index: -1;
`;

const BackgroundBaixoIMG = styled.Image`
  width: 414px;
  height: 302px;
  position: absolute;
  margin-top: 195.5px;
  bottom: 0;
  z-index: -1;
`;
