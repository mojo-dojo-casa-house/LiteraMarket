import { StyleSheet } from 'react-native';
import global from '../../globalStyles';

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
