import styled from 'styled-components/native';
import global from '../../globalStyles';

export const ComentarioContainer = styled.View`
  width:382px;
  height:130px;
  border-radius:20px;
  background-color:${global.colors.AzulEscuro};   
  margin-bottom:90px;
`; 

export const ComentarioHorizontalContainer = styled.View`
  flex-direction:row;  
  margin-left:10px;
  margin-top:10px; 
`;

export const ComentarioVerticalContainer = styled.View`
  flex-direction:column; 
  margin-left:10px; 
  margin-top: 5px;
`;

export const UserIMG = styled.View`
  align-items:center; 
  justify-content:center; 
  width:36px; 
  height:36px; 
  background-color:${global.colors.Cinza};  
  border-radius:100; 
  margin-right: 8px,
`;

export const PerfilIMG = styled.Image`
  width:20px; 
  height:20px;  
`;

export const EstrelasIndividual = styled.Image`
  width:20px; 
  height:22px;  
`;

export const EnviarIMG = styled.Image`
  width:27px; 
  height:24px;  
  margin-horizontal:10px; 
`;

export const EnviarBotão = styled.Pressable`
  width:27px; 
  height:24px;  
  position:absolute; 
  bottom:12px; 
  right:22px;  
`;

export const ComentarioInput = styled.TextInput`
 font-size:16px;  
 font-family:${global.fonts.roboto};  
 color:${global.colors.Cinza};  
 width:320px;  
 height:70px;  
 flex-wrap:'wrap';  
 border-color: transparent;
 border-width: 1px;
 outline-width: 0;
 padding: 10px;

 &::placeholder {
   color: ${global.colors.Cinza}; 
   opacity: 0.6; 
 }
`;
