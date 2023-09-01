import global from '../../globalStyles';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${global.colors.BrancoFundo};
`;

export const ImagemVoltar = styled.Image`
  width: 31px;
  height: 30px;
  margin-left: 16px;
`;

export const TextoTitulo = styled.Text`
  font-size: 24px;
  font-family: ${global.fonts.roboto};
  font-weight: bold;
  color: ${global.colors.AzulEscuro};
`;

export const IndicadorPonto = styled.View`
  width: 10px;
  height: 10px;
  background-color: ${global.colors.Azul};
  border-radius: 100px;
  position: absolute;
  right: 12px;
  top: 3px;
  z-index: 1;
`;

export const Rodape = styled.View`
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const CabeçalhoContainer = styled.View`
  height: 88px;
  width: 100%;
  background-color: ${global.colors.Branco};
  border-bottom-width: 1px;
  border-color: ${global.colors.Cinza};
`;

export const ContainerHorizontal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const FavoritosContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ImagemBolsa = styled.Image`
  width: 25px;
  height: 28px;
  margin-right: 16px;
`;


export const MeioConteiner = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;


export const NumItensText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.Cinza};
`;


export const Clicavel = styled.Pressable`


`;

