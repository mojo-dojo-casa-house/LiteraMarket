import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Conteiner = styled.View`
  flex-direction:row;  
  align-items:center; 
  width:382px; 
  height:56px; 
  border-radius:76px; 
  background-color:${global.colors.Branco}; 
  margin-top:14px; 
  margin-horizontal:14px;  
`;

export const BuscaInput = styled.TextInput`
  border-color: transparent;
  border-width: 1px;
  outline-width: 0;
  width: 382px;
  height: 56px;
  padding: 10px;
  color: ${global.colors.Cinza};
  font-size: 20px;
  font-weight: normal;

  &::placeholder {
    color: ${global.colors.Cinza}; 
    opacity: 0.6; 
  }
`;

export const BuscaIcon = styled.Image`
 flexDirection:row; 
 align-items:center; 
 justify-content:center; 
 width:20px; 
 height:20px; 
 border-radius:25px; 

`;

export const BuscaIconConteiner = styled.View`
 flexDirection:row;
 align-items:center;
 justify-content:center;
 width:40px;
 height:40px;
 margin-left:8px;
 border-radius:25px;
 background-color:${global.colors.Azul}; 

`;
