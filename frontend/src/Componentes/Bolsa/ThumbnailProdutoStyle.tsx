
import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Produto = styled.Pressable`
  flex-direction: row;
  width: 381px;
  height: 146px;
  border-radius: 15px;
  background-color: ${global.colors.Branco};
  margin-bottom: 8px;
  margin-horizontal: 3px;
`;

export const ImgProduto = styled.Image`
  margin-top:10px;
  width: 123px;
  height: 122px;
`;

export const FavoritosOverlay = styled.View`
  position: absolute;
  top: 2px;
  right: 2px;
`;

export const Button = styled.Pressable`
  padding: 10px;
  border-radius: 5px;
`;

export const FavIMG = styled.Image`
  width: 29px;
  height: 25px;
`;

export const CarrinhoOverlay = styled.View`
  position: absolute;
  right: 15px;
  bottom:1px; 
`;

export const ImgProdutoCompra = styled.View`
 flexDirection: row; 
 alignItems:center;
 width:29px; 
 height:29px; 
 marginLeft:17px; 
`;

export const ImgProdutoEstrela = styled.Image`
 flexDirection: row; 
 alignItems:center; 
 width:98px; 
 height:19px; 
`;

export const VerticalContainer = styled.View`
 flexDirection: column; 
 marginTop:12px; 
`;

export const GeneroProduto = styled.Text`
 font-size:11px; 
 font-family:${global.fonts.roboto}; 
 font-weight:bold; 
 color:${global.colors.Azul}; 
`;

export const TituloProduto = styled.Text`
 font-size:16px; 
 font-weight:bold; 
 font-family:${global.fonts.roboto}; 
 color:${global.colors.Preto}; 
`;

export const AutorProduto = styled.Text`
 font-size:12px; 
 font-weight:bold; 
 font-family:${global.fonts.roboto}; 
 color:${global.colors.Roxo}; 
`;

export const PreçoProduto = styled.Text`
 color:${global.colors.Azul}; 
 font-family:${global.fonts.roboto}; 
 font-size:20px; 
 font-weight:bold;  
`;

export const QtdContainer = styled.View`
 position:absolute;  
 bottom:12px;  
 right:12px;  
 flexDirection:row;  
 alignItems:center;  
 borderRadius: 20px;  
 backgroundColor:${global.colors.AzulFraco};  
 width:95px;  
 height:30px;  
`;

export const QtdText = styled.Text`
color:${global.colors.AzulEscuro};  
 font-Family:${global.fonts.roboto};  
 font-size: 20px;  
 font-weight: bold; 
 margin-horizontal:15px;   

`;

export const QtdValorText = styled.Text`
 color:${global.colors.AzulEscuro};  
 font-family:${global.fonts.roboto};  
 font-size: 20px';  
 font-weight: bold;
 margin-horizontal:15px;  

`;
    
export const RedondoContainer = styled.View`
 justifyContent:center;  
 alignItems:center; 
 width:30px;  
 height:30px;  
 backgroundColor:${global.colors.AzulForte};  
 borderRadius:100;  

 `;
export const Clicavel = styled.Pressable`

`;


