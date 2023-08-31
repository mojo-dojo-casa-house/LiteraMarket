import styled from 'styled-components/native';
import global from '../../../globalStyles';

export const Container = styled.View`

`;

export const ConteinerProdutos = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 100px;
  width: 414px;
  padding-horizontal: 16px;
  background-color: ${global.colors.BrancoFundo};

`;

export const Opçoes = styled.View`
  flex-direction: row;
  height:38px;
  margin-bottom:10px;
  align-content:center;      

`;

export const OpçoesContainer = styled.View`
  margin-left:16px;
  margin-top:8px;
  flex-direction: row;
`;

export const Opção = styled.Pressable`
  align-items:center;
  margin-horizontal:11px;
`;

export const OpçãoTexto = styled.Text`
 font-size:16px; 
 color:${global.colors.Roxo}; 
`;

export const OpçãoSelecionadaG = styled.View`
 border-bottom-width:1px; 
 border-color:${global.colors.Azul}; 
 margin-horizontal:11px;
`;

export const OpçãoSelecionadaTexto = styled.Text`
  font-size:16px; 
 color:${global.colors.Azul}; 
`;

export const ContainerProduto = styled.View`
 flex:1; 
 align-items:center; 
`;

