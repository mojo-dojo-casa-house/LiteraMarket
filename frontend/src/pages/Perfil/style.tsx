import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import global from '../../globalStyles';

export const Container = styled.View`
  flex: 1;
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

export const EstrelasAvaliacao = styled.View`
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




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: global.colors.BrancoFundo,
    },
    cabecalho: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 414,
      marginTop: 16,
      justifyContent: 'space-between',
    },
    VoltarIMG: {
      width: 31,
      height: 30,
      marginLeft: 16,
    },
    tituloText: {
      fontSize: 24,
      fontFamily: global.fonts.roboto,
      fontWeight: 'bold',
      color: global.colors.AzulEscuro,
      marginLeft: 30,
    },
    editarText: {
      fontSize: 20,
      fontFamily: global.fonts.roboto,
      fontWeight: 'bold',
      color: global.colors.AzulEscuro,
      marginRight:16,
    },
    infoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    perfilContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 192,
      height: 192,
      marginTop: 50,
      marginBottom: 10,
      borderRadius: 100,
      backgroundColor: global.colors.Cinza,
    },
    perfilIMG: {
      width: 100,
      height: 108,
    },
    nomeText: {
      fontFamily: global.fonts.roboto,
      fontSize: 24,
      fontWeight: 'bold',
    },
    emailText: {
      fontSize: 15,
    },
    localizacaoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    localizacaoText: {
      fontFamily: global.fonts.roboto,
      fontSize: 16,
      color: global.colors.Roxo,
    },
    localizacaoImage: {
      width: 8,
      height: 12,
      marginRight: 5,
    },




    valoresContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
      width: 381,
      height: 68,
      backgroundColor: global.colors.Branco,
      borderRadius: 38,
    },
    avaliacaoContainer: {
      marginLeft: 25,
    },
    avaliacaoText: {
      fontFamily: global.fonts.roboto,
      fontSize: 16,
      color: global.colors.AzulEscuro,
    },
    avaliacaoInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avaliacaoValor: {
      fontFamily: global.fonts.roboto,
      fontSize: 16,
      color: global.colors.Preto,
      marginRight: 5,
    },
    estrelasAvaliacao: {
      width: 106,
      height: 21,
    },
    divisor: {
      width: 1,
      height: 50,
      marginLeft: 35,
      backgroundColor: global.colors.Cinza,
    },
    vendasContainer: {
      marginLeft: 12,
    },
    vendasText: {
      fontFamily: global.fonts.roboto,
      fontSize: 16,
      color: global.colors.AzulEscuro,
    },
    numeroVendas: {
      fontFamily: global.fonts.roboto,
      marginLeft: 50,
      fontSize: 24,
      color: global.colors.Preto,
    },
    botaoContainer: {
      justifyContent: 'center',
      width: 381,
      height: 43,
      backgroundColor: global.colors.Branco,
      borderRadius: 38,
      marginTop: 8,
    },
    textoBotao: {
      fontFamily: global.fonts.roboto,
      marginLeft: 16,
      fontSize: 16,
      color: global.colors.AzulEscuro,
    },
    tituloVendasContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    tituloVendas: {
      fontSize: 16,
      fontFamily: global.fonts.roboto,
      color: global.colors.AzulEscuro,
      fontWeight: '700',
      marginHorizontal: 15,
    },
    barraVendas: {
      width: 126,
      height: 1,
      backgroundColor: global.colors.AzulEscuro,
    },
    ProdutosConteiner: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      marginBottom:90,
      marginTop:8,
      width:414,
      
      paddingHorizontal:16
    },
    ProdutosDuplaConteiner: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    rodape: {
      position: 'fixed',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default styles;
