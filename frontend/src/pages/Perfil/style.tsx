import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  align-items: center;
  background-color: ${global.colors.BrancoFundo};
`;

export const Cabecalho = styled.View`
  flex-direction: row;
  align-items: center;
  width: 414px;
  margin-top: 16px;
  justify-content: space-between;
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
  margin-left: 30px;
`;

export const EditarText = styled.Text`
  font-size: 20px;
  font-family: ${global.fonts.roboto};
  font-weight: bold;
  color: ${global.colors.AzulEscuro};
  margin-right: 16px;
`;

export const InfoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const PerfilContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 192px;
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 100px;
  background-color: ${global.colors.Cinza};
`;

export const PerfilIMG = styled.Image`
  width: 100px;
  height: 108px;
`;

export const NomeText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 24px;
  font-weight: bold;
`;

export const EmailText = styled.Text`
  font-size: 15px;
`;

export const LocalizacaoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocalizacaoText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.Roxo};
`;

export const LocalizacaoImage = styled.Image`
  width: 8px;
  height: 12px;
  margin-right: 5px;
`;

export const ValoresContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  width: 381px;
  height: 68px;
  background-color: ${global.colors.Branco};
  border-radius: 38px;
`;

export const AvaliacaoContainer = styled.View`
  margin-left: 25px;
`;

export const AvaliacaoText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.AzulEscuro};
`;

export const AvaliacaoInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvaliacaoValor = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.Preto};
  margin-right: 5px;
`;

export const EstrelasAvaliacao = styled.Image`
  width: 106px;
  height: 21px;
`;

export const Divisor = styled.View`
  width: 1px;
  height: 50px;
  margin-left: 35px;
  background-color: ${global.colors.Cinza};
`;

export const VendasContainer = styled.View`
  margin-left: 12px;
`;

export const VendasText = styled.Text`
  font-family: ${global.fonts.roboto};
  font-size: 16px;
  color: ${global.colors.AzulEscuro};
`;

export const NumeroVendas = styled.Text`
  font-family: ${global.fonts.roboto};
  margin-left: 50px;
  font-size: 24px;
  color: ${global.colors.Preto};
`;

export const BotaoContainer = styled.View`
  justify-content: center;
  width: 381px;
  height: 43px;
  background-color: ${global.colors.Branco};
  border-radius: 38px;
  margin-top: 8px;
`;

export const TextoBotao = styled.Text`
  font-family: ${global.fonts.roboto};
  margin-left: 16px;
  font-size: 16px;
  color: ${global.colors.AzulEscuro};
`;

export const TituloVendasContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TituloVendas = styled.Text`
  font-size: 16px;
  font-family: ${global.fonts.roboto};
  color: ${global.colors.AzulEscuro};
  font-weight: 700;
  margin-horizontal: 15px;
`;

export const BarraVendas = styled.View`
  width: 126px;
  height: 1px;
  background-color: ${global.colors.AzulEscuro};
`;

export const ProdutosConteiner = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 90px;
  margin-top: 8px;
  width: 414px;
  padding-horizontal: 16px;
`;

export const ProdutosDuplaConteiner = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Rodape = styled.View`
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;
export const Clicavel = styled.Pressable`

`;
