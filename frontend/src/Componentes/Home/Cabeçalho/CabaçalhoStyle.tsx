import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Conteiner = styled.View`
  flex-direction:row;  
  align-items:center; 
  justify-content:space-between;  
  width:414px; 
  height:80px; 
  background-color:${global.colors.AzulEscuro};  
`;

export const Menu = styled.Pressable`
  flex-direction:row; 
  align-items:center; 
  justify-content:center; 
  border-radius:25px; 
  margin-left:16px;  
`;

export const Circulo = styled.View`
 width:8px; 
 height:8px; 
 margin:2px;  
 background-color:${global.colors.Azul};  
 border-radius:25px; 

`;

export const LogoContainer = styled.View`
 flex:1;  
 align-items:center;  

`;

export const Logo = styled.Image`
 width:111px; 
 height:62px;  

`;

export const Perfil = styled.View`
 align-items:center;
 justify-content:center;
 width:51px;
 height:51px;
 border-radius:100px;
 margin-right:16px;
 background-color:${global.colors.Azul}; 

`;

export const PerfilIMG = styled.Image`
 width:20px;
 height:18px;

`;

export const Clicavel = styled.Pressable`
flex-direction:row; 
  align-items:center; 
  justify-content:center; 
  border-radius:25px; 
  margin-left:16px;  

`;
