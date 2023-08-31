import global from '../../globalStyles';
import styled from 'styled-components/native';

export const VerticalConteiner = styled.View`
  flex-direction:row;  
  align-items:center;   
`;

export const UserIMG = styled.View`
  align-items:center; 
  justify-content:center; 
  width:36px; 
  height:36px; 
  background-color:${global.colors.Cinza};  
  border-radius:100; 
  margin-right:10px; 
`;

export const PerfilIMG = styled.Image`
  width:20px; 
  height:20px;  
`;

export const ComentarioCampoContainer = styled.View`
  width:382px; 
  height:131px; 
  background-color:${global.colors.AzulEscuro}; 
  border-radius:20px; 
  margin-bottom:8px;  
`;

export const ComentarioContainer = styled.View`
  margin-left:10px; 
  margin-top:10px;  
`;

export const ComentarioUserConteiner = styled.View`
  align-items:center; 
  flex-direction:row;  
`;

export const ComentarioVerticalConteinier = styled.View`
  justify-content:center; 
  flex-direction:column;  
  margin-right:8px;  
`;

export const ComentarioTituloText = styled.Text`
 font-size:24px;  
 font-family:${global.fonts.roboto};  
 color:${global.colors.Preto};  
 font-weight:bold;  

`;

export const ComentarioNumText = styled.Text`
 font-size:14px;  
 font-family:${global.fonts.roboto};  
 color:${global.colors.Cinza};  

`;

export const ComentarioUsuario = styled.View``;

export const ComentarioNome = styled.Text`
 font-size:20px;  
 font-family:${global.fonts.roboto};  
 font-weight:bold;  
 color:${global.colors.Branco};  

`;

export const ComentarioData = styled.Text`
 font-size:12px;  
 font-family:${global.fonts.roboto};  
 color:${global.colors.Cinza};  
 margin-bottom:8px;

`;

export const ComentarioEstrelasIMG = styled.Image`
 width:72px;
 height:14px;
`;

export const ComentarioCampo = styled.View`
 width:290px;
 height:59px;
 margin-left:48px;

`;

export const ComentarioCampoTexto = styled.Text`
 color:${global.colors.Branco};  
 font-size:12px;  
 font-family:${global.fonts.roboto};  

`;

