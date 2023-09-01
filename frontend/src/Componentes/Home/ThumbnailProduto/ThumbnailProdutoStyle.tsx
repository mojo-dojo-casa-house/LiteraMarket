import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`
  flex-direction:column; 
  align-items:center; 
`;

export const Produto = styled.Pressable`
  flex-direction:column; 
  align-items:center; 
  width:185px; 
  height:241px;  
  border-radius:15px; 
  background-color:${global.colors.Branco}; 
  margin-bottom:6px; 
  margin-horizontal:3px; 

`;

export const ImgProduto = styled.Image`
 margin-top:10px;  
 width:150px;  
 height:139px;  

`;

export const FavoritosOverlay = styled.View`
 position:absolute;
 top:2;
 left:2;
`;

export const Button = styled.TouchableOpacity`
 padding:10px;
 border-radius:5px;
`;

export const ImageProduto = styled.Image`
 width:29px;
 height:25px;
`;

export const CarrinhoOverlay = styled.View`
 position:absolute;
 right:15;
 bottom:1;  
`;

export const ImgProdutoCompra = styled.View`
 flexDirection:row;  
 alignItems:center; 
 width:29px;  
 height:29px;  
 marginLeft:17px;  

`;

export const ImgProdutoEstrela = styled.Image`
 flexDirection:row;  
 alignItems:center;  
 width:98px;  
 height:19px;  

`;


export const GeneroProduto = styled.Text`
 font-size:11px;  
 font-weight:600;  
 color:${global.colors.Azul};  
`;

export const TituloProduto = styled.Text`
 font-size:12px;  
 font-weight:bold;  
 color:${global.colors.Preto};  
`;

export const AutorProduto = styled.Text`
 font-size:12px;  
 font-weight:bold;  
 color:${global.colors.Roxo};  
`;

export const PreçoProduto = styled.Text`
 color:${global.colors.Azul};  
 font-size:16px;  
 font-weight:bold;  

`;



