import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`
  align-items:center; 
  margin-top:12px; 
`;

export const ContainerBanner = styled.View`
  width:386px; 
  height:199px;  
`;

export const SetaIMG = styled.Image`
  width:15px; 
  height:23px;  
  opacity:0.5; 
`;

export const BannerPrimario = styled.Image`
  width:386px; 
  height:199px;  
`;

export const BannerSecundario = styled.Image`
  width:386px; 
  height:137px;  
  margin-top:5px; 
`;

export const BotaoBarraEsquerda = styled.Pressable`
  position:absolute; 
  left:0; 
  width:31px; 
  height:199px; 
  border-top-left-radius:8px; 
  border-bottom-left-radius:8px; 
  background-color:'transparent'; 
  justify-content:center; 
  align-items:center; 
  z-index:1;  
`;

export const BotaoBarraEsquerdaVisivel = styled.View`
  position:absolute; 
  left:0; 
  width:31px; 
  height:199px; 
  border-top-left-radius:8px; 
  border-bottom-left-radius:8px; 
  background-color:'rgba(0,0,0,0.1)'; 
  justify-content:center; 
  align-items:center;
   z-index:1;
`;

export const BotaoBarraDireita = styled.Pressable`
 position:absolute;
 right:0;
 width:31px;
 height:199px;
 border-top-right-radius:8px;
 border-bottom-right-radius:8px;
 background-color:'transparent';
 justify-content:center;
 align-items:center;
 z-index:1;
`;

export const BotaoBarraDireitaVisivel = styled.View`
 position:absolute;
 right:0;
 width:31px;
 height:199px;
 border-top-right-radius:8px;
 border-bottom-right-radius:8px;
 background-color:'rgba(0,0,0,0.1)';
 justify-content:center;
 align-items:center;
 z-index:1;

`;
export const Clicavel = styled.Pressable`
 

`;
