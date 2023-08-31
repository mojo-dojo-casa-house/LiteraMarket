import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`
  flex-direction:row;  
  align-items:center; 
  justify-content:space-around;  
  width:414px; 
  height:80px; 
  background-color:${global.colors.AzulEscuro};  
`;

export const Home = styled.Image`
  width:33px; 
  height:35px;  
`;

export const Fav = styled.Image`
  width:41px; 
  height:35px;  
`;

export const Categoria = styled.Image`
  width:33px; 
  height:35px;   
`;

export const Bolsa = styled.Image`
  width:30px; 
  height:35px;   
`;

export const Selecionado = styled.View`
 align-items:center;
 justify-content:center;
 width:106px;
 height:106px;
 border-radius:100px;
 margin-bottom:28px;
 background-color:${global.colors.AzulEscuro}; 

`;

export const NãoSelecionado = styled.View``;

export const IconesConteiner = styled.View`
 width:414px;
 height:80px;
 flex-direction:row;
 align-items:center;
 justify-content:space-around;

`;

export const Clicavel = styled.Pressable`

`;
