import global from '../../globalStyles';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${global.colors.BrancoFundo};
`;

export const VoltarIMG = styled.Image`
  width: 31px;
  height: 30px;
  margin-left: 16px;
`;

export const TituloText = styled.Text`
  font-size: 24px;
  font-family: ${global.fonts.roboto};
  font-weight: bold;
  color: ${global.colors.AzulEscuro};
`;

export const ConteinerProdutos = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 90px;
  width: 414px;
  padding-horizontal: 16px;
`;
export const ContainerProduto = styled.View`
 flex:1; 
 align-items:center; 
`;

export const Bolinha = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${global.colors.Azul};
  border-radius: 100px;
  position: absolute;
  right: 12px;
  top: 3px;
  z-index: 1;
`;

export const Footer = styled.View`
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const CabecalhoContainer = styled.View`
  height: 88px;
  width: 100%;
  background-color: ${global.colors.Branco};
  border-bottom-width: 1px;
  border-color: ${global.colors.Cinza};
`;

export const HorizontalConteiner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const MeioConteiner = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const FavoritosConteiner = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const BolsaIMG = styled.Image`
  width: 25px;
  height: 28px;
  margin-right: 16px;
`;

export const FavsIMG = styled.Image`
  width: 16px;
  height: 14px;
  margin-right: 5px;
`;

export const RostoIMG = styled.Image`
  width: 43px;
  height: 43px;
`;

export const NumItensText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.Cinza};
`;

export const BarraCabecalho = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${global.colors.Cinza};
`;

export const MensagemFavoritos = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  position: absolute;
  top: 15%;
`;

export const MensagemFavoritosTextG = styled.Text`
  font-size: 32px;
  color: ${global.colors.AzulEscuro};
  font-family: ${global.fonts.roboto};
  font-weight: 200;
`;

export const MensagemFavoritosTextP = styled.Text`
  font-size: 16px;
  color: ${global.colors.Roxo};
  font-family: ${global.fonts.roboto};
  font-weight: 200;
`;
export const Clicavel = styled.Pressable`

`;



  