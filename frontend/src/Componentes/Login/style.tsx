import styled from 'styled-components/native';
import global from '../../globalStyles';


export const Conteiner = styled.View`
  margin-top:210px; 
  align-items:center; 

`;
export const ConteinerInput = styled.View`
  flex-direction:row;  
  align-items:center; 
  width:382px; 
  height:56px; 
  border-radius:76px; 
  background-color:${global.colors.Branco}; 
  margin-top:14px; 
  margin-horizontal:14px;  
`;

export const Input = styled.TextInput`
  border-color: transparent;
  border-width: 1px;
  outline-width: 0;
  width: 382px;
  height: 56px;
  padding: 10px;
  color: ${global.colors.Cinza};
  font-size: 20px;
  font-weight: 300;

  &::placeholder {
    color: ${global.colors.Cinza}; 
    opacity: 0.6; 
  }
`;

export const Icon = styled.Image`
 flexDirection:row; 
 align-items:center; 
 justify-content:center; 
 width:18px; 
 height:20px; 

`;

export const IconConteiner = styled.View`
 flexDirection:row;
 align-items:center;
 justify-content:center;
 width:40px;
 height:40px;
 margin-left:8px;
 border-radius:100px;
 background-color:${global.colors.Azul}; 

`;

export const BotãoLogin = styled.Pressable`
 flexDirection:row;
 align-items:center;
 justify-content:center;
 width: 165px;
 height: 56px;
 margin-top:32px;
 border-radius:76px;
 background-color:${global.colors.Azul}; 

`;
export const BotãoVisitante = styled.Pressable`
 flexDirection:row;
 align-items:center;
 justify-content:center;
 width: 165px;
 height: 56px;
 margin-top:12px;
 border-radius:76px;
 text-align: center; 
 background-color:${global.colors.Azul}; 

`;
export const BotãoTexto = styled.Text`
font-family:${global.fonts.roboto};
font-size: 24px;
font-weight: 200;
 color:${global.colors.Branco}; 

`;
export const BotãoVisitanteTexto = styled.Text`
font-family:${global.fonts.roboto};
font-size: 16px;
font-weight: 200;
color:${global.colors.Branco}; 
text-align: center; 


`;

export const EsqueciaSenha= styled.Text`
font-family:${global.fonts.roboto};
font-size: 16px;
font-weight: 200;
color:${global.colors.Azul}; 
position: absolute;
right: 24;
top:145;

`;

export const ConecteCom= styled.Text`
font-family:${global.fonts.roboto};
font-size: 20px;
font-weight: bold;
color:${global.colors.AzulEscuro}; 
margin-left:10px;
margin-right:10px;

`;

export const ConecteBarra= styled.View`
height:1px;
width: 106px;
background-color: ${global.colors.AzulEscuro};

`;

export const ConteinerConecteHorizontal= styled.View`
flex-direction: row;
align-items:center;
justify-content:center;
margin-top:15px;

`;
export const ConteinerHorizontal= styled.View`
flex-direction: row;
align-items:center;
justify-content:center;

`;

export const BolaAzul= styled.Pressable`
width: 61px;
height: 61px;
border-radius: 100px;
margin-left:51px;
margin-right:51px;
margin-top:20px;
margin-bottom:20px;
`;

export const NãoPossuiConta= styled.Text`
font-family:${global.fonts.roboto};
font-size: 20px;
font-weight: 400;
color:${global.colors.AzulEscuro}; 

`;
export const CrieConta= styled.Text`
font-family:${global.fonts.roboto};
font-size: 20px;
font-weight: bold;
color:${global.colors.Azul}; 
margin-left:6px;


`;
export const SocialIcon = styled.Image`
width:61px; 
height:61px; 


`;
export const Clicavel = styled.Pressable`


`;
